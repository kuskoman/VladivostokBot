import { Client } from "discord.js";
import { commands } from "./commandHandler";

const client = new Client();
const prefix = process.env.prefix || "$";

client.on("ready", () => {
  console.log(`Bot logged in as ${client.user.tag}`);
});

client.on("message", async (msg) => {
  if (msg.content && msg.content.startsWith(prefix)) {
    const text = msg.content.slice(prefix.length);
    const command = text.split(" ")[0].toLowerCase();
    const args = text.slice(command.length).trim();

    if (commands.has(command)) {
      const cmdExecutor = commands.get(command);
      return cmdExecutor({ command, args, msg });
    }

    msg.channel.send(`Can't recognise command: ${command}`);
  }
});

export default client;

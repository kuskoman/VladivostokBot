import { Client } from "discord.js";
import { commands } from "./commandHandler";
import config from "./config";

const client = new Client();

client.on("ready", () => {
  console.log(`Bot logged in as ${client.user?.tag}`);
  console.log(`Bot prefix is set to '${config.prefix}'`);
});

client.on("message", async (msg) => {
  if (msg.content && msg.content.startsWith(config.prefix)) {
    const text = msg.content.slice(config.prefix.length);
    const command = text.split(" ")[0].toLowerCase();
    const args = text.slice(command.length).trim();

    const cmdExecutor = commands.get(command);
    if (cmdExecutor) {
      return cmdExecutor({ command, args, msg });
    }

    msg.channel.send(`Can't recognise command: ${command}`);
  }
});

export default client;

require("dotenv").config();
const { Client } = require("discord.js");
const { play, leave } = require("./commands");

const client = new Client();
const prefix = process.env.prefix || "$";

client.on("ready", () => {
  console.log(`Bot logged in as ${client.user.tag}`);
});

client.on("message", async msg => {
  if (msg.content && msg.content.startsWith(prefix)) {
    const text = msg.content.slice(prefix.length);
    const command = text.split(" ")[0];
    const args = text.slice(command.length).trim();

    switch (command) {
      case "p":
      case "play":
        play({ msg, args });
        break;
      case "l":
      case "leave":
        leave({ msg });
        break;
      default:
        msg.channel.send("Command not recognised");
    }
  }
});

client.login(process.env.DISCORD_TOKEN);

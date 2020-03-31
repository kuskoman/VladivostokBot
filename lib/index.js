require("dotenv").config();
const { Client } = require("discord.js");

const client = new Client();

client.on("ready", () => {
  console.log(`Bot logged in as ${client.user.tag}`);
});

client.on("message", async msg => {
  if (msg.content === "leliwa") {
    const channel = msg.member.voice.channel;
    if (channel) {
      await channel.join();
      console.log(`Joined channel ${channel.id}`);
    } else {
      msg.channel.send("You must be in a voice channel first");
      return;
    }
    msg.guild.voice.connection.play("http://stream2.nadaje.com:8054/;stream/1");
  }
});

client.login(process.env.DISCORD_TOKEN);

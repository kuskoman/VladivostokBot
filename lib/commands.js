const { joinChannel, endConnection, findRadioStream } = require("./utils");
const { connections } = require("./connections");
const stations = require("../stations.json");

const play = async ({ msg, args }) => {
  const link = findRadioStream(args);
  if (!link) {
    const allStations = Object.keys(stations).join(", ");
    msg.channel.send(`Aviable stations: ${allStations}`);
    return;
  }

  const channel = msg.member.voice.channel;
  if (!(await joinChannel(channel))) {
    return;
  }

  const serverID = msg.guild.id;
  await endConnection(serverID);

  connections[serverID] = msg.guild.voice.connection
    .play(link)
    .on("start", () => {
      console.log(`Playing ${link} on server ${serverID}`);
    })
    .on("error", () => {
      msg.channel.send(`Can't play ${args}: ${link} is not a valid link.`);
      console.log(`Error while trying to play ${args} (link: ${link})`);
    })
    .on("close", () => {
      console.log(`Stopped playing ${link} on server ${serverID}`);
    });
};

const leave = async ({ msg }) => {
  const serverID = msg.guild.id;
  endConnection(serverID);
};

exports.play = play;
exports.leave = leave;

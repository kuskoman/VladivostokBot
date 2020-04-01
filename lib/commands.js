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
      const errMsg = `Error while playing ${args} (link: ${link})`;
      msg.channel.send(errMsg);
      console.log(errMsg);
    })
    .on("close", () => {
      console.log(`Stopped playing ${link} on server ${serverID}`);
    });
};

const leave = async ({ msg }) => {
  const serverID = msg.guild.id;
  endConnection(serverID);
  msg.member.voice.channel.leave();
};

exports.play = play;
exports.leave = leave;

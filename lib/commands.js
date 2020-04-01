const { joinChannel } = require("./utils");
const { connections } = require("./connections");
const stations = require("./stations.json");

const play = async ({ msg, args }) => {
  const link = stations[args];
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
  const connection = connections[serverID];
  if (connection) {
    connection.end();
  }

  connections[serverID] = msg.guild.voice.connection
    .play(link)
    .on("close", () => {
      console.log(`Stopped playing ${link} on server ${serverID}`);
    });
};

exports.play = play;

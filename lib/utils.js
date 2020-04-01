const stations = require("./stations.json");
const { connections } = require("./connections");

const joinChannel = async channel => {
  if (channel) {
    await channel.join();
    console.log(`Joined channel ${channel.id}`);
    return channel;
  }
  msg.channel.send("You must be in a voice channel first");
  return false;
};

const endConnection = async serverID => {
  const connection = connections[serverID];
  if (connection) {
    connection.end();
  }
};

const matchExact = (r, str) => {
  const match = str.match(r);
  return match && str === match[0];
};

const findRadioStream = args => {
  const predefinedStation = stations[args];
  if (predefinedStation) {
    return predefinedStation;
  }

  const linkRegex = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/;
  if (matchExact(linkRegex, args)) {
    return args;
  }

  return false;
};

exports.joinChannel = joinChannel;
exports.endConnection = endConnection;
exports.findRadioStream = findRadioStream;

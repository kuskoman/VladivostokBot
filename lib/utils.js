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

exports.joinChannel = joinChannel;
exports.endConnection = endConnection;

const joinChannel = async channel => {
  if (channel) {
    await channel.join();
    console.log(`Joined channel ${channel.id}`);
    return channel;
  }
  msg.channel.send("You must be in a voice channel first");
  return false;
};

const endConnection = async msg => {
  const serverID = msg.guild.id;
  const connection = connections[serverID];
  if (connection) {
    connection.end();
  }
};

exports.joinChannel = joinChannel;
exports.endConnection = endConnection;

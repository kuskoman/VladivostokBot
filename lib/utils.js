const joinChannel = async channel => {
  if (channel) {
    await channel.join();
    console.log(`Joined channel ${channel.id}`);
    return channel;
  }
  msg.channel.send("You must be in a voice channel first");
  return false;
};

exports.joinChannel = joinChannel;

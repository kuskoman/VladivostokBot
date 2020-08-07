import { Message, VoiceChannel } from "discord.js";
import logger from "../logger";

export const joinChannel = async (msg: Message): Promise<VoiceChannel> => {
  const channel = msg.member?.voice?.channel;
  if (!channel) {
    msg.channel.send("You must be in a voice channel first");
    return null;
  }

  if (!channel.guild?.me?.hasPermission("CONNECT")) {
    msg.channel.send(
      "Bot does not have permission to join channels on this server."
    );
    return null;
  }

  try {
    await channel.join();
    logger.info(`Joined channel ${channel.id}`);

    return channel;
  } catch (e) {
    msg.channel.send(
      "Could not join channel. Please check if bot has permission to join this channel."
    );
    logger.info(`Could not join channel. Error: ${e}`);

    return null;
  }
};

export const leaveChannel = async (msg: Message) => {
  if (!msg.guild?.id) {
    return msg.channel.send("Can't find server id.");
  }

  const voiceChannel = msg.member?.voice?.channel;
  if (!voiceChannel) {
    return msg.channel.send(
      `Can't find voice channel to leave. Join channel and try again.`
    );
  }
  voiceChannel.leave();
  logger.info(`Left channel ${msg.channel.id}`);
};

import { Message } from "discord.js";
import logger from "../logger";

export const joinChannel = async (msg: Message) => {
  const channel = msg.member?.voice?.channel;
  if (!channel) {
    msg.channel.send("You must be in a voice channel first");
    return false;
  }

  if (!channel.guild?.me?.hasPermission("CONNECT")) {
    msg.channel.send(
      "Bot does not have permission to join channels on this server."
    );
    return false;
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

    return false;
  }
};

import { Command } from "../commandHandler";
import logger from "../logger";

const leave: Command = {
  aliases: ["leave", "l"],
  executor({ msg }) {
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
  },
};

export default leave;

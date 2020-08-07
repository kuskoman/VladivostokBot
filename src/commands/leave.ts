import { Command } from "../commandHandler";
import { leaveChannel } from "../utils/connectionUtils";

const leave: Command = {
  aliases: ["leave", "l"],
  executor({ msg }) {
    leaveChannel(msg);
  },
};

export default leave;

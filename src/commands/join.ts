import { joinChannel } from "../utils/connectionUtils";
import { Command } from "../commandHandler";

const join: Command = {
  aliases: ["join", "j"],
  executor: async ({ msg }) => {
    joinChannel(msg);
  },
};

export default join;

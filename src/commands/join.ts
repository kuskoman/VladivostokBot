import { CommandExecuteParams } from "../commandHandler";
import { joinChannel } from "../utils/connectionUtils";

const join = {
  aliases: ["join", "j"],
  executor: async ({ msg }: CommandExecuteParams) => {
    joinChannel(msg);
  },
};

export default join;

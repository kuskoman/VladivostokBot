import { joinChannel } from "../utils/connectionUtils";

const join = {
  aliases: ["join", "j"],
  executor: async ({ msg }) => {
    joinChannel(msg);
  },
};

export default join;

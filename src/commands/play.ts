import { Command } from "../commandHandler";
import { joinChannel, playRadioStation } from "../utils/connectionUtils";
import stations from "../stations";
import { validateLink } from "../utils/stationUtils";

const play: Command = {
  aliases: ["r", "radio", "p", "play"],
  executor: async ({ msg, args }) => {
    await joinChannel(msg);

    const predefinedStation = stations.get(args);
    if (predefinedStation) {
      msg.channel.send(`Playing ${args}.`);
      return playRadioStation(msg, predefinedStation);
    }

    if (validateLink(args)) {
      msg.channel.send(`Playing ${args}: recognised link.`);
      return playRadioStation(msg, predefinedStation);
    }

    msg.channel.send(
      `Unable to find station ${args}. Make sure it exist in stations file or is a valid URL.`
    );
  },
};

export default play;

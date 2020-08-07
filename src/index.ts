import commands from "./commands";
import bot from "./client";
import config from "./config";
import { registerCommand } from "./commandHandler";

commands.forEach((command) => {
  registerCommand(command);
});

bot.login(config.token);

import "dotenv/config";
import commands from "./commands";
import bot from "./client";
import { registerCommand } from "./commandHandler";

commands.forEach((command) => {
  registerCommand(command);
});

bot.login(process.env.DISCORD_TOKEN);

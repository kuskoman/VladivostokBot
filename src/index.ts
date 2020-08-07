import "dotenv/config";
import commands from "./commands";
import bot from "./client";
import { registerCommand } from "./commandHandler";

commands.forEach(({ aliases, executor }) => {
  registerCommand(aliases, executor);
});

bot.login(process.env.DISCORD_TOKEN);

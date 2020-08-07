import "dotenv/config";
import bot from "./client";

bot.login(process.env.DISCORD_TOKEN);

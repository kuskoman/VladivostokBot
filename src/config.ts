import "dotenv/config";

const config = {
  token: process.env.DISCORD_TOKEN,
  prefix: process.env.prefix || "$",
};

export default config;

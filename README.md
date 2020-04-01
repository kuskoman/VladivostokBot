# Vladivostok Bot

Vladivostok Bot is a very simple Discord bot used for playing internet radios.

## Usage

Bot has only two commands:

### Play

Usage:

**play** args

or:

**p** args

Description:

Plays station given in args. Args can be either full link
to http(s) stream, or one of stations predefined in [stations.json](stations.json).

At this moment in case when link is not valid bot will try to play it
anyway, not posting any error message.

### Leave

Usage:

**leave** or **l**

Causes bot to end connection and leave current voice channel on server.

## Why

I already have one [Discord.js Bot in portfolio](https://github.com/kuskoman/dumbot),
however I wanted to make a simpler bot, which could be published to the internet
without worrying about getting banned for scrapping YouTube.
Also, I wanted to write something in pure JavaScript, instead of TypeScript.

## How to add bot to the server

You can use [this oauth link](https://discordapp.com/api/oauth2/authorize?client_id=694659362978791525&permissions=36776976&scope=bot).
When adding bot to the server you can disable unnecessary permissions, however it may cause errors (at this moment bot is not checking permissions).

## How to create own bot instance

To host own bot instance you have to install [nodejs](https://nodejs.org/) and [yarn](https://yarnpkg.com/) and [npm](https://www.npmjs.com/package/npm)
(npm is usually installed by default).
Bot was developed with node v.12.6.0 and yarn 1.16.0.

Steps:

### 1. Clone or copy bot files

To do it you can use git (`git clone https://github.com/kuskoman/VladivostokBot.git`)
or download files in any other way (for example by downloading zip package).

### 2. Install dependencies

Use npm, or yarn:

yarn:

```shell
yarn
```

npm:

```shell
npm install
```

### 3. Get Discord API key

Go to [discordapp.com/developers/applications](https://discordapp.com/developers/applications),
click on `New Application` in top right corner, give your app a name, then go to Bot in settings menu
on the left side of the page, click `Add Bot`. After you do it you can click it `Copy` button
under `Click to Reveal Token` text. After you copied your token, you can create `.env` file inside
root (main) bot directory. Add a new line with `DISCORD_TOKEN = <your token>`.
Bot should automatically load your token after restart.

### 4. Invite bot to your server

Return to [discordapp.com/developers/applications](https://discordapp.com/developers/applications),
click on your bot, click on `OAauth2` in the left `Settings` menu, then generate link to invite bot.
You can give it all permissions (by clicking `bot`, then `Administrator` in scopes section),
or limit it to permissions neccessary for reading and sending messages and using voice activity.
After doing it you can copy generated link and click it to add the bot to your server.

### 5. Run bot

To run bot simply type:

```shell
node ./lib/index.js
```

Inside bot directory.

If you are using Linux you may be interested in using `screen` package to make the bot running
in the background.

## Contributing

### Adding radio stations

At this moment bot is not haveing a lot of radio stations addresses in `stations.json` file.
However, you can fell free to make a request to add a new radio station by
[creating an issue on github](https://github.com/kuskoman/VladivostokBot/issues).

### Report and/or fix bugs

Feel free to report a bug (also using issues), or to fix them and create pull request with fixes.

## PR with new functionalities

I'm open to all PR's with new functionalities, however I want this bot to stay focused on playing
radio stations, so I won't merge PR's with not-related functionalities. If you want to
extend bots' functionality see [dumbot](https://github.com/kuskoman/dumbot), which is my other bot
written in TypeScript, shipped with a module system, which makes easier to write new extensions to it.

If you still want to extend VladivostokBot with a new functionality you are able to create your
own fork, and continue developing your own bot. I am happy to see anyone making good use
of my code.

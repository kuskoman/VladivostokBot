# Vladivostok Bot

![Docker Cloud Automated build](https://img.shields.io/docker/cloud/automated/kuskoman/vladivostokbot)
![Docker Pulls](https://img.shields.io/docker/pulls/kuskoman/vladivostokbot)

Vladivostok Bot is a very simple Discord bot captable of playing internet radio stations.

## Usage

The recommended way to use the bot is using [Docker image aviable on DockerHub](https://hub.docker.com/r/kuskoman/vladivostokbot).
If you don't have Docker yet get it on official [Docker page](https://docs.docker.com/get-docker/).

To pull the latest version of image all you need to do is to use:

```shell
docker run -e DISCORD_TOKEN=YOUR_DISCORD_TOKEN kuskoman/vladivostokbot:latest
```

### Getting Discord Token

Go to [discordapp.com/developers/applications](https://discordapp.com/developers/applications),
click on `New Application` in top right corner, give your app a name, then go to Bot in settings menu
on the left side of the page, click `Add Bot`. After you do it you can click it `Copy` button
under `Click to Reveal Token` text and paste it in comment above, to make the bot run correctly.

### Inviting bot to server

Return to [discordapp.com/developers/applications](https://discordapp.com/developers/applications),
click on your bot, click on `OAauth2` in the left `Settings` menu, then generate link to invite bot.
You can give it all permissions (by clicking `bot`, then `Administrator` in scopes section),
or limit it to permissions neccessary for reading and sending messages and using voice activity.
After doing it you can copy generated link and click it to add the bot to your server.

### Deployment to Kubernetes

I have no idea why would you want to deploy this bot to Kubernetes cluster, however if you want
to you can use [example deployment file](kubernetes/example-deployment.yml).

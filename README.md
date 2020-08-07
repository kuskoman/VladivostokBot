# Vladivostok Bot

![Docker Cloud Automated build](https://img.shields.io/docker/cloud/automated/kuskoman/vladivostokbot)
![Docker Pulls](https://img.shields.io/docker/pulls/kuskoman/vladivostokbot)

Vladivostok Bot is a very simple Discord bot used for playing internet radios.

## Usage

Bot has only three commands:

### Play

Usage:

**\$play** args

or:

**\$p** args

Description:

Plays station given in args. Args can be either full link
to http(s) stream, or one of stations predefined in [stations.json](stations.json).

At this moment in case when link is not valid bot will try to play it
anyway, not posting any error message.

### Leave

Usage:

**\$leave** or **\$l**

Causes bot to end connection and leave current voice channel on server.

### Join

Usage:

**\$join** or **\$j**

Causes bot to join your current voice channel.

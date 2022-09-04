# MewCord
---

[![Run on Replit](https://cdn.discordapp.com/attachments/1015650380908068884/1015965188853334086/68747470733a2f2f7265706c2e69742f62616467652f6769746875622f53756468616e506c61797a2f446973636f72642d4d75736963426f74_1.png) [![Version 1.0.0](https://cdn.discordapp.com/attachments/1015650380908068884/1015961096127008788/20220904_175248_1_2.png)](https://github.com/lerkfx/mewcord/releases/tag/discord-bot) 

> Mewcord is a customizable bot which is meant to be used with Myuu - Discord meets Pokemon! It will lock the channel when a shiny or Greninja-Ash is detected!

## Working of MewCord:

- Detects Greninja-Ash & Shinies
- Locks the channel to avoid accidental killing
- Unlocks the channel after 10 seconds

## config.json:

```json
{
    "token": "",
    "prefix": "!",
    "embedcolor": "98a6ff",
    "statustext": "!help",
    "roleid": "@everyone"
}
```

- Token: Create a discord bot on [Discord Developer Portal](https://discord.com/developers/applications) and grab the bot token. Import it in token field of config.json
- Prefix: There are two prefixes, one is changeable in the config.json and other is the mention prefix (@MewCord)
- Embed Color: This value defines the hex color of the embeds of the bot!
- Status Text: This field will determine the text of the status of bot. Playing !help is the default status
- RoleID: Locks the channel for a certain role when shiny is detected! @everyone is default. **Enter the RoleID, not the name! (@everyone is exception as it has no roleID)**


## Credits

Mewcord uses a lot of dependencies and has implemented ideas of other developers like:

- [node.js] - evented I/O for the backend
- [aoi.js](https://www.npmjs.com/package/aoi.js) - The most advanced string-based package to create a Discord Bot fast and powerful.
- [Nebby.js](https://www.npmjs.com/package/nebbyjs) - MewCord Idea but in a npm package! Thanks for the inspiration.


## Installation

MewCord requires [Node.js](https://nodejs.org/) v16 to run.

1. Configure the `config.json` to your desired settings & import the token!
2. Install the dependencies and devDependencies and start the server.

```sh
npm i
node index.js
```

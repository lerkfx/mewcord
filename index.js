const MewCord = require('aoi.js');
const config = require('./config.json');

const bot = new MewCord.Bot({
   token: config.token,
   prefix: [config.prefix, "<@$clientID>", "<@!$clientID>"],
   intents: "all"
});

bot.status({
    text: config.statustext,
    type: "PLAYING",
    time: 12
})

const loader = new MewCord.LoadCommands(bot);
loader.load(bot.cmd, "./commands/")

require('./antiCrash.js')(bot)

bot.onMessage({respondToBots: true})
bot.onInteractionCreate()
bot.onMessageUpdate()

bot.variables({
    lastUser: ""
})
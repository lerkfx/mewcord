const config = require('../config.json')
module.exports = {
  name: "$alwaysExecute",
  code: `$modifyChannelPerms[$replaceText[$replaceText[$checkCondition[${config.roleid}==@everyone];true;$guildID];false;${config.roleid}];$channelID;/sendmessage]
  $channelSendMessage[$channelID;<@$getChannelVar[lastUser]> {newEmbed: {color:${config.embedcolor}} {description:**__Channel has been unlocked!__** Thank me later! :v:} {author:$userTag:$authorAvatar}{thumbnail:$serverIcon}}]
  
  $wait[10s]
  
  $channelSendMessage[$channelID;<@$getChannelVar[lastUser]> {newEmbed: {color:${config.embedcolor}} {description:**__SHINY DETECTED!__** I've locked this channel for 10 seconds!} {author:$userTag:$authorAvatar}{thumbnail:$serverIcon}}]
  $modifyChannelPerms[$replaceText[$replaceText[$checkCondition[${config.roleid}==@everyone];true;$guildID];false;${config.roleid}];$channelID;-sendmessage]
  
  $onlyIf[$checkContains[$getEmbed[$channelID;$messageid;1;description];A wild ]==true;]
  $onlyIf[$checkContains[$getEmbed[$channelID;$messageid;1;authorname];Vs.​ ​ ​​★]==true;]
    
  $onlyForIDs[438057969251254293;]`
}

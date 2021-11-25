const Discord = require("discord.js");
require("dotenv").config();

const client = new Discord.Client();
const prefix = "!"; // just an example, change to whatever you want
const { embeds } = require("discord.js");

client.on("message", message => {
  if (!message.content.startsWith(prefix)) return;

  const args = message.content.trim().split(/ +/g);
  const cmd = args[0].slice(prefix.length).toLowerCase(); // case INsensitive, without prefix

  if (cmd === "ping") message.reply("pong");

  if (cmd === "help") {
    if (args[1] != null) {
      message.reply("Here are the results of my query")
      const embed = new Discord.RichEmbed()
        .setTitle("Info for the next bus to arive at stop #" + args[1])
        .setURL("https://map.oc-bot.tk/map/?stop=" + args[1]) 
        .setColor(0x00ae86)
        .setDescription()
        .setThumbnail("https://map.oc-bot.tk/favicon.ico")
        .setTimestamp();
      message.channel.send({ embed });
    }
  }
});
client.login(process.env.BOT_TOKEN);

const Discord = require("discord.js");
require("dotenv").config();

const client = new Discord.Client();
const prefix = "!"; // just an example, change to whatever you want
const { embeds } = require("discord.js");

const { SlashCommandBuilder } = require('@discordjs/builders');

const data = new SlashCommandBuilder()
	.setName('setname')
	.setDescription('setdiscription')
	.addStringOption(option =>
		option.setName('op.setname')
			.setDescription('op.discription')
			.setRequired(true));

client.on("message", message => {
  if (!message.content.startsWith(prefix)) return;

  const args = message.content.trim().split(/ +/g);
  const cmd = args[0].slice(prefix.length).toLowerCase(); // case INsensitive, without prefix

  if (cmd === "ping") message.reply("pong");

  if (cmd === "stop" || cmd === "stp" || cmd === "s") {
    if (args[1] != null) {
      message.reply("Here are the results of my query")
      const embed = new Discord.RichEmbed()
        .setTitle("Info for the next bus to arive at stop #" + args[1])
        .setURL("https://map.oc-bot.tk/map/?stop=" + args[1]) 
        .setColor(0x7289DA)
        .setDescription("Results for the next busses at stop #" + args[1])
        .setThumbnail("https://map.oc-bot.tk/img/oc-bot-finial.png")
      message.channel.send({ embed });
    } 
  }
});
client.login(process.env.BOT_TOKEN);

const Discord = require("discord.js");
const client = new Discord.Client();

exports.run = (client, message) => {

message.channel.send("CS GO Gifi yükleniyor.").then(message => {

    var csgo = [
 
      "https://media.giphy.com/media/AhJmvcdiNRP1wbThuy/giphy.gif",
      "https://media.giphy.com/media/TgOOIJcXlQ0h7tGQKX/giphy.gif",
      "https://media.giphy.com/media/dU5veLjgCF14n3Q7cg/giphy.gif",
      "https://media.giphy.com/media/fxfmMuGbh5aPtZ9T6j/giphy.gif",
      "https://media.giphy.com/media/igylhrJ6n15flClKE3/giphy.gif",
      "https://media.giphy.com/media/5pMOCSYWVRsOMWTYO4/giphy.gif",
      "https://media.giphy.com/media/UtEQ8viTEfCdiAOW4Q/giphy.gif",
      "https://media.giphy.com/media/MdjMlh67CwSxjqBhBS/giphy.gif",
      "https://media.giphy.com/media/jTqqaRiHxnMsD6EieD/giphy.gif",
      "https://media.giphy.com/media/l56OIvKENY4hnt7U95/giphy.gif",
      "https://media.giphy.com/media/3oKIPnZGBWgVyqs3hm/giphy.gif"
    ];

    var csgo = csgo[Math.floor(Math.random() * csgo.length)];

    message.edit(`${csgo}`);
  });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["csgo"],
  permLevel: 0
};

exports.help = {
  name: "csgo",
  description: "CSGO Gifi Atar.",
  usage: "csgo"
};
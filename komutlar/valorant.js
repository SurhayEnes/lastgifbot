const Discord = require("discord.js");
const client = new Discord.Client();

exports.run = (client, message) => {

message.channel.send("Valorant Gifi yükleniyor.").then(message => {

    var valo = [
 
      "https://media.giphy.com/media/MctuLwGj40HC6ATDoI/giphy.gif",
      "https://media.giphy.com/media/0hGEdu5FU9xixsZkC8/giphy.gif",
      "https://media.giphy.com/media/xvRPIAtMwKQ2SlxKtx/giphy.gif",
      "https://media.giphy.com/media/66ypQhs0NDgUXLtWxp/giphy.gif",
      "https://media.giphy.com/media/XtINMCqoEJrNAzBh0v/giphy.gif",
      "https://media.giphy.com/media/jFiNR5uXqYKrpPaA5r/giphy.gif",
      "https://media.giphy.com/media/zb6h8ELC4DIx17IRvJ/giphy.gif",
      "https://media.giphy.com/media/T2c8bP33DwBbr01gZ4/giphy.gif",
      "https://media.giphy.com/media/UlCrVe6BWrI7dpL15G/giphy.gif",
      "https://media.giphy.com/media/JUqyG1V1V4yXzhFcUa/giphy.gif",
      "https://media.giphy.com/media/rCe7hW68aehg4izUJs/giphy.gif"
    ];

    var valo = valo[Math.floor(Math.random() * valo.length)];

    message.edit(`${valo}`);
  });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["valo"],
  permLevel: 0
};

exports.help = {
  name: "valorant",
  description: "Valorant Gifi Atar.",
  usage: "valorant"
};
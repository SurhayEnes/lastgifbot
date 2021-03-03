const Discord = require("discord.js");
const client = new Discord.Client();

exports.run = (client, message) => {

message.channel.send("Minecraft Gifi yükleniyor.").then(message => {

    var mc = [
 
      "https://media.giphy.com/media/JKI5e0hGVSdos/giphy.gif",
      "https://media.giphy.com/media/zDuStFVpRJIZ2/giphy.gif",
      "https://media.giphy.com/media/JNySPj69tVEEaaqoa9/giphy.gif",
      "https://media.giphy.com/media/cuHjncTuHW40g/giphy.gif",
      "https://media.giphy.com/media/lpHQvZu6stHKo/giphy.gif",
      "https://media.giphy.com/media/25oFarLxPqrNS/giphy.gif",
      "https://media.giphy.com/media/L00auhhVx68CI/giphy.gif",
      "https://media.giphy.com/media/OmbyTTZGa60gM/giphy.gif",
      "https://media.giphy.com/media/CaNTnWzl0CU0M/giphy.gif",
      "https://media.giphy.com/media/I6bnF1KUvMupa/giphy.gif",
      "https://media.giphy.com/media/ZPQLVgoXJT7K8/giphy.gif",
      "https://media.giphy.com/media/WPYq4ssI1BCNy/giphy.gif",
      "https://media.giphy.com/media/qCFw3jLXkTAkM/giphy.gif",
      "https://media.giphy.com/media/j5ThXdq3wTKdW/giphy.gif",
      "https://media.giphy.com/media/139eZBmH1HTyRa/giphy.gif",
      "https://media.giphy.com/media/TOkOM7ywZC6OI/giphy.gif",
      "https://media.giphy.com/media/I6bnF1KUvMupa/giphy.gif",
      "https://media.giphy.com/media/6rU6mvxEKolQQ/giphy.gif",
      "https://media.giphy.com/media/8PdbFTUISy6faFkRJU/giphy.gif",
      "https://media.giphy.com/media/WPYq4ssI1BCNy/giphy.gif",
      "https://media.giphy.com/media/QsDbN1RczmTmJaMwOu/giphy.gif"
    ];

    var mc = mc[Math.floor(Math.random() * mc.length)];

    message.edit(`${mc}`);
  });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["mc"],
  permLevel: 0
};

exports.help = {
  name: "minecraft",
  description: "Minecraft Gifi Atar.",
  usage: "mc"
};
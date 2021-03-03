const Discord = require("discord.js");
const client = new Discord.Client();

exports.run = (client, message) => {

message.channel.send("Kedi Gifi yükleniyor.").then(message => {

    var kedi = [
 
      "https://giphy.com/gifs/S8qphps0H7rugLm8jT/html5",
      "https://media.giphy.com/media/10QncnD0UNuBMI/giphy.gif",
      "https://media.giphy.com/media/lrybj7eBYKNuFdmm1r/giphy.gif",
      "https://media.giphy.com/media/3og0IM4vQExjC6auwU/giphy.gif",
      "https://media.giphy.com/media/l1BgRpqI2ChMu7UKk/giphy.gif",
      "https://media.giphy.com/media/l1BgRpqI2ChMu7UKk/giphy.gif",
      "https://giphy.com/gifs/10QncnD0UNuBMI/html5",
      "https://media.giphy.com/media/YswJabhTWwQQo/giphy.gif",
      "https://media.giphy.com/media/Ida3G7AMu4mtAFZyPU/giphy.gif",
      "https://media.giphy.com/media/KBOyv87d0RVkZVzgYz/giphy.gif",
      "https://media.giphy.com/media/3og0Iv3fKY7WOLSMtW/giphy.gif",
      "https://media.giphy.com/media/3og0INzogvgpgD8sWk/giphy.gif",
      "https://media.giphy.com/media/Y1Sh5izWjC66v6JwTY/giphy.gif",
      "https://media.giphy.com/media/RhB7rtNBzfYxoqgjWo/giphy.gif",
      "https://media.giphy.com/media/3og0IQ0isLlRIP8zdu/giphy.gif",
      "https://media.giphy.com/media/8qDrwZi2MDsi7v17Sn/giphy.gif",
      "https://media.giphy.com/media/3og0IREXJZq5MLPEfC/giphy.gif",
      "https://media.giphy.com/media/3og0IHgLTLrgYY4ZPi/giphy.gif",
      "https://media.giphy.com/media/l1BgSaurjdVK9e2Aw/giphy.gif"
    ];

    var kedi = kedi[Math.floor(Math.random() * kedi.length)];

    message.edit(`${kedi}`);
  });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["ked,", "kedi-gif", "kedi-gifi", "kedi-gifiat"],
  permLevel: 0
};

exports.help = {
  name: "kedi",
  description: "Kedi Gifi Atar.",
  usage: "ked,"
};
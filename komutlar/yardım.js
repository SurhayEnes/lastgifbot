const Discord = require('discord.js')

exports.run = (client, message) => {

    const embed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setTitle('Narcos Gif Bot Altyapısı Yardım Menüsü')
    .addField('<a:maviyildiz:815557092127539251> !csgo', 'CS GO Gifi Atar')
    .addField('<a:maviyildiz:815557092127539251> !kedi', 'Kedi Gifi Atar')
    .addField('<a:maviyildiz:815557092127539251> !köpek', 'Köpek Gifi Atar')
    .addField('<a:maviyildiz:815557092127539251> !minecraft', 'Minecraft Gifi Atar')
    .addField('<a:maviyildiz:815557092127539251> !valorant', 'Valorant Gifi Atar')
    .addField('<a:maviyildiz:815557092127539251> !espri', 'Bot Size Espri Atar')
    .addField('<a:maviyildiz:815557092127539251> !avatar', 'Bot Size Avatarınızı Atar')
    message.channel.send(embed)
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["help"],
    permLevel: 0
  };
  
  exports.help = {
    name: "yardım"
  };

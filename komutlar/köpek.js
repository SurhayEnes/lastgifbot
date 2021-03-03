const Discord = require("discord.js");
const client = new Discord.Client();

exports.run = (client, message) => {

message.channel.send("Köpek Gifi yükleniyor.").then(message => {

    var köpek = [
 
      "https://media.giphy.com/media/57C1Qyuo4KN4LpUvY0/giphy.gif",
      "https://media.giphy.com/media/dxOLzTjCEKIPtD0qqv/giphy.gif",
      "https://media.giphy.com/media/dxOLzTjCEKIPtD0qqv/giphy.gif",
      "https://media.giphy.com/media/51Uiuy5QBZNkoF3b2Z/giphy.gif",
      "https://media.giphy.com/media/4Zo41lhzKt6iZ8xff9/giphy.gif",
      "https://media.giphy.com/media/xTiTnf9SCIVk8HIvE4/giphy.gif",
      "https://media.giphy.com/media/Pn1gZzAY38kbm/giphy.gif",
      "https://media.giphy.com/media/RQSuZfuylVNAY/giphy.gif",
      "https://media.giphy.com/media/3o7abAHdYvZdBNnGZq/giphy.gif",
      "https://media.giphy.com/media/3o7TKSha51ATTx9KzC/giphy.gif",
      "https://media.giphy.com/media/BpDYodBlBXFIs/giphy.gif",
      "https://media.giphy.com/media/9rtpurjbqiqZXbBBet/giphy.gif",
      "https://media.giphy.com/media/Y1Sh5izWjC66v6JwTY/giphy.gif",
      "https://media.giphy.com/media/fnlXXGImVWB0RYWWQj/giphy.gif",
      "https://media.giphy.com/media/OCcWVUuPjYJIQ/giphy.gif",
      "https://media.giphy.com/media/HqzWVmrPy4B0c/giphy.gif",
      "https://media.giphy.com/media/12pJ8OxSWwO86Y/giphy.gif",
      "https://media.giphy.com/media/aiE3JQU3vLqTK/giphy.gif",
      "https://media.giphy.com/media/BLCHvwl9C5j1u/giphy.gif"
    ];

    var köpek = köpek[Math.floor(Math.random() * köpek.length)];

    message.edit(`${köpek}`);
  });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["köpek"],
  permLevel: 0
};

exports.help = {
  name: "köpek",
  description: "Köpek Gifi Atar.",
  usage: "Köpek"
};
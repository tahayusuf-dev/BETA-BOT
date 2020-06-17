const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");
//

exports.run = (client, message, params) => {
  if (!message.guild) {
    const ozelmesajuyari = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setTimestamp()
      .setAuthor(message.author.username, message.author.avatarURL)
      .addField("**Eğlence Komutları Özel Mesajlarda Kullanılamaz!**");
    return message.author.sendEmbed(ozelmesajuyari);
  }
  if (message.channel.type !== "dm") {
    const ıhlamur = new Discord.RichEmbed()
      .setTitle(`${message.author.username}  Ihlamur İçti`)
      .setColor("RANDOM")
      .setTimestamp()
      .setDescription("")
      .setURL("")
      .setImage(
        `https://cdn.discordapp.com/attachments/634056817017880586/645334668857704478/hangi-hastaliga-hangi-kis-icecegi-iyi-gelir--2641463.Gif.gif`
      );
    return message.channel.sendEmbed(ıhlamur);
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["ıhlamur-iç", "ıhlamuriç"],
  permLevel: 0
};

exports.help = {
  name: "ıhlamur",
  description: "Ihlamur İçersiniz",
  usage: "ıhlamur"
};
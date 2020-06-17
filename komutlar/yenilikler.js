const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
  if (message.channel.type !== 'dm') {
    const yenilikler = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setDescription(`Bota Yapılan Yenilikler:`)
    .addField(`1-Yeni Süreli Jail Komutu  \n`,`2-Yeni Uyarı Komutu  \n`)
    message.channel.sendEmbed(yenilikler) }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yeni',],
  permLevel: 0
};

exports.help = {
  name: 'yenilikler',
  description: 'Bota Yapılan Yenilikleri Gösterir.',
  usage: 'yenilikler'
};
const Discord = require('discord.js');
const db = require('quick.db');
const ayarlar = require('../ayarlar.json');

exports.run = async (client, message, args) => {
let prefix = await require('quick.db').fetch(`prefix_${message.guild.id}`) || ayarlar.prefix
  if (!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send(`Bu Komutu Kullanabilmek için \`Sunucuyu Yönet\` Yetkisine Sahip Olmalısın!`)
  if (!args[0]) return message.channel.send(`**Doğru Kullanım: \`${prefix}reklam aç\` veya \`${prefix}reklam kapat\`**`)
  
  if (args[0] == 'aç') {
    db.set(`reklam_${message.channel.id}`, 'acik')
      const embed = new Discord.RichEmbed()
      .setTitle(`✅ İşlem Başarılı ✅`)
      .setColor("GREEN")
      .setTimestamp()
      .setDescription(`Bu Kanalda Başarıyla Reklam Engelleme Sistemi Açıldı!\nKapatmak için \`${prefix}reklam kapat\` Yazın!`)
      .setFooter(`${message.guild.name}`)
      message.channel.send(embed)
    message.react('✅')
  };
  if (args[0] == 'kapat') {
    db.set(`reklam_${message.channel.id}`, 'kapali')     
    const embed2 = new Discord.RichEmbed()
    .setTitle('✔ İşlem Başarılı ✔')
    .setColor('RED')
    .setTimestamp()
    .setDescription(`Bu Kanalda Başarıyla Reklam Engelleme Sistemi Kapatıldı!\nAçmak için \`${prefix}reklam aç\` Yazın!`)
    .setFooter(`${message.guild.name}`)
    message.channel.send(embed2)
    message.react('✔')
  };

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['reklam-engelleme','reklam-engel','reklamengel','reklamengelleme','reklamkoruması','reklam-koruması'],
  permLevel: 0
}; //Dcs Ekibi

exports.help = {
  name: 'reklam',
  description: 'Reklam Engelleme Sistemi!',
  usage: '+reklam aç veya +reklam kapat'
};
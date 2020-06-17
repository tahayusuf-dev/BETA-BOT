const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, params) => {
 if (!message.member.hasPermission("KICK_MEMBERS"))
     return message.channel.send("❌ Bu Komutu Kullana Bilmek için `Üyeleri At` Yetkisine Sahip Olmalısın!")
    if (!message.guild) {
    const ozelmesajuyari = new Discord.RichEmbed()
    .setColor('RED')
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('**❌ Bu Komutu Özel Mesajlarda Kullanılamaz!**')
    return message.author.sendEmbed(ozelmesajuyari); }
    if (message.channel.type !== 'dm') {
 let guild = message.guild
  let user = message.mentions.users.first();
  if (message.mentions.users.size < 1) return message.reply('**⚠ Kimi Atmak İstediğini Yazmalısın!**').catch(console.error);

      message.guild.kick(user)
  const embed = new Discord.RichEmbed()
    .setColor('RED')
    .setTimestamp()
  .setTitle('✅  ' +  message.author.username + ' İşlem Başarılı Kullanıcı Sunucudan Atıldı!' )
  .setImage(`https://cdn.discordapp.com/attachments/619325209727729680/654049708381175830/tenor.gif`)
  return message.channel.sendEmbed(embed)
};
}      
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["at"],
  permLevel: 0
}; //Dcs Ekibi

exports.help = {
  name: 'kick',
  description: 'Seçilen kişiyi banlar',
  usage: '+kick '
};
const Discord = require('discord.js');

exports.run = (client, message, args, member) => {
  
if(!message.member.hasPermission('MANAGE_ROLES')) return message.reply('Bu Komutu Kullanmak İçin **Rolleri Yönet** İzininiz Olması Gerektir').then(m => m.delete(10000))
    let mesaj = args.slice(0).join('718786257332731935'); // Siparis Kanal ID
    if (mesaj.length < 1) return message.channel.send(':x: Lütfen Siparişinizi Yazınız');
  let incidentchannel = message.guild.channels.find(`id`, "718786257332731935"); // Teslimat Kanal ID
    if(!incidentchannel) return message.channel.send(":x: **siparişler** kanalını bulamıyorum.");

    incidentchannel.send(` BETA | **Sipariş**\n\n- ${mesaj} ***\n Sipariş Veren: ${message.author}***`);
    message.channel.send(':white_check_mark: Siparişiniz siparişler kanalına İletildi. Teslimatınız Geleceği Zaman teslimatlar kanalına Bildirilecek ')
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['siparişver'],
  permLevel: 0
};

exports.help = {
  name: 'sipariş',
  description: 'Siparis',
  usage: 'sipariş <mesaj>'
};
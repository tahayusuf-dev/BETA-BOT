const Discord = require('discord.js');
exports.run = function(client, message, args) {
  if(message.author.id !== '509060113408196608') return message.reply('Bu Komudu Sadece Botun Sahibi Kullanabilir');
      var oyun = args.join(` `);
      client.user.setGame(oyun);
      message.channel.send(`Botun Oynuyor Kısmı **${oyun}** Olarak Değiştirildi `)
      message.react('✅');
    }
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'oyundeğiştir',
  description: 'Botun oynuyor kısmını değiştirir',
  usage: 'oyundeğiş'
};
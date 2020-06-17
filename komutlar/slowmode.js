const Discord = require('discord.js');

exports.run = async(client, message, args) => { //Dcs Ekibi
if (message.channel.type !== "text") return;
const limit = args[0] ? args[0] : 0;
  if(!limit) {
              var embed = new Discord.RichEmbed()
                .setDescription(`✅ Doğru Kullanım: \`slowmode <sure>\``)
                .setColor('RANDOM')
                .setTimestamp()
            message.channel.send({embed})
            return
          }
if (limit > 21600) {
    return message.channel.sendEmbed(new Discord.RichEmbed().setDescription("⏰ Süre Limiti Makisimum **21.600** Saniye Olabilir!").setColor('RANDOM'));
} //Dcs Ekibi
    message.channel.sendEmbed(new Discord.RichEmbed().setDescription(`✅ Yavaş Mod **${limit}** Saniye Olarak Ayarlandı!`).setColor('RANDOM'));
var request = require('request');
request({
    url: `https://discordapp.com/api/v7/channels/${message.channel.id}`,
    method: "PATCH",
    json: {
        rate_limit_per_user: limit
    }, //Dcs Ekibi
    headers: {
        "Authorization": `Bot ${client.token}`
    },
})};
  exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["slow-mode", "slowmode", "yavas-mod", 'yavasmod', 'yavaşmod'],
  permLevel: 2,
};

exports.help = {
  name: 'slow-mode',
  description: 'Sohbete yazma sınır (süre) ekler.', //Dcs Ekibi
  usage: 'slow-mode [1/10]',
};
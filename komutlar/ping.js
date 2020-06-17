const Discord = require('discord.js')

exports.run = async (client, message, args, color) => {

    let start = Date.now(); message.channel.send('♻ Yükleniyor!').then(message => { 
    let diff = (Date.now() - start); 
    let API = (client.ping).toFixed(2)
        
        let embed = new Discord.RichEmbed()
        .setTitle(`🏃 Sistem Hızı 🏇`)
        .setColor(0xff2f2f)
        .addField("📶 Mesaj Gecikmesi: ", `${diff} MS`, true)
        .addField("💻 Bot Gecikmesi: ", `${API} MS`, true)
        message.edit(embed);
      
    });

}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };

exports.help = {
    name: 'ping',
    category: 'INFO'
}
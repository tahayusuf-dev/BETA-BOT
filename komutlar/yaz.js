const Discord = require('discord.js');
//Dcs Ekibi
exports.run = (client, message, args) => {
    let mesaj = args.slice(0).join(' ');
    if (mesaj.length < 1) return message.reply('Yazmam için herhangi bir şey yazmalısın.');
    message.delete();
    const embed = new Discord.RichEmbed()
    .setColor(0xD97634)
    .setDescription(`**${mesaj}**`)
    return message.channel.sendEmbed(embed);
}; //Dcs Ekibi

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['say', 'söyle'],
  permLevel: 0
};

exports.help = {
  name: 'yaz'
  //Dcs Ekibi
};
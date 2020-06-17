const Discord = require("discord.js");
exports.run = (client, message, args) => {
  if (!message.guild) {
    const ozelmesajuyari = new Discord.RichEmbed()
      .setColor(0xff0000)
      .setTimestamp()
      .setAuthor(message.author.username, message.author.avatarURL)
      .addField(
        "⚠ **Uyarı** ⚠",
        "`rol-ver` **Adlı Komutu Özel Mesajlarda Kullanamazsın!**"
      );
    return message.author.sendEmbed(ozelmesajuyari);
  }
  if (!message.member.hasPermission("MANAGE_ROLES"))
    return message.reply(
      "❌ Bu Komutu Kullana Bilmek için `Rolleri Yönet` Yetkisine Sahip Olmalısın!"
    );
  let guild = message.guild;
  let rol = message.mentions.roles.first();
  let user = message.mentions.members.first();

  if (!user)
    return message
      .reply("**⚠ Rol Vermek İstediğin Kişiyi Yazmalısın!**")
      .catch(console.error);
  if (rol.length < 1) return message.reply("**⚠ Bir Rol Yazmalısın!**");

  user.addRole(rol);
  const embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setTimestamp()
    .setDescription(
      `✅  Başarıyla ${user} İsimli Kullanıcıya ${rol} İsimli Rol Verildi!`
    )
    .setFooter("Owner Bot");
  message.channel.send(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["rolver", "rv"],
  permLevel: 0
};
 //Dcs Ekibi
exports.help = {
  name: "rol-ver",
  description: "İstediğiniz kişiyi istediğiniz rolü verir.",
  usage: "rol-ver [kullanıcı] [@rol]"
};
   
const Discord = require("discord.js");
exports.run = (client, message, args) => {
  if (!message.guild) {
    const ozelmesajuyari = new Discord.RichEmbed()
      .setColor(0xff0000)
      .setTimestamp()
      .setAuthor(message.author.username, message.author.avatarURL)
      .addField(
        "⚠ **Uyarı** ⚠",
        "`rol-al` **Adlı Komutu Özel Mesajlarda Kullanamazsın!**"
      );
    return message.author.sendEmbed(ozelmesajuyari);
  }
  if (!message.member.hasPermission("MANAGE_ROLES"))
    return message.channel.send(
      "❌ Bu Komutu Kullana Bilmek için `Rolleri Yönet` Yetkisine Sahip Olmalısın!"
    );
  let guild = message.guild;
  let rol = message.mentions.roles.first();
  let user = message.mentions.members.first();

  if (!user)
    return message.channel
      .send("**⚠ Kimeden Rol Alınacağını Yazmalısın!**")
      .catch(console.error);
  if (rol.length < 1)
    return message.channel.send("**⚠ Alınacak Rolü Yazmalısın!**");
  user.removeRole(rol);

  const embed = new Discord.RichEmbed()
    .setDescription(
      `✅ | Başarıyla ${user} İsimli Kullanıcıdan ${rol} İsimli Rol Alındı!`
    )
    .setFooter(client.user.username, client.user.avatarURL)
    .setColor("RANDOM")
    .setTimestamp();
  message.channel.send({ embed });
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["rolal", "ra"],
  permLevel: 0
};
 //Dcs Ekibi
exports.help = {
  name: "rol-al",
  description: "İstediğiniz kişiden istediğiniz rolü alır.",
  usage: "rol-al [kullanıcı] [@rol]"
};
   
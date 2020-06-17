const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  if (!message.member.hasPermission("KICK_MEMBERS"))
    return message.reply(
      `Bu komutu kullanabilmek için **Üyeleri At** iznine sahip olmalısın!`
    );
  let user =
    message.mentions.users.first() || message.guild.members.get(args[0]);

  if (!user)
    return message.channel.send("Uyarmak İstediğiniz Kişiyi Bulamadım.");

  let sebeb = args.join(" ");
  if (!sebeb)
    return message.channel.send(
      "Lütfen Uyarmak İstediğiniz Kişinin Sebebini Yazın."
    );

  const embed = new Discord.RichEmbed()
    .setDescription("Kişi Uyarıldı!")
    .addField(
      "Uyaran Yetkili",
      `${message.author} Discord Id: ${message.author.id}`
    )
    .addField("Uyarılan Kişi", `${user} Discord Id: ${user.id}`)
    .addField("Uyarılma Sebebi", sebeb)
    .addField("Uyarılma Kanalı", message.channel)

  //şimdi bu embedi göndermek kaldı.
  var kanal = message.guild.channels.find(`name`, "🚩✦ceza-log");
  if (!kanal)
    return message.author.send(
      `Merhaba Ben ${client.user} Lütfen ${kanal} Adlı Kanal Açın Çünkü Uyarıları Oraya Gönderiyorum.`
    );
  else kanal.send(embed);
  user.send(`Merhaba ${user} Rahatsız Ettim Ama Mecburdum
\n${message.guild.name} Adlı Sunucudan ${sebeb} Adlı Sebeb İle Uyarı Yedin
\nSeni Uyaran Kişi: ${message.author}`);
};
//kodu deniyelim
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};
//kod başarılı ! açıklamada vericem kodu.
exports.help = {
  name: "uyar",
  description: "Kullanıcıyı Uyarır.",
  usage: "kullanıcıyı uyarırsın"
};
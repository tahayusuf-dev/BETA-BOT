const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
var prefix = ayarlar.prefix;
exports.run = (client, message, args) => {
  
    const juke = new Discord.RichEmbed()
    .setColor('BETA yardım menüsü')
    .setAuthor(`BETA`, client.user.avatarURL) 
      .setDescription('**-komutadı Yazarak Komutları Çalıştırabilirsiniz**')
.setThumbnail(client.user.avatarURL)
      .addField('** GENEL KOMUTLAR (YAPIM AŞAMASINDA)**', '`avatar`, `csgo`,`sipariş`,`instagram`,`afk`, `giriş-çıkış-ayarla`, `duyuru`, `google`, `havadurumu`, `hesapla`, `steamfiyat`, `oylama`, `servericon`, `çekiliş`')
      .addField('** EĞLENCE KOMUTLARI (YAPIM AŞAMASINDA)**', '`boks`, `zula-deste-aç`, `aşk-ölçer`,`dondurmayala`, `döviz`, `kapaklaflar`, `espri`, `opendoor`, `dans`, `notal`, `slot`, `ıhlamur`, `yaz`')
      .addField('** MODERASYON KOMUTLARI (YAPIM AŞAMASINDA)**', '`jail`,kick`,`rolver`,`rolver`,`temizle`,`ban`,`talep`,`mod-log`,`uyarı`')
       .addField('** BİLGİ KOMUTLARI (YAPIM AŞAMASINDA)**', '`istatistik`, `reklam aç`,`slow-mode`,`ping`, `yenilikler`, `yetkilerim`')
    .setFooter(``, client.user.avatarURL)
    .setTimestamp()
    message.channel.send(juke).catch()
  


};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
};

exports.help = {
    name: 'yardım',
      category: 'Yardım',
      description: 'Yardım kategorilerini gösteir.',
};
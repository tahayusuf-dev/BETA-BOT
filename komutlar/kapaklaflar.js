exports.run = async (client, msg, args) => {
    let kapak=[
      "Yalanım yok ki benim, aklımdasın hala. Ne yapayım güzelim gereksiz şeyleri kafa hep takıyorum.",
      "A101'de satılan 25 kuruşluk çikolatanın tadını bile veremeyen insanlar var. Öyle gereksizler... ",
      "Bazı insanların da aynı televizyon gibi tepesine vurulduğunda düzelmesi en büyük temennimdir.",
      "Kimine göre kral, kimine göre yalanım... Unutmayın beyler adamına göre adamım... ",
      "Bazı kişiler dümen çevirmek olunca kaptan olmak için sıraya giriyor.",
      "Içinden geldiği için bizimle olanları, işinden geldiği için bizimle olanlara değiştik. Yanlış ettik.",
      "Canımı yakacak kadar güçlü olanın sonuçlarına katlanacak kadar gücü olmalı.",
      "Eğer ben güneş isem sen aysın. Benim doğduğum yerde sen batarsın.",
      "Bunu Yazan Tosun Okuyana Koysun İçimden Geldi :D",
      "Bana laf cambazlığı yapma kızım, bir laf sokarım kürtajla bile aldıramazsın.",
      "Terk etmek kolaysa senin için, el sallamakta hiç zor olmaz benim için.",
      "Insanlığa davet etsek yol tarifi isteyecek insanlar var.",
      "Senin etiketinin olduğu yer fiyatı ben koyarım.",
      "Balonlar, içi boş şeylerin de bazen yükselebileceğini hatırlatır.",
      "Bazı insanları sarımsaklasak da mı saklasak, yoksa boğup da rahatlasak mı?",
      "Laf sokma, kapak olursun. Yalvarma, köpek olursun. Delikanlı ol, belki yanımda yer bulursun.",
      "Her gün resmine bakmadan duramıyorum. –İlla TÜKÜRECEĞİM!",
    ]
       let member = msg.mentions.members.first()
     if(!member)return msg.channel.send({embed: {
   color: Math.floor(Math.random() * (0xFFFFFF + 1)),
   description: (':no_entry_sign: Ya Kime Kapak Laf Soyluyecem?')
  }});
    else{
    msg.channel.send({embed: {
   color: Math.floor(Math.random() * (0xFFFFFF + 1)),
   description: (`${kapak[Math.floor(Math.random() * 16)]}.`)
    }})
    }
    
  }
  
  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
   };
   
  exports.help = {
    name: 'kapaklaflar',
    description: 'Etiketlediniz Kisiye Kapak Laflar Soler.',
    usage: 'kapaklaflar'
   }
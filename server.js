const Discord = require('discord.js');
const Jimp = require('jimp');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');
const chalk = require('chalk');
const fs = require('fs');
const moment = require('moment');
const db = require("quick.db");
const express = require("express");
const http = require("http");
const app = express();
require('./util/eventLoader')(client);

var prefix = ayarlar.prefix;

const log = message => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] ${message}`);
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./komutlar/', (err, files) => {
  if (err) console.error(err);
  log(`${files.length} komut yüklenecek.`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    log(`Yüklenen komut: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

client.on("guildMemberAdd", member => {
const embed = new Discord.RichEmbed()
.setColor('RANDOM')
.setTitle('Hoşgeldin Dostum')
.setDescription('Doğru Yerdesin Uygun Fiyat Ve Kaliteli Hizmete Ayak Basıyorsun İyi Eğlenceler')           
member.send(embed)
})

client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};



app.listen(process.env.PORT);
app.get("/", (request, response) => {
  response.sendStatus(200);
});
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 5000);




client.on('message', msg => {
  if (msg.content.toLowerCase() === 'sa') {
		if (!msg.guild.member(msg.author).hasPermission("BAN_MEMBERS")) {
			msg.author.sendMessage('Aleyküm selam,  hoş geldin ^^'); 
		} else {
		msg.channel.send('Aleyküm Selam Hoşgeldin ');
		}
	}
});

client.on("message", msg => {
  var reklam = db.fetch(`reklam_${msg.channel.id}`);
  if (reklam == "acik") {
    const reklam = [
      ".com",
      ".net",
      ".xyz",
      ".tk",
      ".pw",
      ".io",
      ".me",
      ".gg",
      "www.",
      "https",
      "http",
      ".gl",
      ".org",
      ".com.tr",
      ".biz",
      "net",
      ".rf.gd",
      ".az",
      ".party",
      "j4j"
    ];
    if (reklam.some(word => msg.content.includes(word))) {
      try {
        if (!msg.member.hasPermission("BAN_MEMBERS")) {
          msg.delete();

          return msg
            .reply("Reklam Yapmayı Kes! ⚠")
            .then(msg => msg.delete(3000));
        }
      } catch (err) {
        console.log(err);
      }
    } //Dcs Ekibi
  } else if (reklam == "kapali") {
  }
  if (!reklam) return;
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === '!kralol') {
		if (!msg.guild.member(msg.author).hasPermission("BAN_MEMBERS")) {
			msg.author.sendMessage('BAK ŞUAN KRALSIN BAKK OLDUN ^^'); 
		} else {
		msg.reply('BAK ŞUAN KRALSIN BAKK OLDUN ');
		}
	}
});

const botadi = "BETA BOT"

client.on('messageDelete', message => {
  let modlogs = db.get(`modlogkanaly_${message.guild.id}`)
  const modlogkanal = message.guild.channels.find(kanal => kanal.id === modlogs);
  if(!modlogs) return;
  if(modlogs) {
    if (message.content.length > 1024) {
      modlogkanal.send({embed: {
    color: 3447003,
    author: {
      name: `${message.author.tag} tarafından gönderilen bir mesaj silindi`,
      icon_url: message.author.DisplayAvatarURL
    },
    fields: [{
        name: `Silinen mesaj 1024 karakterden fazla mesajı gösteremem`,
        value: `\`\`\`Bilinmiyor...\`\`\``
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: message.author.DisplayAvatarURL,
      text: `${botadi} | Mod-Log Sistemi`
    }
  }
});
      
 client.on('guildMemberAdd', async (member) => {
    var kanal = member.guild.channels.get('718779802852655154')
    kanal.send(`**Heeey! ${member} Sunucumuza Hoşgeldin. Seninle Beraber ${member.guild.memberCount} Kişi Olduk!`) ;
})
      
    } else {
      modlogkanal.send({embed: {
    color: 3447003,
    author: {
      name: `${message.author.tag} kullanıcısının mesajı silindi\n`,
      icon_url: message.author.DisplayAvatarURL
    },
    fields: [{
        name: `Silinen mesaj:`,
        value: `\`\`\` ${message.content} \`\`\``
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: message.author.DisplayAvatarURL,
      text: `${botadi} | Mod-Log Sistemi`
    }
  }
});
    }
  }
})


client.on('guildBanAdd', async (guild, user) => {
  let modlogs = db.get(`modlogkanaly_${guild.id}`)
  const modlogkanal = guild.channels.find(kanal => kanal.id === modlogs);
  if(!modlogs) return;
  if(modlogs) {
    let embed = new Discord.RichEmbed()
    .setColor("3447003")
    .setAuthor("Bir kişi sunucudan yasaklandı")
    .setThumbnail(user.avatarURL||user.defaultAvatarURL)
    .addField(`Yasaklanan kişi`, `\`\`\` ${user.tag} \`\`\` `)
    .setFooter(`${botadi} | Mod-Log Sistemi`)
    .setTimestamp()
    modlogkanal.send(embed)
  }
});

client.on('guildBanRemove', async (guild, user) => {
  let modlogs = db.get(`modlogkanaly_${guild.id}`)
  const modlogkanal = guild.channels.find(kanal => kanal.id === modlogs);
  if(!modlogs) return;
  if(modlogs) {
    let embed = new Discord.RichEmbed()
    .setColor("3447003")
    .setAuthor("Bir kişinin yasağı kaldırıldı")
    .setThumbnail(user.avatarURL||user.defaultAvatarURL)
    .addField(`Yasağı kaldırılan kişi`, `\`\`\` ${user.tag} \`\`\` `)
    .setFooter(`${botadi} | Mod-Log Sistemi`)
    .setTimestamp()
    modlogkanal.send(embed)
  }
});

client.on('channelCreate', async channel => {
  let modlogs = db.get(`modlogkanaly_${channel.guild.id}`)
  const modlogkanal = channel.guild.channels.find(kanal => kanal.id === modlogs);
  if(!modlogs) return;
  if(modlogs) {
    if (channel.type === "text") {
      modlogkanal.send({embed: {
      color: 3447003,
      fields: [{
          name: `Bir Kanal Oluşturuldu. \nOluşturulan Kanalin İsmi:`,
          value: `\`\`\` ${channel.name} \`\`\``
        },
        {
          name: `Oluşturulan Kanalin Türü`,
          value: `\`\`\` Metin Kanalı \`\`\``
        }
      ],
      timestamp: new Date(),
      footer: {
        text: `${botadi} | Mod-Log Sistemi`
      }
     }});
    } else {
      if (channel.type === "voice") {
       modlogkanal.send({embed: {
    color: 3447003,
    fields: [{
        name: `Bir Kanal Oluşturuldu. \nOluşturulan Kanalin İsmi:`,
        value: `\`\`\` ${channel.name} \`\`\``
      },
      {
        name: `Oluşturulan Kanalin Türü`,
        value: `\`\`\` Ses Kanalı \`\`\``
      }
    ],
    timestamp: new Date(),
    footer: {
      text: `${botadi} | Mod-Log Sistemi`
    }
  }
}); 
      }
    }
  }
});

client.on('channelDelete', async channel => {
  let modlogs = db.get(`modlogkanaly_${channel.guild.id}`)
  const modlogkanal = channel.guild.channels.find(kanal => kanal.id === modlogs);
  if(!modlogs) return;
  if(modlogs) {
    if (channel.type === "text") {
      modlogkanal.send({embed: {
      color: 3447003,
    fields: [{
        name: `Bir Kanal Silindi. \nSilinen Kanalin İsmi:`,
        value: `\`\`\` ${channel.name} \`\`\``
      },
      {
        name: `Silinen Kanalin Türü`,
        value: `\`\`\` Ses Kanalı \`\`\``
      }
      ],
      timestamp: new Date(),
      footer: {
        text: `${botadi} | Mod-Log Sistemi`
      }
     }});
    } else {
      if (channel.type === "voice") {
       modlogkanal.send({embed: {
    color: 3447003,
    fields: [{
        name: `Bir Kanal Silindi. \nSilinen Kanalin İsmi:`,
        value: `\`\`\` ${channel.name} \`\`\``
      },
      {
        name: `Silinen Kanalin Türü`,
        value: `\`\`\` Ses Kanalı \`\`\``
      }
    ],
    timestamp: new Date(),
    footer: {
      text: `${botadi} | Mod-Log Sistemi`
    }
  }
}); 
      }
    }
  }
});

client.on('roleDelete', async role => {
  let modlogs = db.get(`modlogkanaly_${role.guild.id}`)
  const modlogkanal = role.guild.channels.find(kanal => kanal.id === modlogs);
  if(!modlogs) return;
  if(modlogs) {
    modlogkanal.send({embed: {
    color: 3447003,
    fields: [{
        name: `Bir Rol Silindi. \nSilinen Rolun İsmi:`,
        value: `\`\`\` ${role.name} \`\`\``
      }
    ],
    timestamp: new Date(),
    footer: {
      text: `${botadi} | Mod-Log Sistemi`
    }
  }
});
  }
});

client.on('emojiDelete', async emoji => {
  let modlogs = db.get(`modlogkanaly_${emoji.guild.id}`)
  const modlogkanal = emoji.guild.channels.find(kanal => kanal.id === modlogs);
  if(!modlogs) return;
  if(modlogs) {
    modlogkanal.send({embed: {
    color: 3447003,
    fields: [{
        name: `Bir Emoji Silindi. \nSilinen Emojinin İsmi:`,
        value: `\`\`\` ${emoji.name} \`\`\``
      }
    ],
    timestamp: new Date(),
    footer: {
      text: `${botadi} | Mod-Log Sistemi`
    }
  }
});
  
  }
});


client.on('roleCreate', async role => {
  let modlogs = db.get(`modlogkanaly_${role.guild.id}`)
  const modlogkanal = role.guild.channels.find(kanal => kanal.id === modlogs);
  if(!modlogs) return;
  if(modlogs) {
     modlogkanal.send({embed: {
    color: 3447003,
    fields: [{
        name: `Yeni Bir Rol Oluşturuldu. \nOluşturulan Rolun İsmi:`,
        value: `\`\`\` ${role.name} \`\`\``
      }
    ],
    timestamp: new Date(),
    footer: {
      text: `${botadi} | Mod-Log Sistemi`
    }
  }
});
  }
});


client.on('messageUpdate', async (oldMessage, newMessage) => {
  let modlogs = db.get(`modlogkanaly_${oldMessage.guild.id}`)
  const modlogkanal = oldMessage.guild.channels.find(kanal => kanal.id === modlogs);
  if(!modlogs) return;
  if(modlogs) {
    if (oldMessage.author.bot) {
        return false;
    }

    if (!oldMessage.guild) {
        return false;
    }

    if (oldMessage.content == newMessage.content) {
        return false;
    }
    modlogkanal.send({embed: {
      color: 3447003,
      author: {
      name: `${oldMessage.author.tag} mesajını düzenledi:\n`,
      icon_url: oldMessage.author.DisplayAvatarURL
      },
      fields: [{
        name: `Eski mesaj:`,
        value: `\`\`\` ${oldMessage.content} \`\`\``
      },
      {
        name: `Yeni Mesaj:`,
        value: `\`\`\` ${newMessage.content} \`\`\``
      }
      ],
      timestamp: new Date(),
      footer: {
      icon_url: oldMessage.author.DisplayAvatarURL,
      text: `${botadi} | Mod-Log Sistemi`
      }
    }
    });
  }
});


client.on('emojiCreate', async emoji => {
  let modlogs = db.get(`modlogkanaly_${emoji.guild.id}`)
  const modlogkanal = emoji.guild.channels.find(kanal => kanal.id === modlogs);
  if(!modlogs) return;
  if(modlogs) {
    modlogkanal.send({embed: {
    color: 3447003,
    fields: [{
        name: `Bir emoji eklendi. \nEklenen Emojinin İsmi:`,
        value: `\`\`\` ${emoji.name} \`\`\``
      }
    ],
    timestamp: new Date(),
    footer: {
      text: `${botadi} | Mod-Log Sistemi`
    } 
   } 
});
  }
});



client.on('message', async message => {
 
  let prefix = await db.fetch(`prefix_${message.guild.id}`) || ayarlar.prefix
 
  let kullanıcı = message.mentions.users.first() || message.author
  let afkdkullanıcı = await db.fetch(`afk_${message.author.id}`)
  let afkkullanıcı = await db.fetch(`afk_${kullanıcı.id}`)
  let sebep = afkkullanıcı
 
  if (message.author.bot) return;
  if (message.content.includes(`${prefix}afk`)) return;
 
  if (message.content.includes(`<@${kullanıcı.id}>`)) {
    if (afkdkullanıcı) {
      message.channel.send(`:x: **${message.author.tag}** adlı kullanıcı artık AFK degil...`)
      db.delete(`afk_${message.author.id}`)
    }
    if (afkkullanıcı) return message.channel.send(`:x: **${kullanıcı.tag}** şu anda AFK.\n Sebep : **${sebep}**`)
  }

  if (!message.content.includes(`<@${kullanıcı.id}>`)) {
    if (afkdkullanıcı) {
      message.channel.send(`:x: **${message.author.tag}** adlı kullanıcı artık AFK değil.`)
      db.delete(`afk_${message.author.id}`)
    }
  }
  }
);



////////////////////////

client.on("guildMemberAdd", member => {
	
	var channel = member.guild.channels.find("name", "giriş-çıkış");
	if (!channel) return;
	
	var role = member.guild.roles.find("name", "üye");
	if (!role) return;
	
	member.addRole(role); 
	
	channel.send(member + " artık " + role + " rolü ile aramızda");
	
	member.send("Aramıza hoş geldin! Artık @üye rolüne sahipsin!")
	
});

////////////////////////


client.on("message", async message => {
  
  if(message.content.startsWith(prefix)) return;
  if(message.author.bot) return;
  
  var id = message.author.id;
  var gid = message.guild.id;
  
  var xp = await db.fetch(`xp_${id}_${gid}`);
  var lvl = await db.fetch(`lvl_${id}_${gid}`);
  var xpToLvl = await db.fetch(`xpToLvl_${id}_${gid}`);
  
  
  if(!lvl) {
    
    db.set(`xp_${id}_${gid}`, 5);
    db.set(`lvl_${id}_${gid}`, 1);
    db.set(`xpToLvl_${id}_${gid}`, 100);
    
  } else {
    
    var random = Math.random() * (8 - 3) + 3;
    db.add(`xp_${id}_${gid}`, random.toFixed());
    console.log(xp);
    
    if(xp > xpToLvl) {
      
      db.add(`lvl_${id}_${gid}`, 1);
      db.add(`xpToLvl_${id}_${gid}`, await db.fetch(`lvl_${id}_${gid}`) * 100);
      var lvl = await db.fetch(`lvl_${id}_${gid}`);
      message.channel.send("Tebrikler, " + message.author + ". Seviye atladın! Yeni seviyen: **" + lvl + "**");
      var role = message.guild.roles.get(await db.fetch(`role_${gid}_${lvl}seviye`));
      if(!role) return;
      else {
        message.member.addRole(role);
        message.channel.send("Tebrikler! **" + lvl + "** seviye olarak @" + role.name + " rolünü kazandınız.");
      }
      
    }
    
  }
  
  
  
});




////////////////////////



////////////////////////


client.elevation = message => {
  if(!message.guild) {
	return; }
  let permlvl = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === ayarlar.sahip) permlvl = 4;
  return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;

client.on('warn', e => {
  console.log(chalk.bgYellow(e.replace(regToken, 'that was redacted')));
});

client.on('error', e => {
  console.log(chalk.bgRed(e.replace(regToken, 'that was redacted')));
});

client.login(ayarlar.token);

client.on("guildMemberAdd", async member => {
   const fs = require('fs');
    let gkanal = JSON.parse(fs.readFileSync("./ayarlar/glog.json", "utf8"));
    const gözelkanal = member.guild.channels.get(gkanal[member.guild.id].resim)
    if (!gözelkanal) return;
     let username = member.user.username;
        if (gözelkanal === undefined || gözelkanal === null) return;
        if (gözelkanal.type === "text") {
            const bg = await Jimp.read("https://cdn.discordapp.com/attachments/450693709076365323/473184528148725780/guildAdd.png");
            const userimg = await Jimp.read(member.user.avatarURL);
            var font;
            if (member.user.tag.length < 15) font = await Jimp.loadFont(Jimp.FONT_SANS_128_WHITE);
            else if (member.user.tag.length > 15) font = await Jimp.loadFont(Jimp.FONT_SANS_64_WHITE);
            else font = await Jimp.loadFont(Jimp.FONT_SANS_32_WHITE);
            await bg.print(font, 430, 170, member.user.tag);
            await userimg.resize(362, 362);
            await bg.composite(userimg, 43, 26).write("./img/"+ member.id + ".png");
              setTimeout(function () {
                    gözelkanal.send(new Discord.Attachment("./img/" + member.id + ".png"));
              }, 1000);
              setTimeout(function () {
                fs.unlink("./img/" + member.id + ".png");
              }, 10000);
        }
    })

client.on("guildMemberRemove", async member => {
   const fs = require('fs');
    let gkanal = JSON.parse(fs.readFileSync("./ayarlar/glog.json", "utf8"));
    const gözelkanal = member.guild.channels.get(gkanal[member.guild.id].resim)
    if (!gözelkanal) return;
        let username = member.user.username;
        if (gözelkanal === undefined || gözelkanal === null) return;
        if (gözelkanal.type === "text") {            
                        const bg = await Jimp.read("https://cdn.discordapp.com/attachments/450693709076365323/473184546477572107/guildRemove.png");
            const userimg = await Jimp.read(member.user.avatarURL);
            var font;
            if (member.user.tag.length < 15) font = await Jimp.loadFont(Jimp.FONT_SANS_128_WHITE);
            else if (member.user.tag.length > 15) font = await Jimp.loadFont(Jimp.FONT_SANS_64_WHITE);
            else font = await Jimp.loadFont(Jimp.FONT_SANS_32_WHITE);
            await bg.print(font, 430, 170, member.user.tag);
            await userimg.resize(362, 362);
            await bg.composite(userimg, 43, 26).write("./img/"+ member.id + ".png");
              setTimeout(function () {
                    gözelkanal.send(new Discord.Attachment("./img/" + member.id + ".png"));
              }, 1000);
              setTimeout(function () {
                fs.unlink("./img/" + member.id + ".png");
              }, 10000);
        }
    })

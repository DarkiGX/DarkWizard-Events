const Discord = require('discord.js');
const bot = new Discord.Client();

bot.login('NzQ1NzEwMTQ2NzA0OTAwMTU3.Xz1usQ.Qiggh6q1J2U1AcgQKLWsUArAleE');

bot.on("guildCreate", async guild => {
    console.log(`Entrei no servidor ${guild.name}`);
    const nserver =
      `<a:Aprovado_DW:809120490819551242>\`Entrei em um novo servidor:\`\n\n` +
      `> **__Nome:__  ${guild.name}**\n` +
      `> **__Id do servidor:__ ${guild.id}**\n` +
      `> **__Região do servidor:__ ${guild.region}**\n` +
      `> **__Dono:__ ${guild.owner.user.tag}**\n` +
      `> **__Id do dono:__ ${guild.owner.user.id}**\n` +
      `> **__Membros:__ ${guild.memberCount}**\n\n` +
      `**Agora eu estou em __${bot.guilds.cache.size}__ servidores.**`;
  
    const logGuild = bot.guilds.cache.get("802289502563205140");
    if (!logGuild) return;
  
    const channel = logGuild.channels.cache.get("809131292423618600");
    if (!channel) return;
  
    channel.send(nserver);
  });

  bot.on("guildDelete", async guild => {
    console.log(`Saí do servidor ${guild.name}`);
    const nserver =
      `<a:Negado_DW:809120068743069707>\`Saí de um servidor:\`\n\n` +
      `> **__Nome:__  ${guild.name}**\n` +
      `> **__Id do servidor:__ ${guild.id}**\n` +
      `> **__Região do servidor:__ ${guild.region}**\n` +
      `> **__Dono:__ ${guild.owner.user.tag}**\n` +
      `> **__Id do dono:__ ${guild.owner.user.id}**\n` +
      `> **__Membros:__ ${guild.memberCount}**\n\n` +
      `**Agora eu estou em __${bot.guilds.cache.size}__ servidores.**`;
  
    const logGuild = bot.guilds.cache.get("802289502563205140");
    if (!logGuild) return;
  
    const channel = logGuild.channels.cache.get("809503009948041226");
    if (!channel) return;
  
    channel.send(nserver);
  });

  bot.on('message', message => {
    if (message.content.startsWith('d!testelog')){
        message.delete();
        message.reply('está tudo ok!')
    }
  });
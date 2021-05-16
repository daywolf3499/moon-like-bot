const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(Logged in as ${client.user.tag}!);
});
let prefix = '"'
client.on('message', msg => {
  if (msg.content === prefix+'text') {
    msg.reply('text');
  }
});

client.login(''); 

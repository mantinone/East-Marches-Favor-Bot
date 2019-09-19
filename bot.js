var Discord = require("discord.js")
var client = new Discord.Client()
require('dotenv').config()

console.log(process.env.TEST);

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}`)
})

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!')
  }
})

client.login(process.env.TOKEN)

const DiscordJS = require('discord.js')
const {intents} = require('discord.js')
const client = new DiscordJS.Client({
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES
  ]
})

// Import express for the website
const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('DiscBot')
})

app.listen(3000, () => {
  console.clear()
  console.log('The website is online')
})

client.on('ready', () => {
  console.log('The bot is online')
})
client.login(process.env['TOKEN'])

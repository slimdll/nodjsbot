const TelegramBot = require ('node-telegram-bot-api')
const TOKEN = '537949933:AAGcSvlIr49Ikr0TS0POL3hvyn34scVqHZ4'
const bot = new TelegramBot('TOKEN', { polling: true})
  

bot.on(['message', msg => {
  bot.sendMessage(msg.chat.Id, 'Hello Heroku,')
})

bot.on(['/add', '/anclar'], require('./lib/cmd_add')(bot) )

bot.on(['/title', '/titulo'], (msg) => {
  
})

bot.start()

const TelegramBot = require ('node-telegram-bot-api')
const TOKEN = '537949933:AAGcSvlIr49Ikr0TS0POL3hvyn34scVqHZ4'
const bot = new TelegramBot('TOKEN', { polling: true})
  

bot.on(['message', msg => {
  bot.sendMessage(msg.chat.Id, 'Hello Heroku, bot says: "Hi, $(msg.from.first_name')
})


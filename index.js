const TelegramBot = require ('node-telegram-bot-api')
const TOKEN = '529348970:AAFe1xIkfLObyiimeLAqugep90eX3kii66U'
const bot = new TelegramBot('TOKEN', { polling: true})
  

bot.on(['message', msg => {
  bot.sendMessage(msg.chat.Id, 'Hello Heroku, bot says: "Hi, $(msg.from.first_name')
})


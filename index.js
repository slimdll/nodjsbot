const  TelegramBot  =  require ( 'node-telegram-bot-api' )
const TOKEN = '537949933:AAGcSvlIr49Ikr0TS0POL3hvyn34scVqHZ4'
const bot = new TelegramBot({
  token: token,
  polling: {limit: 50}
})

bot.on(['/start', '/hello'], (msg) => {
  if(msg.chat.type != 'supergroup')
    return msg.reply.text("Sorry, I only work with supergroups")
  console.log(msg)
  msg.reply.text(msg.text.slice(msg.entities[0].length) || '<Untitled>')
  .then( d => {
    bot.pinChatMessage(d.result.chat.id, d.result.message_id)
  })
})

bot.on(['/add', '/anclar'], require('./lib/cmd_add')(bot) )

bot.on(['/title', '/titulo'], (msg) => {
  
})

bot.start()

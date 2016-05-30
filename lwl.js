var fs = require('fs');
var TelegramBot = require('node-telegram-bot-api');
var bot_token = require('./token.js');
var bot = new TelegramBot(bot_token.token, {polling: true});

bot.on('message', function (msg) {
    var chatId = msg.chat.id;
    var messageText = msg.text;
    console.log(msg);
    bot.sendMessage(chatId,'Aoooowwwwww!');
});

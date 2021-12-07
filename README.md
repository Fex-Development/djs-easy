# djs-easy
`djs-easy` is a javascript package for discord with the a lot stuff you need to make your bot programming easy.

# INSTALLING
```sh
$ npm install djs-easy
```

# some examples
 
# TICTACTOE

```js
const { TicTacToe } = require('djs-easy')
const game = new TicTacToe({
  message: message,
  xEmote: '❌', // The Emote for X
  oEmote: '0️⃣', // The Emote for O
  xColor: 'PRIMARY',
  oColor: 'PRIMARY', // The Color for O
  embedDescription: 'Tic Tac Toe', // The Description of the embed
})
game.start()
```

# SNAKE

```js
const {GuildMember, Message} = require('discord.js')
const minigames = require('djs-easy')
let Snake = new minigames.SnakeGame(Message)
Snake.startSnake(GuildMember)
```
# TICKET
## const ts = require('djs-easy')
## Initialising (Mandatory)
```js
ts.start(client)
```

## Setup Ticket
```js
ts.setup(Message,ChannelID)
```
- Message: (Object) is the object provided in client.on('messageCreate') event, if you want to use with slash command, you can provide Interaction which is provided in client.on('InteractionCreate') event in Djs v13.     
- ChannelID: (String) is the channelID where you want bot to send the message to which people can react to and open a ticket, more customisation soon... 

## Closing Ticket
```js
ts.close(Message,Transcript)
```

# ROCKPAPERSCISSORS

```js
const { RockPaperScissors } = require('djs-easy')
const game = new RockPaperScissors({
  message: message,
})
game.start()
```
# MODMAIL (FULL SETUP)(SOME ERRORS)
```js
const Discord = require('discord.js');
const allIntents = new Discord.Intents(32767);
const client = new Discord.Client({
  messageCacheLifetime: 60,
  fetchAllMembers: false,
  messageCacheMaxSize: 10,
  restTimeOffset: 0,
  restWsBridgetimeout: 100,
  allowedMentions: {
    parse: ["roles", "users", "eveoryone"],
    repliedUser: true,
  },
  partials: ["MESSAGE", "CHANNEL", "REACTION"],
  intents: allIntents,
});

client.login("TOKEN");


const djseasy = require('djs-easy');

client.on("ready", () => {
djseasy.ModMail(client, {
  guildID: "ID",
  categoryID: "ID",
  staffRole: "ID",
  embedColor: "HEX",
  anonymousReply: false/true,
  closedTitle: "Your Mod Mail Has Been Closed",
  closedMessage: "A Staff Member Has Deleted You Mod Mail!",
  staffOpenedTitle: "User Opened Mod Mail",
  staffOpenedMessage: "The User Opened A Mod Mail And Is Now Wait For A Reply!",
  userOpenedTitle: "Mod Mail Created",
  userOpenedMessage: "You Created A Mod Mail Ticket!",
  wrongEmoji: "EMOJI",
  rightEmoji: "EMOJI" 
})
});
```

# CHATBOT (FULL SETUP)(SOME ERRORS)
```js
const Discord = require("discord.js");
const client = new Discord.Client();
const Chat = require("djs-easy");
const chat = new Chat({ name: "your bot name" });

client.on("ready", () => {
  console.log(`Ready! Logged in as ${client.user.tag}!`);
});

client.on("message", async message => {
  if(message.channel.name === "chat" && !message.author.bot) {    
    let reply = await chat.chat(message.content)
    message.channel.send(reply)
  }
});

client.login("Your Token Here");
```

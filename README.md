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

# Command Handler(Latest)(easy full setup)
Launch your bot along with the handler.
```js
const handler = require('djs-easy');
const token = 'xxxxxxxxxxxxxxxxxxxxxxx'; // your bot token

let client = handler(__dirname + '/commands', token, { customPrefix: '-', clientOptions: { disableEveryone: true } });

client.on('ready', () => {
	console.log(client.user.username + ' has successfully booted up.');
});
```
Login when you choose (supply a Client instance instead of a token).
```js
const { Client } = require('discord.js');
const handler = require('djs-easy');
const token = 'xxxxxxxxxxxxxxxxxxxxxxx'; // your bot token

let client = new Client({ disableEveryone: true });

client.on('ready', () => {
	console.log(client.user.username + ' has successfully booted up.');
});

handler(__dirname + '/commands', client, { customPrefix: '-' });

client.login(token);
```
Example command.
```js
module.exports = {
	id: 'ping',
	aliases: ['pong'], // defaults to []
	channels: 'any', // defaults to 'any'. options are: 'dm', 'guild', 'any'.
	// 'call' is an instance of the Call class, a class containing various properties and utility functions.
	exec: (call) => {
		call.message.channel.send('Pong! ' + Math.round(call.client.ping) + 'ms D-API delay.');
	}
};
```
Example command using the prompt function.
```js
module.exports = {
	id: 'dogcat',
	exec: (call) => {
		call.prompt('is dog you fav or cat is your fav',
			{ time: 60000 }).then((msg) => {
				// Resolves with the response.
				if (msg.content.toLowerCase() === 'dog')
					call.message.channel.send('Boow! Mine too!');
				else
					call.message.channel.send('Boow!');
			}).catch((exc) => {
				// Rejects when the command is cancelled, out of time, or surpasses the maximum amount of attempts.
				// In this case surpassing the maximum amount of attempts is impossible since there is no filter.
				call.message.channel.send('Cancelled prompt.');
			});
	}
};
```
# if you find any problom report it in (https://github.com/Nightmaregodss/djs-easy/issues)          if you have any suggestions add me in discord (Demon Emperor NightmareGods#2086)
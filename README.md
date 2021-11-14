# minigames_discord
same examples
 
# TICTACTOE
```js
const { TicTacToe } = require('minigames-discord')
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
const {GuildMember, Message} = require('discord.js')
const minigames = require('minigames-discord')
let Snake = new minigames.SnakeGame(Message)
Snake.startSnake(GuildMember)

# ROCKPAPERSCISSORS

const { RockPaperScissors } = require('minigames-discord')
const game = new RockPaperScissors({
  message: message,
})
game.start()

# BATTLE

const {GuildMember, Message} = require('discord.js')
const minigames = require('minigames-discord')
minigames.startBattle(GuildMember, Message)

#ISPY

const {GuildMember, Message} = require('discord.js')
const minigames = require('minigames-discord')
let ISpy = new minigames.ISpy(Message)
ISpy.startISpy(GuildMember)

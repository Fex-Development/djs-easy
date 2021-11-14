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

```js
const {GuildMember, Message} = require('discord.js')
const minigames = require('minigames-discord')
let Snake = new minigames.SnakeGame(Message)
Snake.startSnake(GuildMember)
```

# ROCKPAPERSCISSORS

```js
const { RockPaperScissors } = require('minigames-discord')
const game = new RockPaperScissors({
  message: message,
})
game.start()
```

# BATTLE
```js
const {GuildMember, Message} = require('discord.js')
const minigames = require('minigames-discord')
minigames.startBattle(GuildMember, Message)
```

# ISPY

```js
const {GuildMember, Message} = require('discord.js')
const minigames = require('discord-minigames')
let ISpy = new minigames.ISpy(Message)
ISpy.startISpy(GuildMember)
```

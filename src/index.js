
//BATTLES
const { createBattle } = require("./battle")
module.exports.startBattle = async function (member, message) { return createBattle(member, message) }
//I SPYS
module.exports.ISpy = require("./ispy")
//SNAKE GO BRRRRR
module.exports.SnakeGame = require('./games/snake-game')
//TICTACTOE
module.exports.TicTacToe = require('./games/tictactoe-game')
//ROCKPAPERSCISSORS
module.exports.RockPaperScissors = require('./games/rps-game')
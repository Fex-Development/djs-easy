# djs-easy
# Reached EOL
`djs-easy` is a javascript package for discord with the a lot stuff you need to make your bot programming easy.

# Owns
`djs-easy` is owned by [*Fex Development*](https://fexhub.site) and it needs developer join there [Discord](https://discord.gg/d3eACkqyyT) to apply!!!

# NOTICE 
only available for node.js v16 or above.

# Latest
added slash command handler

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

# Command Handler(easy full setup)
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

# slash command handler(complex)(some errors)(advanced full setup)

```js
const client = new Discord.client(options);
const { Handler } = require('djs-easy');

client.on('ready', () => {
    // replace src/commands to the path with your commands folder.
    // if your commands folder contain files then use commandType: "file". otherwise commandType: "folder"
    const handler = new Handler(client, { guilds: ["guild id"], commandFolder: "/commands",commandType: "file" || "folder"});

    console.log("bot is up!");
});

client.login(token);
```

# Complex handler example

```js
const client = new Discord.client(options);
const { Handler } = require('djs-easy');

client.on('ready', () => {
    // replace src/commands to the path to your commands folder.
    const handler = new Handler(client, {
        // Locations of folder should be provided with respect to the main file
        // Location of the command folder
        commandFolder: "/commands",

        // Folder contains files or folders ?
        commandType: "file" || "folder",

        // Location of the event folder
        eventFolder: "/events",

        // Guild ID(s) where you want to enable slash commands (if slash command isn't global)
        slashGuilds: ["guild id"], 

        // Add MONGO URI for timeouts
        mongoURI: "some_mongo_uri",

        // Make all commands slash commands
        allSlash: true,

        // User ID(s),  these users will be considered as bot owners
        owners: ["user id"], 
        
        handleSlash: true, 
        /* True => If you want automatic slash handler
         * False => if you want to handle commands yourself
         * 'both' =>  in this case instead of running the command itself we will invoke an event called 'slashCommand'
         */
        
        handleNormal: false,
        /* True => If you want automatic normal handler
         * False => if you want to handle commands yourself
         * 'both' =>  in this case instead of running the command itself we will invoke an event called 'normalCommand'
         */

        prefix: "k!", // Bot's prefix
        timeout: true, // If you want to add timeouts in commands
        
        // reply to send when user don't have enough permissions to use the command
        permissionReply: "You don't have enough permissions to use this command",   

        // reply to send when user is on a timeout      
        timeoutMessage: "You are on a timeout",

        // reply to send when there is an error in command
        errorReply: "Unable to run this command due to errors",

        // reply to send when command is ownerOnly and user isn't a owner
        notOwnerReply: "Only bot owners can use this command",
    });

    console.log("bot is up");
});

client.login(token);
```

# Custom Command Handler (Slash/Normal)
```js
...
bot.on('ready', () => {
    ...

    // Custom normal command handler, this function works when handleNormal is 'both'
    handler.on('normalCommand', (command,command_data) => {
        // handle the command
        // command is your normal command object,  for command_data go down below to data types
    })

     
    // Custom slash command handler, this function works when handleSlash is 'both'
    handler.on('slashCommand', (command,command_data) => {
        // handle the command
        // command is your normal command object,  for command_data go down below to data types
    })
    ...
})
...
```

# Handle Arguments for Slash Commands
```js
run: async ({ args }) => {
    // Wanna get an specific argument of a slash command?
    args.get("argument name goes here");
    // argument name = the one specified in options.

    // Other ways to get options
    args[0] // index
    args["some name"] // get argument from name
}
```

# All available events

```js
/**
 * this event is invoked when Commands are added to client / Commands are loaded
 * @param {Collection<string,command>} commands The collection of commands
 * @param {Collection<string,string>} commandAliases The collection of command aliases
 */
handler.on('commandsCreated', (commands, commandAliases) => { });

/**
 * this event is invoked when a user used a slash command and handleSlash is 'both'
 * @param {command} command the command used
 * @param {Object} command_data the command data, check #types for more information
 */
handler.on('slashCommand', (command, command_data) => { });

/**
 * this event is invoked when a user used a normal command and handleNormal is 'both'
 * @param {command} command the command used
 * @param {Object} command_data the command data, check #types for more information
 */
handler.on('normalCommand', (command, command_data) => { });

/**
 * This event is invoked when user don't provides enough arguments in a command
 * @param {command} command the command used
 * @param {message | interaction} message The Command Interaction or the message
 */
handler.on('lessArguments', (command, message) => { });

/**
 * This event is invoked when command is owner only but user is not an owner
 * @param {command} command the command used
 * @param {message | interaction} message The Command Interaction or the message
 */
handler.on('notOwner', (command, message) => { });

/**
 * This event is invoked when user don't have enough permissions to use a command
 * @param {command} command the command used
 * @param {message | interaction} message The Command Interaction or the message
 */
handler.on('noPermissions', (command, message) => {
    /*
     * commands: the command used
     * message: the Discord message object
     */
});

/**
 * This event is invoked when user is on a mOnly to use a command
 * @param {command} command the command used
 * @param {message | interaction} message The Command Interaction or the message
 */
handler.on('timeout', (command, message) => { });

/**
 * This event is invoked when a command is DM only but used in a guild
 * @param {command} command the command used
 * @param {message | interaction} message The Command Interaction or the message
 */
handler.on('dmOnly', (command, message) => { });

/**
* This event is invoked when a command is guild only but used in a DM
* @param {command} command the command used
* @param {message | interaction} message The Command Interaction or the message
*/
handler.on('guildOnly', (command, message) => { });

/**
 * This event is invoked when an unknown error occurs while running a command
 * @param {command} command the command used
 * @param {message | interaction} message The Command Interaction or the message
 * @param {Error} error the error
 */
handler.on('exception', (command, message, error) => { });
```

# How to define command

```js
// file name: help.js

module.exports = {
    name: "help", // Name of the command

    description: "Get some help", // Description of the command
    
    aliases: ["gethelp"], // The aliases for command ( don't works for slash command )
    
    category: "general", // the category of command
    
    slash: "both", // true => if only slash, false => if only normal, "both" => both slash and normal
    
    global: false, // false => work in all guilds provided in options, true => works globally

    ownerOnly: false, // false => work for all users, true => works only for bot owners
    
    dm: false, // false => Guild Only, true => Both Guild And DM, "only" => DM Only

    timeout: 10000 | '10s', // the timeout on the command
    
    args: "< command category > [ command name ]", // Command arguments, <> for required arguments, [] for optional arguments ( please provide required arguments before optional arguments )

    // Arguments for slash commands

    // first method
    args: "< command category > [ command name ]", // Command arguments, <> for required arguments, [] for optional arguments ( please provide required arguments before optional arguments )

    argsType: "String | String", // OPTIONAL, if you want to specify the argument type
    // Available Types: String, Integer, Boolean, Channel, User, Role
    // also Sub_command, Sub_command_group but these aren't tested yet

    argsDescription: "The command category | the command name", // OPTIONAL, if you wanna add a cute little description for arguments


    // Second method
    // All properties are required, if not provided than you will get an error
    options: [
        {
            name: "name of argument",
            description: "description of the argument",
            require: true or false,
            type: "string"
        }
    ],

    // OPTIONAL
    error: async (errorType, command, message, error) => {
        // If you want custom error handler for each command 
        /*
         * errorType: errorType ( check in data types at bottom for more info )
         * command: the command
         * message: the message object
         * error: only in exceptions, the error message 
         */
    }

    // Required
    run: async (command_data) => { // you can add custom run arguments
        // your command's code
    }
}
```

# Date Types

```js
command_data = {
    client, // your discord client instance
    guild, // the guild in which command was used
    channel, // the channel in which command was used
    interaction, // interaction if it is an slash command
    args, // the array of arguments
    member, // the guild member object
    message, // the message object if normal command, in slash command it have less attributes ( to check its attribute read slash_message )
    handler, // the instance of your command handler
}

slash_message = {
    member, // the guild member object
    author, // the user 
    client, // the instance of your client
    guild, // the guild where command was used
    channel, // the channel where command was used
    interaction, // the ineraction if it is an slash command
    content, // the message contnet
    createdAT, // timestamps of the message creation
}

errorType = "noPermissions" | "exception" | "lessArguments" | "timeout" | "dmOnly" | "guildOnly";
```

# EMBED BUILDER(LATEST)(easy full setup)

```js
const { Client } = require('discord.js');
const djseasy = require(`djs-easy`);
const client = new Client();
client.embed = new djseasy.embedbuilder(client).createEmbed

client.on("interactionCreate", (client, interaction) => {
    if (interaction.commandName == "embed") {
        client.embed(interaction);
    };
});

client.on("messageCreate", (client, message) => {
    let prefix = "!";
    let args = message.content.slice(prefix.length).trim().split(/ +/g);
    let command = args.shift().toLowerCase();
    if (command == "embed") {
        client.embed(message);
    };
});
```


# if you find any problom report it in (https://github.com/Nightmaregodss/djs-easy/issues)          if you have any suggestions add me in discord (Demon Emperor NightmareGods#2086)

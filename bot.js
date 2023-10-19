
require('dotenv').config();
const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({
  intents: [GatewayIntentBits.DirectMessages, GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent],
});

// Load command modules
const leetcodeCommand = require('./command/leetcode');
const gfgCommand = require('./command/gfg');
const gifCommand = require('./command/gifReply');



const commandPrefix = '!'; 

const commands = new Map();

commands.set(leetcodeCommand.name, leetcodeCommand);
commands.set(gfgCommand.name, gfgCommand);
commands.set(gifCommand.name, gifCommand);

client.login(process.env.DISCORD_BOT_TOKEN);

client.on('ready', () => {
  console.log(`${client.user.tag} has logged in`);
});

client.on('messageCreate', async (message) => {
  if (!message.content.startsWith(commandPrefix) || message.author.bot) return;

  const args = message.content.slice(commandPrefix.length).trim().split(/ +/);
  const commandName = args.shift().toLowerCase();

  const command = commands.get(commandName);

  if (!command) return;

  try {
    command.execute(message, args);
  } catch (error) {
    console.error(error);
    message.channel.send('An error occurred while executing the command.');
  }
});

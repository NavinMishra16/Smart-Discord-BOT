require('dotenv').config();
const axios = require('axios').default;
console.log(process.env.DISCORD_BOT_TOKEN);
const { Client,GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.DirectMessages,
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildBans,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent] });

client.login(process.env.DISCORD_BOT_TOKEN);

client.on('ready',()=>{
 console.log(`${client.user.tag} has logged in`);
});

// Bot Gif Reply 
client.on('messageCreate',async message=>{
 console.log(message.content);
 let token = message.content.split(" ");
 if(message.content==='hi')message.reply("Welcome to Server");
   
 else if(token[0]==='!gif'){
    // Public APIKey so no need to put in env file
    let keyword = "Coding";
    if(token.length>1){
        keyword =token.slice(1,token.length).join(" ");
    }
    let url = `https://g.tenor.com/v1/search?q=${keyword}&key=LIVDSRZULELA&limit=8`;
    let responce = await fetch(url);
    let json =   await responce.json();
    console.log(json);
    const index = Math.floor(Math.random()* json.results.length);
     message.channel.send(json.results[index].url);
}
});



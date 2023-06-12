const LEETCODE_API_ENDPOINT = 'https://leetcode.com/graphql'
const  DAILY_CODING_CHALLENGE_QUERY = `
query questionOfToday {
	activeDailyCodingChallengeQuestion {
		date
		userStatus
		link
		question {
			acRate
			difficulty
			freqBar
			frontendQuestionId: questionFrontendId
			isFavor
			paidOnly: isPaidOnly
			status
			title
			titleSlug
			hasVideoSolution
			hasSolution
			topicTags {
				name
				id
				slug
			}
		}
	}
}`  
// We can pass the JSON response as an object to our createTodoistTask later.
const  fetchDailyCodingChallenge = async () => {
    console.log(`Fetching daily coding challenge from LeetCode API.`)
    const init = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: DAILY_CODING_CHALLENGE_QUERY }),
    }
    const response = await fetch(LEETCODE_API_ENDPOINT, init)
    return response.json()
}

require('dotenv').config();
const fetch = require("node-fetch");
console.log(process.env.DISCORD_BOT_TOKEN);
const { Client,GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.DirectMessages,
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent] });

client.login(process.env.DISCORD_BOT_TOKEN);

client.on('ready',()=>{
 console.log(`${client.user.tag} has logged in`);
});

// LeetCode Daily Challanage Questions 
client.on('messageCreate',async message=>{
    console.log(message.content);
    let token = message.content.split(" ");   
     if(token[0]==='leetcode' || token[0]==='lc'||token[0]==='q'){
        let question = await fetchDailyCodingChallenge()
         console.log(question) 
         //bot to respond 
        const questionLink = `https://leetcode.com${question.data.activeDailyCodingChallengeQuestion.link}`
         message.channel.send(questionLink)   
   }
   else if(token[0]==='gfg'){
    let url = `https://practice.geeksforgeeks.org/problem-of-the-day`;
    let responce = await fetch(url)
    let gfgquestion = await responce.json
    message.channel.send(url);
    console.log(gfgquestion)
   }
   });
// Bot Gif Reply 
client.on('messageCreate',async message=>{
 console.log(message.content);
 let token = message.content.split(" ");
 if(message.content==='hi')message.reply("Welcome to Server");
   
 else if(token[0]==='gif'){
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



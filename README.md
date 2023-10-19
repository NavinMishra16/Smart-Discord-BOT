
# Smart-Discord Bot
# Improvement in Version 2.11
1. Modular Design, Scalable
2. Better Error handling
3. Imporved Performance by Using Command-Handler

   
# Future Scope 
1. containerize applications using Docker
2. Deploy on vps

# Documentation
````
Old:
https://old.discordjs.dev/#/docs/discord.js/14.13.0/general/welcome
````
````
New:
https://discordjs.guide/#before-you-begin
````
````
https://github.com/JeremyTsaii/leetcode-stats-api
````
````
https://jerrynsh.com/how-i-sync-daily-leetcoding-challenge-to-todoist/
````
   
# About 
This is was the project, Where  we create the discord bot which can received and sends reply to user 
it fetches varios end point such as Leetcode, gfg and Tenor and sends messages acordding to message recieved by bot 


# Packages
```
$ npm install axios 
$ npm install discord.js
$ npm install node
$ npm install node-fetch
   ```

 

 `node bot.js`
# Technology Implementated 

 1.Discord.js( Version 14.0.11)
 ``` https
 https://discord.js.org/
 ```
 2. nodejs( Version 16.01)
 
``` https
https://nodejs.org/en
 ```

 
## API Reference


#### Tenor API ENDPOINT
```http
  https://g.tenor.com/v1/search?q=${keyword}&key=LIVDSRZULELA&limit=8
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Public Key.  |

#### Post item

```http
 https://leetcode.com${question.data.activeDailyCodingChallengeQuestion.link}
```
#### LEETCODE API ENDPOINT 
  ```httph
  https://leetcode.com/graphql

  ```
 Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `JSON` | **Required**. Public Key |

#### GFG API ENDPOINT 
  ```httph
 https://practice.geeksforgeeks.org/problem-of-the-day

  ```
 Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `JSON` | **Required**. Public Key |
## Authors

- [@NaveenMishra16](https://github.com/NavinMishra16)


## Badges

Add badges from somewhere like: [shields.io](https://shields.io/)

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)
[![GPLv3 License](https://img.shields.io/badge/License-GPL%20v3-yellow.svg)](https://opensource.org/licenses/)
[![AGPL License](https://img.shields.io/badge/license-AGPL-blue.svg)](http://www.gnu.org/licenses/agpl-3.0)


## Contributing

Contributions are always welcome!

See `contributing.md` for ways to get started.

Please adhere to this project's `code of conduct`.


## Demo
Insert gif or link to demo





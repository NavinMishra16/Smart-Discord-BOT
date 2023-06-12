
# Discord Bot

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


## Future Scope 

1. Migiration of Project from commanjs to ES6
2. Breaking down different command into different Module 
3. Migrating to TypeScript from JavaScript 
4. Server Deployement 




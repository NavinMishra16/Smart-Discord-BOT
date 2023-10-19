const fetch = require('node-fetch');


// JSON OBJECT 
module.exports = {
  name: 'gfg',
  description: 'Get the GeeksforGeeks problem of the day',
  async execute(message) {
    try {
      const gfgquestion = 'https://practice.geeksforgeeks.org/problem-of-the-day';
      //const gfgquestion = await response.json();
      message.channel.send(gfgquestion);
    } catch (error) {
      console.error(error);
      message.channel.send('An error occurred while fetching the GeeksforGeeks problem of the day.');
    }
  },
};
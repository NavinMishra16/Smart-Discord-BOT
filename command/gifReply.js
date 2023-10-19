const fetch = require('node-fetch');

// JSON Object 
module.exports = {
  name: 'gif',
  description: 'Get a random GIF',
  async execute(message, args) {
    try {
      let keyword = "Coding";
      if (args.length > 0) {
        keyword = args.join(" ");
      }
      const url = `https://g.tenor.com/v1/search?q=${keyword}&key=LIVDSRZULELA&limit=8`;
      const response = await fetch(url);
      const json = await response.json();
      const index = Math.floor(Math.random() * json.results.length);
      message.channel.send(json.results[index].url);
    } catch (error) {
      console.error(error);
      message.channel.send('An error occurred while fetching and sending the GIF.');
    }
  },
};
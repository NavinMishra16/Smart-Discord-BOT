const fetchDailyCodingChallenge = require('../service/lcapi');

// Object having name , description and function execute 
// We can pass the JSON response as an object to our createTodoistTask later.
module.exports = {
  name: 'leetcode',
  description: 'Get the LeetCode daily coding challenge',
  async execute(message) {
    try {
      const question = await fetchDailyCodingChallenge();
      const questionLink = `https://leetcode.com${question.data.activeDailyCodingChallengeQuestion.link}`;
      message.channel.send(questionLink);
    } catch (error) {
      console.error(error);
      message.channel.send('An error occurred while fetching the LeetCode challenge.');
    }
  },
};

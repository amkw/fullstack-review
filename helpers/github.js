const request = require('request');
const config = require('../config.js');

let getReposByUsername = (username) => {
  // TODO - Use the request module to request repos for a specific
  // user from the github API

  // The options object has been provided to help you out,
  // but you'll have to fill in the URL
  let options = {
    url: `https://api.github.com/users/${username}/repos`,
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    }
  };

  request.get(options, (err, res) => {
    if (err) { return console.error(err) }
    console.log(JSON.parse(res.body)[0].owner.login);
  })
  // .on('response', (response) => {
  //   console.log(response);
  // });
}

module.exports.getReposByUsername = getReposByUsername;
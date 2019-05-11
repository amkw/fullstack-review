const request = require('request');
const config = require('../config.js');
const format = require('./formatData.js');

let getReposByUsername = (username, cb) => {
  // The options object has been provided to help you out,
  // but you'll have to fill in the URL
  let options = {
    url: `https://api.github.com/users/${username}/repos?per_page=25`,
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    }
  };

  request.get(options, (err, res) => {
    if (err) { return console.error(err) }
    if (JSON.parse(res.body).message !== 'Not Found') {
    const documents = format.formatData(JSON.parse(res.body));
      cb(documents);
    } else {
      cb('error');
    }
  })
}

module.exports.getReposByUsername = getReposByUsername;
const express = require('express');
let app = express();
const github = require('../helpers/github');
const db = require('../database/index');

app.use(express.static(__dirname + '/../client/dist'));

app.post('/repos', function (req, res) {
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database
  let data = '';
  req.on('data', function(chunk) {
    data += chunk;
  });
  req.on('end', function() {
    req.body = data.toString();
    github.getReposByUsername(req.body, (result) => {
      if (result !== 'error') {
        // save repo to database
        db.save(result);
        res.send('Success');
      } else {
        res.send('User not found');
      }
    });
  });
});

app.get('/repos', function (req, res) {
  // This route should send back the top 25 repos by highest stargazers_count
  console.log('GET request to /repos');
  db.get((data) => {
    console.log(data);
  });
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});


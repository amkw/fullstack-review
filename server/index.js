const express = require('express');
let app = express();
const github = require('../helpers/github');

app.use(express.static(__dirname + '/../client/dist'));

app.post('/repos', function (req, res) {
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database
  var data = '';
  req.on('data', function(chunk) {
    data += chunk;
  });
  req.on('end', function() {
    req.body = data.toString();
    github.getReposByUsername(req.body);
    res.send('you rock!'); // TODO change to res.end()
  });
});

app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});


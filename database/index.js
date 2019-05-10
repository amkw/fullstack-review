const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

// var db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error: '));
// db.once('open', function() {
//   console.log('Mongoose DB connected!');
// });

let repoSchema = mongoose.Schema({
  // TODO: your schema here!
  repoID: Number,
  repoName: String,
  repoURL: String,
  stargazers_count: Number,
  repoOwner: String
});

let Repo = mongoose.model('Repo', repoSchema);

let save = (err, record) => {
  if (err) { return console.error(err) };
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
}

module.exports.save = save;
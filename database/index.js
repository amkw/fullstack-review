const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');


// var db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error: '));
// db.once('open', function() {
//   console.log('Mongoose DB connected!');
// });

let repoSchema = mongoose.Schema({
  // TODO: your schema here!
  repoID: { type: Number, unique: true },
  repoName: String,
  repoURL: String,
  stargazers_count: Number,
  repoOwner: String
});

let Repo = mongoose.model('Repo', repoSchema);

let save = (err, data) => {
  if (err) { return console.error(err) };
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB

  // incoming data: array of repos formatted as documents for Repo schema


}

module.exports.save = save;
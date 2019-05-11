const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');


// var db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error: '));
// db.once('open', function() {
//   console.log('Mongoose DB connected!');
// });

let repoSchema = mongoose.Schema({
  repoID: { type: Number, unique: true },
  repoName: String,
  repoURL: String,
  stargazers_count: Number,
  repoOwner: String
});

let Repo = mongoose.model('Repo', repoSchema);

let save = (docs) => {
  // This function should save a repo or repos to
  // the MongoDB

  // incoming data: array of repos formatted as documents for Repo schema

  Repo.insertMany(docs, { ordered: false }, (err) => {
      if (err) { console.error(err) }
    });

};

let get = (cb) => {
  Repo.find({}).sort({ stargazers_count: -1 }).limit(25).exec((err, queryResults) => {
    if (err) {
      console.error(err);
    } else {
      cb(queryResults);
    }
  });
};

module.exports.save = save;
module.exports.get = get;
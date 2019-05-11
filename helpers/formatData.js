var formatDataForDB = function(JSONdata) {
  const owner = JSONdata[0].owner.login;
  const result = [];

  for (let i = 0; i < JSONdata.length; i++) {
    const document = {};
    document['repoID'] = JSONdata[i].id; //github repo ID
    document['repoName'] = JSONdata[i].name;
    document['repoURL'] = JSONdata[i].html_url;
    document['stargazers_count'] = JSONdata[i].stargazers_count; // number of time users have starred the repo
    document['repoOwner'] = owner;
    result.push(document);
  }

  return result;
}

var formatDataForHTML = function(JSONdata) {
  // for every document in JSONdata
    //
}

module.exports.formatDataForDB = formatDataForDB;
module.exports.formatDataForHTML = formatDataForHTML;
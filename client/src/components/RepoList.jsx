import React from 'react';
import RepoRow from './RepoRow.jsx';

const RepoList = (props) => {
  const repos = props.repos.map(repo => {
      return < RepoRow key={repo.repoID} repo={repo} />
  });

  return (
  <div>
    <h4> Top {props.repos.length} Repos </h4>
    {repos}
  </div>
  )
}

export default RepoList;
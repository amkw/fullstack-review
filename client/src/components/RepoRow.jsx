import React from 'react';

var RepoRow = (props) => {

    const repoNameStyle = {
      textDecoration: 'underline',
      textDecorationColor: 'blue',
      color: 'blue',
      cursor: 'pointer'
    }

    const ownerTextStyle = {
      fontWeight: 'bold'
    }

    return (
      <div>
        <a href={props.repo.repoURL} target='_blank' style={repoNameStyle}>{props.repo.repoName}  </a>
        <text style={ownerTextStyle}>{props.repo.repoOwner}</text>
      </div>
    )
};

export default RepoRow;
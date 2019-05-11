import React from 'react';

var RepoRow = (props) => {

  const divStyle = {
    margin: '5px'
  }

  const repoNameStyle = {
    textDecoration: 'underline',
    textDecorationColor: 'blue',
    color: 'blue',
    cursor: 'pointer'
  }

  const ownerTextStyle = {
    fontWeight: 'bold'
  }

  const starTextStyle = {
    fontStyle: 'italic'
  }

  return (
    <div style={divStyle}>
      <a href={props.repo.repoURL} target='_blank' style={repoNameStyle}>{props.repo.repoName}</a>
      <text style={starTextStyle}>   {props.repo.stargazers_count} stars     </text>
      <text style={ownerTextStyle}>{props.repo.repoOwner}</text>
    </div>
  )
};

export default RepoRow;
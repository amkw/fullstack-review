import React from 'react';

class RepoRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render () {
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
        <a href={this.props.repo.repoURL} target='_blank' style={repoNameStyle}>{this.props.repo.repoName}  </a>
        <text style={ownerTextStyle}>{this.props.repo.repoOwner}</text>
      </div>
    )
  }
}

export default RepoRow;
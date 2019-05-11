import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      repos: []
    }
  }

  componentDidMount() {
    $.get('http://localhost:1128/repos', (data) => {
      this.setState({ repos: data });
    });
  }


  search (term) {
    console.log(`${term} was searched`);
    $.post('http://localhost:1128/repos', term, (data) => {
      if (data === 'User not found') {
        if ($('body').children('em').length === 0) {
          $('body').append('<em>User not found. Try again.</em>');
        } else {
          $('em').replaceWith('<em>User not found. Try again.</em>');
        }
      } else {
        if ($('body').children('em').length === 0) {
          $('body').append('<em>Username submitted.</em>');
        } else {
          $('em').replaceWith('<em>Username submitted.</em>');
        // this.setState({ repos: data }); // set State with data
        }
      }
    });
  }

  render () {
    return (<div>
      <h1>Github Fetcher</h1>
      <RepoList repos={this.state.repos}/>
      <Search onSearch={this.search.bind(this)}/>
    </div>)
  }
}



var someData = [{
  _id: '5cd71649ca418e133595b682',
  __v: 0,
  repoID: 1300192,
  repoName: 'Spoon-Knife',
  repoURL: 'https://github.com/octocat/Spoon-Knife',
  stargazers_count: 10116,
  repoOwner: 'octocat'
},
{
  _id: '5cd71649ca418e133595b67f',
  __v: 0,
  repoID: 1296269,
  repoName: 'Hello-World',
  repoURL: 'https://github.com/octocat/Hello-World',
  stargazers_count: 1487,
  repoOwner: 'octocat'
},
{
  _id: '5cd73103f161a715027246b5',
  __v: 0,
  repoID: 27586666,
  repoName: 'Pimple',
  repoURL: 'https://github.com/fabpot/Pimple',
  stargazers_count: 68,
  repoOwner: 'fabpot'
},
{
  _id: '5cd73103f161a715027246ac',
  __v: 0,
  repoID: 119659470,
  repoName: 'gitter',
  repoURL: 'https://github.com/fabpot/gitter',
  stargazers_count: 57,
  repoOwner: 'fabpot'
},
{
  _id: '5cd73103f161a715027246a5',
  __v: 0,
  repoID: 2669514,
  repoName: 'composer',
  repoURL: 'https://github.com/fabpot/composer',
  stargazers_count: 38,
  repoOwner: 'fabpot'
},
{
  _id: '5cd73103f161a715027246b2',
  __v: 0,
  repoID: 73138027,
  repoName: 'PHP-CS-Fixer',
  repoURL: 'https://github.com/fabpot/PHP-CS-Fixer',
  stargazers_count: 35,
  repoOwner: 'fabpot'
},
{
  _id: '5cd71649ca418e133595b681',
  __v: 0,
  repoID: 17881631,
  repoName: 'octocat.github.io',
  repoURL: 'https://github.com/octocat/octocat.github.io',
  stargazers_count: 23,
  repoOwner: 'octocat'
},
{
  _id: '5cd71649ca418e133595b67e',
  __v: 0,
  repoID: 20978623,
  repoName: 'hello-worId',
  repoURL: 'https://github.com/octocat/hello-worId',
  stargazers_count: 17,
  repoOwner: 'octocat'
},
{
  _id: '5cd71649ca418e133595b680',
  __v: 0,
  repoID: 64778136,
  repoName: 'linguist',
  repoURL: 'https://github.com/octocat/linguist',
  stargazers_count: 15,
  repoOwner: 'octocat'
},
{
  _id: '5cd71649ca418e133595b67d',
  __v: 0,
  repoID: 18221276,
  repoName: 'git-consortium',
  repoURL: 'https://github.com/octocat/git-consortium',
  stargazers_count: 9,
  repoOwner: 'octocat'
},
{
  _id: '5cd73103f161a715027246a9',
  __v: 0,
  repoID: 71023102,
  repoName: 'EasyAdminBundle',
  repoURL: 'https://github.com/fabpot/EasyAdminBundle',
  stargazers_count: 7,
  repoOwner: 'fabpot'
},
{
  _id: '5cd73103f161a715027246ba',
  __v: 0,
  repoID: 86972622,
  repoName: 'sflive-paris-2017',
  repoURL: 'https://github.com/fabpot/sflive-paris-2017',
  stargazers_count: 6,
  repoOwner: 'fabpot'
},
{
  _id: '5cd73103f161a715027246b8',
  __v: 0,
  repoID: 44910747,
  repoName: 'polyfill',
  repoURL: 'https://github.com/fabpot/polyfill',
  stargazers_count: 4,
  repoOwner: 'fabpot'
},
{
  _id: '5cd73103f161a715027246b9',
  __v: 0,
  repoID: 40112370,
  repoName: 'security-checker',
  repoURL: 'https://github.com/fabpot/security-checker',
  stargazers_count: 4,
  repoOwner: 'fabpot'
},
{
  _id: '5cd73103f161a715027246b1',
  __v: 0,
  repoID: 71300486,
  repoName: 'monolog-bundle',
  repoURL: 'https://github.com/fabpot/monolog-bundle',
  stargazers_count: 2,
  repoOwner: 'fabpot'
},
{
  _id: '5cd73103f161a715027246a2',
  __v: 0,
  repoID: 113929662,
  repoName: 'api-pack',
  repoURL: 'https://github.com/fabpot/api-pack',
  stargazers_count: 1,
  repoOwner: 'fabpot'
},
{
  _id: '5cd73103f161a715027246a3',
  __v: 0,
  repoID: 125964950,
  repoName: 'api-platform',
  repoURL: 'https://github.com/fabpot/api-platform',
  stargazers_count: 1,
  repoOwner: 'fabpot'
},
{
  _id: '5cd73103f161a715027246a4',
  __v: 0,
  repoID: 89030551,
  repoName: 'carew',
  repoURL: 'https://github.com/fabpot/carew',
  stargazers_count: 1,
  repoOwner: 'fabpot'
},
{
  _id: '5cd73103f161a715027246a6',
  __v: 0,
  repoID: 105076039,
  repoName: 'doctrine2',
  repoURL: 'https://github.com/fabpot/doctrine2',
  stargazers_count: 1,
  repoOwner: 'fabpot'
},
{
  _id: '5cd73103f161a715027246a8',
  __v: 0,
  repoID: 105076468,
  repoName: 'DoctrineCacheBundle',
  repoURL: 'https://github.com/fabpot/DoctrineCacheBundle',
  stargazers_count: 1,
  repoOwner: 'fabpot'
},
{
  _id: '5cd73103f161a715027246b3',
  __v: 0,
  repoID: 150386706,
  repoName: 'PHP-CS-Fixer.github.io',
  repoURL: 'https://github.com/fabpot/PHP-CS-Fixer.github.io',
  stargazers_count: 1,
  repoOwner: 'fabpot'
},
{
  _id: '5cd71623ca418e133595b678',
  __v: 0,
  repoID: 178996316,
  repoName: 'recursion-prompts',
  repoURL: 'https://github.com/amkw/recursion-prompts',
  stargazers_count: 0,
  repoOwner: 'amkw'
},
{
  _id: '5cd71623ca418e133595b679',
  __v: 0,
  repoID: 179589126,
  repoName: 'tech-dry-run',
  repoURL: 'https://github.com/amkw/tech-dry-run',
  stargazers_count: 0,
  repoOwner: 'amkw'
},
{
  _id: '5cd71649ca418e133595b67c',
  __v: 0,
  repoID: 132935648,
  repoName: 'boysenberry-repo-1',
  repoURL: 'https://github.com/octocat/boysenberry-repo-1',
  stargazers_count: 0,
  repoOwner: 'octocat'
},
{
  _id: '5cd71649ca418e133595b683',
  __v: 0,
  repoID: 56271164,
  repoName: 'test-repo1',
  repoURL: 'https://github.com/octocat/test-repo1',
  stargazers_count: 0,
  repoOwner: 'octocat'
}];

ReactDOM.render(< App/>, document.getElementById('app'));
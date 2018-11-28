import React, { Component } from 'react';
import './App.css';
import SearchComponent from './components/search/search.component';
import RepoDetails from './components/repoDetails/repoDetails.component';

class App extends Component {
  render() {
    return (
      <div className="App">
       <SearchComponent/>
       <RepoDetails/>
      </div>
    );
  }
}

export default App;

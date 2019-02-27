import React, { Component } from 'react';
import './App.css';
import './components/DogsList'
import DogsListContainer from './components/DogsListContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <main>
          <DogsListContainer DogsListContainer=""/>
        </main>
      </div>
    );
  }
}

export default App;

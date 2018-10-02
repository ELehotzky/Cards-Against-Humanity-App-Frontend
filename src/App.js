import React, { Component } from 'react';
import cardsAgainstHumanityLogo from './photos/cardsAgainstHumanityLogo.png';
import './App.css';
// import { Button } from 'reactstrap';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={cardsAgainstHumanityLogo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Cards Against Humanity</h1>
        </header>
        <p className="App-intro">
          
        </p>
      </div>
    );
  }
}

export default App;

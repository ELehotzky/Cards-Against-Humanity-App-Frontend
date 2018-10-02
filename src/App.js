import React, { Component } from 'react';
//import cardsAgainstHumanityLogo from './photos/cardsAgainstHumanityLogo.png';
import './App.css';
//our pages going to
import GameWelcomePage from './Components/GameWelcomePage'
import Header from './Containers/Header'
// import { Button } from 'reactstrap';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <GameWelcomePage />




      </div>
    );
  }
}

export default App;

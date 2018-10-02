import React, { Component } from 'react';
//import cardsAgainstHumanityLogo from './photos/cardsAgainstHumanityLogo.png';
import './App.css';

import { Button } from 'reactstrap';
import GameHost from './Components/GameHost'
import User from './Components/User'
import { Route, Link, Switch, Redirect } from "react-router-dom";

//our pages going to
import GameWelcomePage from './Components/GameWelcomePage'
import Header from './Containers/Header'
// import { Button } from 'reactstrap';


class App extends Component {
  state={
    gameId:null

  }

  setGameId = (id) =>{
    this.setState({gameId:id})
  }

  render() {
    console.log(this.state)
    return (
      <div className="App">

        <Switch>
          <Route path="/gameHost" render={() => <GameHost setGameId={this.setGameId}/>} />
          <Route path="/user" render={() => <User gameId={this.state.gameId}/>}  />
        </Switch>

        <Header />
        <GameWelcomePage />




      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from 'reactstrap';
import GameHost from './Components/GameHost'
import User from './Components/User'
import { Route, Link, Switch, Redirect } from "react-router-dom";

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

        <p className="App-intro">
            <Link to="/gameHost"><Button> Create New Game </Button></Link>
            <Link to="/user"><Button>Join a Game</Button></Link>

        </p>

        <Switch>
          <Route path="/gameHost" render={() => <GameHost setGameId={this.setGameId}/>} />
          <Route path="/user" render={() => <User gameId={this.state.gameId}/>}  />
        </Switch>
      </div>
    );
  }
}

export default App;

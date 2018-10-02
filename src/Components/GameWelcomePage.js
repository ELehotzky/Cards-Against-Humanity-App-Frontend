import React from 'react';
import GamePage from './GamePage';
import GameHost from './GameHost';
import User from './User';
import { Route, Link, Switch, Redirect } from "react-router-dom";
import { Button } from 'reactstrap';


class GameWelcomePage extends React.Component {

  onClickStartGame = (event) => {
    console.log("HI START GAME")
    //goes to startGamePage
    return <GameHost />
  }

  onClickJoinGame = (event) => {
    console.log("HI Join GAME")
    //goes to startGamePage
    return <User />
  }


  render() {
    return (
      <div>
        <Link to="/gameHost"><Button onClick={this.onClickStartGame}>Start New Game</Button></Link>
        <Link to="/user"><Button onClick={this.onClickJoinGame}>Join Game</Button></Link>
        <GamePage />
      </div>
    );
  }
}

export default GameWelcomePage;

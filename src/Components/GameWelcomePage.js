import React from 'react';
import GamePage from './GamePage';
import StartNewGame from "./StartNewGame";
import JoinGame from './JoinGame';


class GameWelcomePage extends React.Component {

  onClickStartGame = (event) => {
    console.log("HI START GAME")
    //goes to startGamePage
    return <StartNewGame />
  }

  onClickJoinGame = (event) => {
    console.log("HI Join GAME")
    //goes to startGamePage
    return <JoinGame />
  }

  render() {
    return (
      <div>
        HELLO GAME WELCOME PAGE
        <button onClick={this.onClickStartGame}>Start New Game</button>
        <button onClick={this.onClickJoinGame}>Join Game</button>
        {/* <GamePage /> */}
      </div>
    );
  }
}

export default GameWelcomePage;

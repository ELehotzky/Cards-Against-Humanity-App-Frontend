import React from 'react';
import GamePage from './GamePage';
import StartNewGame from "./StartNewGame";
import JoinGame from './JoinGame';


class GameWelcomePage extends React.Component {

  onClickStartGame = (event) => {
    console.log("HI START GAME")
    return <StartNewGame />
  }

  render() {
    return (
      <div>
        HELLO GAME WELCOME PAGE
        <button onClick={this.onClickStartGame}>Start New Game</button>
        <button>Join Game</button>
        {/* <GamePage /> */}
      </div>
    );
  }
}

export default GameWelcomePage;

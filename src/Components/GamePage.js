import React from 'react';
import '../App.css';
// import GameWelcomePage from './GameWelcomePage';
import GameScoreBox from '../Containers/GameScoreBox';



export default class GamePage extends React.Component {
  constructor(){
    super();
    this.state = {
      players:[{
        name: "Becci",
        score: 0
      },
      {
        name: "Erica",
        score: 0
      }
    ],
      round: 1,
      blackCard: [],
      whiteCard:[],
    }
  }
  render() {
    console.log("Game Page: ", this.state.players)
  return(
    <div>
      Game Page
      <GameScoreBox allPlayers={this.state.players}/>
    </div>
  )
  }
}

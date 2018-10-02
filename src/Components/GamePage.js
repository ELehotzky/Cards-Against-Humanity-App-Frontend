import React from 'react';
import '../App.css';
// import GameWelcomePage from './GameWelcomePage';
import GameScoreBox from '../Containers/GameScoreBox';



export default class GamePage extends React.Component {
  constructor(){
    super();
    this.state = {
      players:[],
      round: 1,
      blackCard: [],
      whiteCard:[],

    }
  }
  render() {
  return(
    <div>
      Game Page
      <GameScoreBox />
    </div>
  )
  }
}

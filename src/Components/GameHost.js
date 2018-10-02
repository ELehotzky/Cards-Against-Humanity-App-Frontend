import React, { Component } from 'react';
import WarpCable from 'warp-cable-client'

//const API_DOMAIN = 'http://locahost:3001/cable'

let api = WarpCable()


export default class GameHost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      game_id: null,
      users:[]

    };
  }


  componentDidMount(){
    api.subscribe('Games', 'show', {id:1}, data=>{
      this.setState({users:data.game.users})
    })
  }


  render() {
    console.log(this.state)
    return (
      <div>
        Game ID : 1
        {this.state.users.map(user => <div> {user.name} :{user.points} </div>)}
      </div>


    );
  }
}

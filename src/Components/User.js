import React, { Component } from 'react';
import WarpCable from 'warp-cable-client'
import { Button } from 'reactstrap';
let api = WarpCable()

export default class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      game_id:null,
      name:null,
      points:0
    };
  }

  addUser =() =>{
    api.trigger('Users', 'create', this.state)
  }


  render() {
    return (
      <div>
        <input placeholder="game ID" onChange={e => this.setState({game_id:e.target.value})}></input>
        <input placeholder="Name" onChange={e => this.setState({name:e.target.value})}></input>
        <Button onClick={this.addUser}>Submit</Button>
      </div>

    );
  }
}

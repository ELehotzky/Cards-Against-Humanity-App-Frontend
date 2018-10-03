import React, { Component } from 'react';
import WarpCable from 'warp-cable-client'
import { Button } from 'reactstrap';
let api = WarpCable()

export default class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user:{
        game_id:null,
        name:null
      },
      cards:[]
    };
  }

  addUser =() =>{
    api.subscribe('Users', 'create', this.state.user, data => {
      this.userResp(data)
    })
    //create user cards
  }

  userResp = (data) =>{
    if (data.id){
      for(let i =1; i<=7; i++){
        api.trigger('PlayedCards', 'create', {user_id:data.id, white_card_id:i, round_id:1})
      }

      api.subscribe('Users', 'show', {id:data.id}, data =>{
        this.setState({cards:data.user.played_cards})
      })

    }
    else{
      alert(data)
    }
  }


  render() {
    console.log(this.state)
    return (
      <div>
        {this.state.cards.length < 1 ?
          <div>
            <input placeholder="game ID" onChange={e => this.setState({user:{...this.state.user, game_id:e.target.value}})}></input>
            <input placeholder="Name" onChange={e => this.setState({user:{...this.state.user, name:e.target.value}})}></input>
            <button onClick={this.addUser}>submit</button>
          </div>
          :
          <ul>
            {this.state.cards.map(card => <li>{card.whiteCard}</li>)}
          </ul>
        }
      </div>

    );
  }
}

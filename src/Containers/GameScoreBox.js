import React from 'react';
import '../App.css';

// javascript code for scrollbar:
// $(document).ready(function () {
//   $('#dtDynamicVerticalScrollExample').DataTable({
//     "scrollY": "50vh",
//     "scrollCollapse": true,
//   });
//   $('.dataTables_length').addClass('bs-select');
// });

class GameScoreBox extends React.Component {
  //receives props: this.props.players
renderPlayer = () =>{
   return this.props.allPlayers.forEach(player => {
     <tr data-id="${player.id}">
       <td>${player.username}</td>
       <td>${player.score}</td>
      </tr>
   } )
 }

  render() {
    console.log(this.props.allPlayers)
    return (
      // <div>Hello GameScoreBox</div>
      <div className="GameScoreBox">
        <h4>Current Game Score:</h4>
        <table className="table table-bordered table-striped">
          <thead>
            <tr>
              {/* <th scope="col">#</th> */}
              <th scope="col">Player Name</th>
              <th scope="col">Points</th>
            </tr>
          </thead>
          <tbody>
             {this.renderPlayer()}
            </tbody>
        </table>
      </div>
    )
  }

}

// const gameScoreTable = document.getElementById('game-score-table')
//       gameScoreTable.innerHTML += `
//         <tr data-id="${game.id}">
//           <td>${game.username}</td>
//           <td>${game.score}</td>
//         </tr>

export default GameScoreBox;

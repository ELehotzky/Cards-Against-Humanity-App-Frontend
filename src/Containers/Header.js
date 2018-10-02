import React from 'react';
import cardsAgainstHumanityLogo from '../photos/cardsAgainstHumanityLogo.png';

const Header = (props) => {
  return (
    <div className="App-header">
        <img src={cardsAgainstHumanityLogo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to Cards Against Humanity</h1>
    </div>

  )
}
export default Header;

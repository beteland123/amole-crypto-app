import React from 'react';
import { NavLink } from 'react-router-dom';
import back from '../imags/back.png';
import micro from '../imags/microphone.png';
import gear from '../imags/gear.png';
import '../style/nav.css';

function NAVBAR() {
  return (
    <nav className="navbar">
      <li>
        <NavLink to="/">
          <img src={back} className="App-logo" alt="back" />
        </NavLink>
        <NavLink to="/id" />
      </li>
      <li><h1 className="title">COIN STATS</h1></li>
      <li className="icon">
        <img src={micro} className="App-logo" alt="micro" />
        <img src={gear} className="App-logo" alt="gear" />
      </li>

    </nav>
  );
}
export default NAVBAR;

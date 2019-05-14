import React from 'react';

import Sidetoggle from '../components/Sidetoggle';
import './Navbar.css';

const navbar = props => (
    <header className="navbar">
    <nav className="navbar_navi">
    <div className="navbar_toggle">
        <Sidetoggle click={props.sideClickHandler}/>
      </div>
      <div className="navbar_logo"><a href="/">LOGO PLACEMENT</a></div>
      <div className="spacer" />
      <div className="navbar_menu">
        <ul>
          <li> <a href="/">Students</a> </li>
          <li> <a href="/">Admins</a></li>
        </ul>
      </div>
    </nav>
  </header>
)

export default navbar;
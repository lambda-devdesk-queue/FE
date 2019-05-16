import React from 'react';
import Sidetoggle from '../components/Sidetoggle';
import './Navbar.css';
import logo from '../assets/LOGO2.png';

const navbar = props => (
    <header className="navbar">
    <nav className="navbar_navi">
    <div className="navbar_toggle">
        <Sidetoggle click={props.sideClickHandler}/>
      </div>
      <div className="navbar_logo">
      <a href="https://hopeful-kilby-8fc86d.netlify.com/" alt="logo"><img src={logo} alt="logo" /></a>
      </div>
      <div className="spacer" />
      <div className="navbar_menu">
        <ul>
          <li> <a href="/students">Students</a> </li>
          <li> <a href="/admins">Admins</a></li>
        </ul>
      </div>
    </nav>
  </header>
)

export default navbar;
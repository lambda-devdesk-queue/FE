import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

import { logout } from "../../Actions";
import { MenuH1, MenuNav, NavLogo } from "../../Helper/index";

const Menu = props => {
  return (
    <MenuNav>
      <NavLogo>
      <div>
      <img
            src={require(`../../assets/LOGO2.png`)}
            alt="Lambda Avatar"
          />
        {/* <MenuH1>DevDesk Queue</MenuH1> */}
      </div>
      </NavLogo>
      <div>
        <a href="https://hopeful-kilby-8fc86d.netlify.com/">Home</a>
        <NavLink to="/tickets">Tickets</NavLink>
        <NavLink onClick={() => props.logout()} to="/login">
          {props.isLoggedIn ? "Logout" : "Login"}
        </NavLink>
      </div>
    </MenuNav>
  );
};

const mapStateToProps = state => {
  return {
    isLoggedIn: state.isLoggedIn
  };
};

export default connect(
  mapStateToProps,
  { logout }
)(Menu);
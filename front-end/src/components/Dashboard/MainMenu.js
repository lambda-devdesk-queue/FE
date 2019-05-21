import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { DashNav } from "../../Helper";
import AvatarCard from "./AvatarCard";

const MainMenu = props => {
  return (
    <DashNav className="dash-panel">
      <AvatarCard user={props.user} />
      <ul>
        <Link to="/new-ticket">
          <li>Create Ticket</li>
        </Link>
        <Link to="/all-tickets">
          {props.user.isAdmin ? <li>Claimed Tickets</li> : <li>My Tickets</li>}
        </Link>
        <Link to="/tickets">
          <li>All Tickets</li>
        </Link>
      </ul>
    </DashNav>
  );
};

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

export default connect(mapStateToProps)(MainMenu);
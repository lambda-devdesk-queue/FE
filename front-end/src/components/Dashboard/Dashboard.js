import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./Dashboard.css";
import { NavbarBrand, Nav, NavItem, NavLink} from 'reactstrap';
import { connect } from 'react-redux';
import TicketApp from "../Dashboard/ListItems.js/Ticket";


class Dashboard extends Component {


  render() {


    return (
        <div className="App">

          <Route path="/questionlist" component={TicketApp}/>
        </div>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: state.loggedIn,
  token: state.token,
});

export default connect(
  mapStateToProps,

)(Dashboard);
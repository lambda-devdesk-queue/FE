import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Design from "./components/Design";
import Login from "./components/Login";
import LoginAdmin from "./components/LoginAdmin";
import PrivateRoute from "./components/PrivateRoute";
import student from "./Users/student";
import admin from "./Users/admin";
import SignUp from "./components/SignUp";
import SignUpAdmin from "./components/SignUpAdmin";
import Form from "./components/TicketStructure.js/Form";
import Card from "./components/TicketStructure.js/Card";
import Home from "./components/Home";
import EditTicket from "./components/TicketStructure.js/EditTicket";
import AllTickets from "./components/TicketStructure.js/AllTickets";

function App() {
  return (
    <Router>
      <Design>
        <Route path="/" exact component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/login-a" component={LoginAdmin} />
        <PrivateRoute
          path="/tickets/:id"
          exact
          component={props => <Card {...props} />}
        />
        <PrivateRoute
          path="/new-ticket"
          component={props => <Form {...props} />}
        />
        <PrivateRoute path="/all-tickets" component={AllTickets} />
        <PrivateRoute path="/edit/:id" component={EditTicket} />
        <PrivateRoute exact path="/tickets" component={student} />
        <PrivateRoute exact path="/tickets-a" component={admin} />
        <Route exact path="/sign-up" component={SignUp} />
        <Route exact path="/sign-up-a" component={SignUpAdmin} />
      </Design>
    </Router>
  );
}

export default App;
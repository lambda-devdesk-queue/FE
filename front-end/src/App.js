import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Design from "./components/Design";
import LogIn from "./components/LogIn";
import PrivateRoute from "./components/PrivateRoute";
import users from "./Users/user";
import SignUp from "./components/SignUp";
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
        <Route path="/login" component={LogIn} />
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
        <PrivateRoute exact path="/tickets" component={users} />
        <Route exact path="/sign-up" component={SignUp} />
      </Design>
    </Router>
  );
}

export default App;
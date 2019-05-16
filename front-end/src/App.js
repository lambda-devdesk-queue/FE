import React, { Component } from 'react';
import Form from "./Form/Form";
import Login from "./Login/Login";
import Navbar from './components/Navbar';
import Sidemenu from './components/Sidemenu';
import Background from './components/Background/Background';
import './App.css'
import { BrowserRouter as Router, Route } from "react-router-dom";;



class App extends Component {


// navigation and side bar
  state = {
    sideMenuOpen: false
  };

  sideToggleClickHandler = () => {
    this.setState((prevState) => {
      return {sideMenuOpen: !prevState.sideMenuOpen};
    });
  };

  backgroundClickHandler = () => {
    this.setState({sideMenuOpen: false});
  };

  render() {

    let background;
    if (this.state.sideMenuOpen) {
      background = <Background click={this.backgroundClickHandler}/>
    }
    return (
      <Router>
        <div style={{height: '100%'}}>
        <Navbar sideClickHandler={this.sideToggleClickHandler}/>
        <Sidemenu show={this.state.sideMenuOpen} />
        <Form />
        {background}
        <main style={{marginTop: '64px'}}>
        </main>
        <Route exact path="/form" component={Form} />
        <Route exact path="/login" component={Login} />
      </div>
      </Router>

    );
  }
}

export default App;

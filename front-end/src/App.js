import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Sidemenu from './components/Sidemenu';
import Background from './components/Background/Background';

class App extends Component {

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
      <div style={{height: '100%'}}>
        <Navbar sideClickHandler={this.sideToggleClickHandler}/>
        <Sidemenu show={this.state.sideMenuOpen} />
        {background}
        <main style={{marginTop: '64px'}}>
        <p>FORM WILL GO HERE</p>
        </main>
      </div>
    );
  }
}

export default App;

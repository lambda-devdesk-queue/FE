import React, { Component } from 'react';
import Form from "./Form/Form";
import Login from "./Login/Login";
import LoginAdmin from "./Login/LoginAdmin";
import Navbar from './components/Navbar';
import Sidemenu from './components/Sidemenu';
import Background from './components/Background/Background';
import './App.css'
import { BrowserRouter as Router, Route } from "react-router-dom";
import Dashboard from './Dashboard/Dashboard';
import DashboardAdmin from './Dashboard/DashboardAdmin';
import axios from 'axios';
import Admins from './components/Users/Admins';
import Students from './components/Users/Students';
const apiEndpoint = 'https://devdeskqueue-be.herokuapp.com/api/';



class App extends Component {


// navigation and side bar
  state = {
    // sideMenuOpen: false
    posts: []
};

async componentDidMount() {
  const { data: posts } = await axios.get(apiEndpoint);
  this.setState({ posts });
}

handleAdd = async () => {
    const obj = { title: 'a', body: 'b' };
    const { data: post } = await axios.post(apiEndpoint, obj);
    const posts = [post, ...this.state.posts];
    this.setState({ posts });
};

handleUpdate = async post => {
    post.title = 'updated title';
    const { data } = await axios.put(apiEndpoint + '/' + post.id, post);
    // axios.patch(apiEndpoint + '/' + post.id, {title: post.title});
    const posts = [...this.state.posts];
    const index = posts.indexOf(post);
    posts[index] = post;
    this.setState({ posts });
};

handleDelete = async post => {
    await axios.delete(apiEndpoint + '/' + post.id);
    const posts = this.state.posts.filter(p => p.id !== post.id);
    this.setState({ posts });
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
        {/* <Form /> */}
        {background}
        <main style={{marginTop: '64px'}}>
        </main>
        <Route exact path="/form" component={Form} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/loginadmin" component={LoginAdmin} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/dashboardadmin" component={DashboardAdmin} />
        <Route exact path="/admins" component={Admins} />
        <Route exact path="/students" component={Students} />
      </div>
      </Router>

    );
  }
}

export default App;

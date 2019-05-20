import React, { Component } from "react";
import { Link } from "react-router-dom";
import { LoginForm, LoginHeader } from "../Helper";
import { connect } from "react-redux";
import { signup } from "../Actions";

class SignUp extends Component {
  state = {
    user: {
      firstName: "",
      lastName: "",
      username: "",
      password: "",
      email: "",
      isAdmin: true,
      cohort: ""
    }
  };

  handleChange = e => {
    this.setState({
      user: {
        ...this.state.user,
        [e.target.name]: e.target.value
      }
    });
  };

  signup = e => {
    e.preventDefault();
    this.props.signup(this.state.user).then(() => {
      setTimeout(() => {
        this.props.history.push("/login-a");
      }, 1500);
    });
    setTimeout(() => {
      this.setState({
        user: {
          ...this.state.user,
          firstName: "",
          lastName: "",
          username: "",
          password: "",
          email: "",
          isAdmin: true,
          cohort: ""
        }
      });
    }, 1500);
  };
  render() {
    return (
      <div>
        <LoginHeader>
        </LoginHeader>
        <LoginForm onSubmit={this.signup} actions="" autoComplete="off">
        <h1>Sign Up</h1>
        <form>
        <name>
        <label>First Name</label>
          <input
            onChange={this.handleChange}
            type="text"
            name="firstName"
            placeholder="First Name"
            value={this.state.user.firstName}
            required
          /></name>
          <name>
        <label>Last Name</label>
          <input
            onChange={this.handleChange}
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={this.state.user.lastName}
            required
          /></name>
          <name>
        <label>Username</label>
          <input
            onChange={this.handleChange}
            type="text"
            name="username"
            placeholder="Username"
            value={this.state.user.username}
            required
          /></name>
          <name>
        <label>Password</label>
          <input
            onChange={this.handleChange}
            type="password"
            name="password"
            placeholder="Password"
            value={this.state.user.password}
            required
          /></name>
          <name>
        <label>Email</label>
          <input
            onChange={this.handleChange}
            type="email"
            name="email"
            placeholder="Email"
            value={this.state.user.email}
            required
          />    </name>
          <name>
        <label>Cohort</label>
          <input
            onChange={this.handleChange}
            type="text"
            name="cohort"
            placeholder="Cohort"
            value={this.state.user.cohort}
            required
          /></name>
          <button type="submit">Sign Up!</button>
          <div className={this.props.status}>
            <p>{this.props.error}</p>
          </div>
          <div className="extra">
            <p>
              Already have an Account? <Link to="/Login-a">Log in!</Link>
            </p>
          </div>
          </form>
        </LoginForm>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    status: state.status,
    error: state.error
  };
};
export default connect(
  mapStateToProps,
  { signup }
)(SignUp);
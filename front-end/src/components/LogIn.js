import React, { Component } from "react";
import { Link } from "react-router-dom";

import { LoginForm} from "../Helper";
import { connect } from "react-redux";
import { login } from "../Actions";

class Login extends Component {
  state = { credentials: { username: "", password: "" } };

  handleChange = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  login = e => {
    e.preventDefault();
    this.props.login(this.state.credentials).then(() => {
      setTimeout(() => {
        this.props.history.push("/tickets");
      }, 1485);
    });
    setTimeout(() => {
      this.setState({
        credentials: {
          ...this.state.credentials,
          username: "",
          password: ""
        }
      });
    }, 1485);
  };

  render() {
    return (
      <div>
        <LoginForm onSubmit={this.login} action="" autoComplete="off">
          
          <h1>Login</h1>
          <label>Username</label>
          <input
            onChange={this.handleChange}
            type="text"
            name="username"
            placeholder="Username"
            value={this.state.credentials.username}
            required
          />
          <label>Password</label>
          <input
            onChange={this.handleChange}
            type="password"
            name="password"
            placeholder="Password"
            value={this.state.credentials.password}
            required
          />
          <button type="submit">Login</button>
          <div className={this.props.status}>
            <p>{this.props.error}</p>
          </div>
          <div className="extra">
            <p>
              Don't have an Account? <Link to="/sign-up">Sign up!</Link>
            </p>
          </div>
        </LoginForm>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    isLoggingIn: state.isLoggingIn,
    error: state.error,
    status: state.status
  };
};
export default connect(
  mapStateToProps,
  { login }
)(Login);
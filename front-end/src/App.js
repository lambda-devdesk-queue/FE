import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Sidemenu from './components/Sidemenu';
import Background from './components/Background/Background';
import './App.css';

const emailRegex = RegExp(/^[a-zA-Z0-9.!!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9-]+)*$/);

const formValid = ({ formErrors, ...rest }) => {
  let valid = true;

  // validate empty form errors
  Object.values(formErrors).forEach(val => {
    val.length > 0 && (valid = false);
  });

  // validate filled out form
  Object.values(rest).forEach(val => {
    val === null && (valid = false);
  });
    return valid;
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state ={
      firstName: null,
      lastName: null,
      email: null,
      password: null,
      // error strings
      formErrors: {
        firstName: "",
        lastName: "",
        email: "",
        password: ""
      }
    };
  }
    // stop event bubble up
  handleSubmit = e => {
    e.preventDefault();

    if (formValid(this.state)) {
      console.log(`
      --SUBMITTING--
      First Name: ${this.state.firstName}
      Last Name: ${this.state.lastName}
      Email: ${this.state.email}
      Password: ${this.state.password}
      `)
    } else {
      console.error('FORM INVALID - DISPLAY ERROR MESSAGE');
    }
  };

  //
  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = this.state.formErrors;

    // console.log("Name: ", name)
    // console.log("Value: ", value)

    switch (name) {
      case "firstName":
        formErrors.firstName =
          value.length < 3  
            ? "minimum 3 characters required" 
            : "";
      break;
      case "lastName":
      formErrors.lastName =
        value.length < 3 
          ? "minimum 3 characters required" 
          : "";
      break;
      case "email":
      formErrors.email =
        emailRegex.test(value)
          ? "invalid email address"
          : "";
      break;
      case "password":
      formErrors.password =
        value.length < 6 
          ? "minimum 6 characters required" 
          : "";
      break;
      default:
      break;
    }

    this.setState({formErrors, [name]: value}, () => console.log(this.state))
  };

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
    const { formErrors } = this.state;

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
        {/* form submit */}
        <div className="wrapper">
          <div className="form-wrapper">
            <h1>Create Account</h1>
            <form onSubmit={this.handleSubmit} noValidate>
            {/* first name form submit */}
              <div className="firstName">
                <label htmlFor="firstName">First Name</label>
                <input
                  className={formErrors.firstName.length > 0 ? "error" : null}
                  placeholder="First Name"
                  type="text"
                  name="firstName"
                  noValidate
                  onChange={this.handleChange}
                  />
                  {formErrors.firstName.length > 0 && (
                    <span className="errorMessage">{formErrors.firstName}</span>
                  )}
              </div>
              {/* last name form submit */}
              <div className="lastName">
                <label htmlFor="lastName">Last Name</label>
                <input
                  className={formErrors.lastName.length > 0 ? "error" : null}
                  placeholder="Last Name"
                  type="text"
                  name="lastName"
                  noValidate
                  onChange={this.handleChange}
                  />
                  {formErrors.lastName.length > 0 && (
                    <span className="errorMessage">{formErrors.lastName}</span>
                  )}
                </div>
                {/* email form submit */}
              <div className="email">
                <label htmlFor="email">Email</label>
                <input
                  className={formErrors.email.length > 0 ? "error" : null}
                  placeholder="Email"
                  type="text"
                  name="email"
                  noValidate
                  onChange={this.handleChange}
                  />
                  {formErrors.email.length > 0 && (
                    <span className="errorMessage">{formErrors.email}</span>
                  )}
                </div>
                 {/* password form submit */}
              <div className="password">
                <label htmlFor="password">Password</label>
                <input
                  className={formErrors.password.length > 0 ? "error" : null}
                  placeholder="Password"
                  type="email"
                  name="password"
                  noValidate
                  onChange={this.handleChange}
                  />
                  {formErrors.password.length > 0 && (
                    <span className="errorMessage">{formErrors.password}</span>
                  )}
                </div>
                <div className="createAccount">
                  <button type="submit">Create Account</button>
                  <small> Already Have an Account?</small>
                </div>
            </form>
          </div>
        </div>
        </main>
      </div>
    );
  }
}

export default App;

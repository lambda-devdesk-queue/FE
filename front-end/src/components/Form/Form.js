import React, { Component } from "react";
import { Link } from "react-router-dom";
import '../Form/Form.css';
import axios from 'axios';
const apiEndpoint = 'https://devdeskqueue-be.herokuapp.com/api/';

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


class Form extends Component {
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

  render() {
    const { formErrors } = this.state;

    return (
        <div style={{height: '100%'}}>
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
                <div className="createAccount" > 
                  <button type="submit"><a href="/login">Create Account</a></button> 
                  <small> Already Have an Account? <Link to="/login">Login</Link> </small>
                </div>
            </form>
          </div>
        </div>
        </main>
      </div>
    );
  }
}

export default Form;

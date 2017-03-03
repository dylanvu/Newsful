import React, { Component } from 'react';
import axios from 'axios';
import { Link, browserHistory } from 'react-router';

class RegistrationForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      verifyPassword: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    axios.post('users', this.state)
    .then((res) => {
      browserHistory.push('/feed');
    })
    .catch((err) => {
      console.log(err);
    })
  }

  render() {
    return (
      <div className="Form">
        <form onSubmit={this.handleSubmit}>
          <input
            name="email"
            onChange={this.handleChange}
            placeholder="Email"
            type="email"
            value={this.state.email}
          />
          <input
            name="password"
            onChange={this.handleChange}
            placeholder="Password"
            type="password"
            value={this.state.password}
          />
          <input
            name="verifyPassword"
            onChange={this.handleChange}
            placeholder="Confirm Password"
            type="password"
            value={this.state.verifyPassword}
          />
          <input
            type="submit"
            value="Register"
          />
        </form>
        <Link to="/login">
          Log in
        </Link>
      </div>
    )
  }
}

export default RegistrationForm;

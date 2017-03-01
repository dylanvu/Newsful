import React, { Component } from 'react';
// import axios from 'axios';

class RegistrationForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      passord: '',
      verifyPassword: ''
    }

    // this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (
      <div>
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
      </div>
    )
  }
}

export default RegistrationForm;

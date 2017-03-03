import React, { Component } from 'react';
import axios from 'axios';
import { Link, browserHistory } from 'react-router';
import { Button, Form, FormGroup, FormControl } from 'react-bootstrap';

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
      browserHistory.push('/subscriptions');
    })
    .catch((err) => {
      console.log(err);
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <FormControl
            name="email"
            onChange={this.handleChange}
            placeholder="Email"
            type="email"
            value={this.state.email}
          />
          <FormControl
            name="password"
            onChange={this.handleChange}
            placeholder="Password"
            type="password"
            value={this.state.password}
          />
          <FormControl
            name="verifyPassword"
            onChange={this.handleChange}
            placeholder="Confirm Password"
            type="password"
            value={this.state.verifyPassword}
          />
          <Button type="submit">Register</Button>
        </form>
        <Link to="/login">
          Have an account?
        </Link>
      </div>
    )
  }
}

export default RegistrationForm;

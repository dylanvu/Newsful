import React, { Component } from 'react';
import axios from 'axios';
import { Link, browserHistory } from 'react-router';
import { Button, FormControl } from 'react-bootstrap';

class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    axios.post('token', this.state)
    .then((res) => {
      this.props.handleLogin(true);
      browserHistory.push('/feed');
    })
    .catch((err) => {
      console.log(err);
    });
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
            value={this.state.username}
          />
          <FormControl
            name="password"
            onChange={this.handleChange}
            placeholder="Password"
            type="password"
            value={this.state.password}
          />
          <Button type="submit">Log In</Button>
        </form>
        <Link to="/register">
          Don't have an account?
        </Link>
      </div>
    );
  }
}

export default LoginForm;

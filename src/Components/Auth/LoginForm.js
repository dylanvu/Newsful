import React, { Component } from 'react';
import axios from 'axios';
import { Link, browserHistory } from 'react-router';

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
    axios.post('token', {
      email: this.state.email,
      password: this.state.password
    })
    .then((res) => {
      browserHistory.push('/feed');
    })
    .catch((err) => {
      console.log(err);
    });
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
            value={this.state.username}
          />
          <input
            name="password"
            onChange={this.handleChange}
            placeholder="Password"
            type="password"
            value={this.state.password}
          />
          <input type="submit" value="Log In" />
        </form>
        <Link to="/register">
          Register
        </Link>
      </div>
    );
  }
}

export default LoginForm;

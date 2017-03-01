import React, { Component } from 'react';
import LoginForm from '../Login/LoginForm';
import RegistrationForm from '../Registration/RegistrationForm';

class LandingPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      loginToggle: true
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({loginToggle: !this.state.loginToggle})
  }

  render(){
    if (this.state.loginToggle) {
      return (
        <div>
          <LoginForm />
          <a onClick={this.handleClick}>
            Register
          </a>
        </div>
      )
    } else {
      return (
        <div>
          <RegistrationForm />
          <a onClick={this.handleClick}>
            Log In
          </a>
        </div>
      )
    }
  }
}

export default LandingPage;

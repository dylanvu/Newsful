import React, { Component } from 'react';
import Nav from './Nav';

import axios from 'axios';
import { browserHistory } from 'react-router';

class Container extends Component {
  constructor(props) {
    super(props)

    this.state = {
      authenticated: false
    }

    this.handleLogout = this.handleLogout.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }
  componentDidMount() {
    this.verifySession();
  }
  handleLogin(authenticated){
    this.setState({authenticated});
  }

  handleLogout(){
    axios.delete('token')
    .then((res) => {
      this.verifySession();
    })
    .catch((err) => {
      console.log(err);
    });
  }

  verifySession() {
    axios.get('token')
    .then((res) => {
      this.setState({ authenticated: res.data });
      if (res.data) {
        browserHistory.push('/feed');
      }
      else {
        browserHistory.push('/login');
      }
    })
    .catch((err) => {
      console.log(err);
    });
  }

  render() {
    return (
      <div>
        <Nav
          authenticated={this.state.authenticated}
          onLogout={this.handleLogout}
        />
        { this.props.children
          ? React.cloneElement(
              this.props.children,
              {
                handleLogin: this.handleLogin,
                handleClick: this.handleClick
              }
            )
          : null }
      </div>
    );
  }
}

export default Container;

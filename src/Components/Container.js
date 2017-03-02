import React, { Component } from 'react';
import LandingPage from './LandingPage/LandingPage';
import Dashboard from './Main/Dashboard';
import axios from 'axios';

class Container extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false
    };
  }

  componentDidMount() {
    this.verifySession();
  }

  verifySession() {
    axios.get('token')
    .then((res) => {
      if (res.data) {
        this.setState({isLoggedIn: true});
      }
    })
    .catch((err) => {
      console.log(err);
    });
  }

  render() {
    if (this.state.isLoggedIn) {
      return (
        <Dashboard />
      );
    }
    else {
      return (
        <LandingPage />
      );
    }
  }
}

export default Container;

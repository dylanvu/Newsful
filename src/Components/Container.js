import React, { Component } from 'react';
import { Router, Route, browserHistory } from 'react-router';
import LoginForm from './LandingPage/LoginForm';
import RegistrationForm from './LandingPage/RegistrationForm';
import Dashboard from './Main/Dashboard';
import Nav from './Nav';
import axios from 'axios';

class Container extends Component {
  componentDidMount() {
    this.verifySession();
  }

  verifySession() {
    axios.get('token')
    .then((res) => {
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
      <Router history={browserHistory}>
        <Route path='/' component={Nav}>
          <Route path='/feed' component={Dashboard} />
          <Route path='/login' component={LoginForm} />
          <Route path='/register' component={RegistrationForm} />
        </Route>
      </Router>
    );
  }
}

export default Container;

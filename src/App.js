import React, { Component } from 'react';
import { Router, Route, browserHistory } from 'react-router';
import Container from './Components/Container';
import Feed from './Components/Main/Feed';
import LoginForm from './Components/Auth/LoginForm';
import RegistrationForm from './Components/Auth/RegistrationForm';

class App extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path='/' component={Container}>
          <Route path='/feed' component={Feed} />
          <Route path='/login' component={LoginForm} />
          <Route path='/register' component={RegistrationForm} />
        </Route>
      </Router>
    );
  }
}

export default App;

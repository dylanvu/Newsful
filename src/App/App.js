import React, { Component } from 'react';
import { Router, Route, browserHistory } from 'react-router';
import Container from '../Components/Container';
import Bookmarks from '../Components/Bookmarks';
import Feed from '../Components/Feed';
import LoginForm from '../Components/LoginForm';
import RegistrationForm from '../Components/RegistrationForm';
import Subscriptions from '../Components/Subscriptions';

class App extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path='/' component={Container}>
          <Route path='/bookmarks' component={Bookmarks} />
          <Route path='/feed' component={Feed} />
          <Route path='/login' component={LoginForm} />
          <Route path='/register' component={RegistrationForm} />
          <Route path='/subscriptions' component={Subscriptions} />
        </Route>
      </Router>
    );
  }
}

export default App;

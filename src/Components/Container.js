import React, { Component } from 'react';
import Nav from './Nav';

import axios from 'axios';
import { browserHistory } from 'react-router';

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
      <div>
        <Nav />
        {this.props.children}
      </div>
    );
  }
}

export default Container;

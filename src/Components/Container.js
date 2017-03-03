import React, { Component } from 'react';
import Nav from './Nav';

import axios from 'axios';
import { browserHistory } from 'react-router';

class Container extends Component {
  constructor(props) {
    super(props)

    this.state = {
      authenticated: false,
      bookmarks: []
    }

    this.handleLogout = this.handleLogout.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleBookmark = this.handleBookmark.bind(this);
  }

  componentDidMount() {
    this.verifySession();
    this.fetchBookmarks();
  }

  handleLogin(authenticated){
    this.setState({authenticated});
  }

  handleLogout() {
    axios.delete('token')
    .then((res) => {
      this.verifySession();
    })
    .catch((err) => {
      console.log(err);
    });
  }

  fetchBookmarks() {
    axios.get('bookmarks')
    .then((res) => {
      this.setState({bookmarks: res.data});
    })
    .catch((err) => {
      console.log(err);
    });
  }

  handleBookmark(article) {
    axios.post('bookmarks', article)
    .then((res) => {
      console.log(res.data)
    })
    .catch((err) => {
      console.log(err);
    })
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
                bookmarks: this.state.bookmarks,
                onClick: this.handleBookmark,
              }
            )
          : null
        }
      </div>
    );
  }
}

export default Container;

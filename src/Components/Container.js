import React, { Component } from 'react';
import NavContainer from './Nav';
import { Grid, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import { browserHistory } from 'react-router';

class Container extends Component {
  constructor(props) {
    super(props)

    this.state = {
      authenticated: false,
      bookmarks: [],
      user: ''
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
      this.setState({bookmarks: res.data})
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
        this.setState({user: res.data});
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
      <Grid>
        <Row>
          <NavContainer
            authenticated={this.state.authenticated}
            onLogout={this.handleLogout}
            user={this.state.user}
          />
        </Row>
        <Row>
          <Col xs={12}>
            { this.props.children
              ? React.cloneElement(
                  this.props.children,
                  {
                    bookmarks: this.state.bookmarks,
                    handleLogin: this.handleLogin,
                    onClick: this.handleBookmark
                  }
                )
              : null
            }
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default Container;

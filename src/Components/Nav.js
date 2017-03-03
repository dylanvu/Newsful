import React, { Component } from 'react';
import { Link } from 'react-router';
import { Navbar, Button } from 'react-bootstrap';

class Nav extends Component {
  render() {
    return (
      <Navbar>
        <h1>Newsful</h1>
        {this.props.authenticated
          ? <div>
              <Button bsStyle="link" onClick={this.props.onLogout}>
                Log Out
              </Button>
              <Link to="/bookmarks">
                Bookmarks
              </Link>
              <Link to="/subscriptions">
                Subscriptions
              </Link>
            </div>
          : null
        }
      </Navbar>
    );
  }
}

export default Nav;

import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';

class Nav extends Component {
  render() {
    return (
      <nav className="Nav">
        <h1>Newsful</h1>
        {this.props.authenticated
          ? <button onClick={this.props.onLogout}>
              Log Out
            </button>
          : null
        }
        {this.props.authenticated
          ? <button><Link to="./subscriptions"></Link></button>
          : null
        }
      </nav>
    );
  }
}

export default Nav;

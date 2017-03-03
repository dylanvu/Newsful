import React, { Component } from 'react';
import { Link } from 'react-router';

class Nav extends Component {
  render() {
    return (
      <nav className="Nav">
        <h1>Newsful</h1>
        {this.props.authenticated
          ? <div>
              <button onClick={this.props.onLogout}>
                Log Out
              </button>
              <Link to="/subscriptions">
                Subscriptions
              </Link>
            </div>
          : null
        }
      </nav>
    );
  }
}

export default Nav;

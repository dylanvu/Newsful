import React, { Component } from 'react';

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
      </nav>
    );
  }
}

export default Nav;

import React, { Component } from 'react';
import { link, browserHistory} from 'react-router';

class Nav extends Component {
  render() {
    console.log(this.props);
    return (
      <nav>
        <h1>Newsful</h1>
        {this.props.authenticated
          ? <button
            onClick={this.props.onLogout}
            >Log Out</button>
          : <div>not logged in</div>
        }
      </nav>
    );
  }
}

export default Nav;

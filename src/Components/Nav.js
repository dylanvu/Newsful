import React from 'react';
import { Link, browserHistory} from 'react-router';

function Nav(props) {
  return (
    <nav>
      <h1>Newsful</h1>
      {props.children}
    </nav>
  );
}

export default Nav;

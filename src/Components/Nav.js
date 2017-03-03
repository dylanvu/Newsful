import React, { Component } from 'react';
import { Link } from 'react-router';
import { Nav, Navbar, NavDropdown, NavItem } from 'react-bootstrap';

class NavContainer extends Component {
  render() {
    return (
      <Navbar collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/feed">Newsful</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
          {
            this.props.authenticated
            ? <Navbar.Collapse>
              <Nav>
                <NavItem eventKey={1.1}>
                  <Link to="/feed">Home</Link>
                </NavItem>
                <NavItem eventKey={1.2}>
                  <Link to="/bookmarks">Bookmarks</Link>
                </NavItem>
                <NavItem eventKey={1.3}>
                  <Link to="/subscriptions">Subscriptions</Link>
                </NavItem>
                <NavItem eventKey={1.4} onClick={this.props.onLogout}>
                  Log Out
                </NavItem>
              </Nav>
            </Navbar.Collapse>
            : null
          }
      </Navbar>
    );
  }
}

export default NavContainer;

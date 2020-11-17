import React from 'react';
import {
  Nav, Navbar, NavDropdown,
} from 'react-bootstrap';

const Header = () => (
  <>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="#home">MoneyMy</Navbar.Brand>
    </Navbar>
  </>
);

export default Header;

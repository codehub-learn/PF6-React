import React, {useState} from "react";
import {Link} from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText
} from 'reactstrap';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar color="light" light expand="md">
      <NavbarBrand tag={Link} to="/">Dashboard</NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="mr-auto" navbar />
        <NavItem>
          <NavLink tag={Link} to="/courses">Courses</NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={Link} to="/courses">Courses</NavLink>
        </NavItem>
      </Collapse>
    </Navbar>
  );
};

export default Header;

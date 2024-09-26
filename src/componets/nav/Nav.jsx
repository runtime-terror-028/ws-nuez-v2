import { Outlet, Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "./Nav.css"

function NavBar() {
  return (
    <>
      <Navbar sticky={'top'} expand="lg" className="main_nav">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img
              alt=""
              src="./logo.png"
              width="150px"
              height="50px"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto nav_text_1">
              <Nav.Link className="text-light" as={Link} to="/">Home</Nav.Link>
              <NavDropdown title={<span className="text-white">Products</span>} id="basic-nav-dropdown">
                <NavDropdown.Item as={Link} to="/light">Light</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/cctv">CCTV</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/automaton">Home Autotmation</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/solar">Solar Solutions</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/bms">BMS</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/smart-bench">Smart Bench</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link className="text-white" as={Link} to="/about">About us</Nav.Link>
              <Nav.Link className="text-white" as={Link} to="/contact">Contact us</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
    </>
  );
}

export default NavBar;
import { Outlet, Link, useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { animateScroll as scroll } from "react-scroll"; // Import for scrolling
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "./Nav.css";

function NavBar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [scrollTarget, setScrollTarget] = useState(null); // Store the target section
  
  // Scroll to the section if scrollTarget is set
  useEffect(() => {
    if (location.pathname === '/' && scrollTarget) {
      scroll.scrollTo(document.getElementById(scrollTarget).offsetTop - 50); // Scroll to the section with offset
      setScrollTarget(null); // Reset after scroll
    }
  }, [location, scrollTarget]);

  // Function to handle section navigation
  const handleNavigation = (target) => {
    if (location.pathname !== '/') {
      setScrollTarget(target);  // Set the section to scroll after navigation
      navigate('/');            // Redirect to home
    } else {
      scroll.scrollTo(document.getElementById(target).offsetTop - 50); // If on home, scroll immediately
    }
  };

  return (
    <>
      <Navbar sticky={'top'} expand="lg" className="main_nav">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img alt="logo" src="./logo.png" width="150px" height="50px" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto nav_text_1">
              {/* Updated Home Link to scroll to Hero */}
              <Nav.Link className="text-light cursor-pointer" onClick={() => handleNavigation('hero')}>Home</Nav.Link>
              <NavDropdown title={<span className="text-white">Products</span>} id="basic-nav-dropdown">
                <NavDropdown.Item as={Link} to="/light">Light</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/cctv">CCTV</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/automation">Home Automation</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/solar">Solar Solutions</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/bms">BMS</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/smart-bench">Smart Bench</NavDropdown.Item>
              </NavDropdown>
              {/* About and Contact scroll links */}
              <Nav.Link className="text-white cursor-pointer" onClick={() => handleNavigation('about')}>About us</Nav.Link>
              <Nav.Link className="text-white cursor-pointer" onClick={() => handleNavigation('contact')}>Contact us</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
    </>
  );
}

export default NavBar;

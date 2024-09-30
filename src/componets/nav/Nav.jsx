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
  const [isNavCollapsed, setIsNavCollapsed] = useState(true); // To manage navbar collapse

  // Scroll to the section if scrollTarget is set
  useEffect(() => {
    if (location.pathname === '/' && scrollTarget) {
      scroll.scrollTo(document.getElementById(scrollTarget).offsetTop - 50, {
        duration: 10,       // Adjust the duration of the scroll
        smooth: 'linear',    // Use linear easing for equal-speed scroll
      });
      setScrollTarget(null); // Reset after scroll
    }
  }, [location, scrollTarget]);

  // Function to handle section navigation
  const handleNavigation = (target) => {
    if (location.pathname !== '/') {
      setScrollTarget(target);  // Set the section to scroll after navigation
      navigate('/');            // Redirect to home
    } else {
      scroll.scrollTo(document.getElementById(target).offsetTop - 50, {
        duration: 10,       // Adjust the duration of the scroll
        smooth: 'linear',    // Use linear easing for equal-speed scroll
      }); // If on home, scroll immediately
    }
    setIsNavCollapsed(true); // Close the Navbar after clicking
  };

  // Function to handle home navigation and scroll to top
  const handleHomeNavigation = () => {
    if (location.pathname !== '/') {
      navigate('/');            // Redirect to home if not already on home
    } else {
      scroll.scrollToTop({       // Scroll to top if on the home page
        duration: 10,
        smooth: 'linear',        // Use linear easing for equal-speed scroll
      });
    }
    setIsNavCollapsed(true);     // Close the Navbar after clicking
  };

  return (
    <>
      <Navbar sticky={'top'} expand="lg" className="main_nav">
        <Container fluid>
          <Navbar.Brand className="nav_logo" as={Link} to="/" onClick={handleHomeNavigation}>
            <img alt="logo" src="./logo.png" width="150px" height="50px" />
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            onClick={() => setIsNavCollapsed(!isNavCollapsed)} // Toggle navbar collapse
          />
          <Navbar.Collapse id="basic-navbar-nav" in={!isNavCollapsed}>
            <Nav className="ms-auto nav_text_1">
              {/* Updated Home Link to scroll to the top of Home */}
              <Nav.Link
                className="text-light cursor-pointer nav_buttons"
                onClick={handleHomeNavigation}
              >
                Home
              </Nav.Link>
              <NavDropdown
                title={<span className="text-white nav_buttons">Products</span>}
                id="basic-nav-dropdown"
                className="nav_buttons"
              >
                {/* Collapses the dropdown and navbar when an item is clicked */}
                <NavDropdown.Item as={Link} to="/light" onClick={() => setIsNavCollapsed(true)}>
                  Light
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/cctv" onClick={() => setIsNavCollapsed(true)}>
                  CCTV
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/automation" onClick={() => setIsNavCollapsed(true)}>
                  Home Automation
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/solar" onClick={() => setIsNavCollapsed(true)}>
                  Solar Solutions
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/bms" onClick={() => setIsNavCollapsed(true)}>
                  BMS
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/smart-bench" onClick={() => setIsNavCollapsed(true)}>
                  Smart Bench
                </NavDropdown.Item>
              </NavDropdown>
              {/* About and Contact scroll links */}
              <Nav.Link
                className="text-white cursor-pointer nav_buttons"
                onClick={() => handleNavigation('about')}
              >
                About us
              </Nav.Link>
              <Nav.Link
                className="text-white cursor-pointer nav_buttons"
                onClick={() => handleNavigation('contact')}
              >
                Contact us
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
    </>
  );
}

export default NavBar;

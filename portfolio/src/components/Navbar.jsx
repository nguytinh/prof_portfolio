import React, { useState } from 'react';
import { useLocation, NavLink } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import "../styles/Navbar.css";

function NavigationBar() {
  const [expanded, setExpanded] = useState(false);
  const location = useLocation();

  const getActiveLinkClass = (path) =>
    `nav-link ${location.pathname === path ? 'active' : ''}`;

  return (
    <>
      <Navbar
        expanded={expanded}
        expand="lg"
        bg="white"
        className="border-bottom-0 shadow-none"
        style={{ boxShadow: 'none', paddingTop: '20px' }}
      >
        <Container>
          {/* Toggle Button for Collapsible Navbar, aligned to the right */}
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            onClick={() => setExpanded(expanded ? false : 'expanded')}
            style={{ borderColor: 'transparent', marginLeft: 'auto' }} // Aligns the toggle button to the right
          >
            {/* Custom icon for the toggle button */}
            <span style={{ color: 'black' }}>&#9776;</span>
          </Navbar.Toggle>

          {/* Collapsible Navbar Links */}
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto text-center"> {/* Center the Nav items */}
              <Nav.Link
                as={NavLink}
                to="/"
                className={getActiveLinkClass('/')}
                onClick={() => setExpanded(false)}
              >
                Home
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                to="/about"
                className={getActiveLinkClass('/about')}
                onClick={() => setExpanded(false)}
              >
                About
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                to="/contact"
                className={getActiveLinkClass('/contact')}
                onClick={() => setExpanded(false)}
              >
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Divider for styling below the navbar */}
      <div className="wrapper">
        <div className="divider div-transparent div-arrow-down"></div>
      </div>
    </>
  );
}

export default NavigationBar;

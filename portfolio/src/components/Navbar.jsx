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
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            onClick={() => setExpanded(expanded ? false : 'expanded')}
            style={{ borderColor: 'transparent', marginLeft: 'auto' }} 
          >
            <span style={{ color: 'black' }}>&#9776;</span>
          </Navbar.Toggle>

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto text-center"> 
              <Nav.Link
                as={NavLink}
                to="/"
                className={getActiveLinkClass('/')}
                onClick={() => setExpanded(false)}
              >
                Projects
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
              <Nav.Link
                as={NavLink}
                to="/more"
                className={getActiveLinkClass('/more')}
                onClick={() => setExpanded(false)}
              >
                More
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className="wrapper">
        <div className="divider div-transparent div-arrow-down"></div>
      </div>
    </>
  );
}

export default NavigationBar;

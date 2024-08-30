import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import "../styles/Navbar.css";

function NavigationBar() {
  const [expanded, setExpanded] = useState(false);
  const location = useLocation();

  const getActiveLinkClass = (path) => 
    `nav-link ${location.pathname === path ? 'active' : ''}`;

  return (
    <>
      <Navbar expanded={expanded} expand="lg" bg="white" className="border-bottom-0 shadow-none" style={{ boxShadow: 'none', paddingTop: '20px'}}>
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(!expanded)} />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link href="/prof_portfolio/" className={getActiveLinkClass('/prof_portfolio/')} onClick={() => setExpanded(false)}>
                Home
              </Nav.Link>
              <Nav.Link href="/prof_portfolio/about" className={getActiveLinkClass('/prof_portfolio/about')} onClick={() => setExpanded(false)}>
                About
              </Nav.Link>
              <Nav.Link href="/prof_portfolio/contact" className={getActiveLinkClass('/prof_portfolio/contact')} onClick={() => setExpanded(false)}>
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div class="wrapper">
      <div class="divider div-transparent div-arrow-down"></div>
      </div>
    </>
  );
}

export default NavigationBar;

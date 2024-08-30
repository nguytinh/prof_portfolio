import React from 'react';
import { Link } from 'react-router-dom';
import { scroller } from 'react-scroll';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText } from 'mdb-react-ui-kit';
import "../styles/Home.css";
import resume from '../assets/Tinh_s_Resume.pdf';
import { motion } from 'framer-motion';

// Import images
import inventoryImage from '../assets/inventory.jpg';
import chessImage from '../assets/chess.jpg';
import restaurantImage from '../assets/restaurant.jpg';
import oopImage from '../assets/oop.jpg';

function Home() {
  // Function to scroll to top
  const scrollToTop = () => {
    scroller.scrollTo('top', {
      duration: 200,
      delay: 0,
      smooth: 'easeInOutQuart',
      offset: -180, // Adjust for the height of your navbar
    });
  };

  // Function to handle card click and scroll to top
  const handleCardClick = () => {
    scrollToTop();
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        duration: 0.8, // Smooth animation duration
        ease: "easeInOut" // Easing function for a smoother transition
      }}
    >
      <MDBContainer className="text-center" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', paddingTop: '60px' }}>
        {/* Header */}
        <MDBRow id="top">
          <MDBCol>
            <h1 style={{ fontSize: '3rem', color: 'black' }}>Tinh-Phong Nguyen</h1>
            <p style={{ fontSize: '1.25rem', color: 'gray' }}>Software Developer based in California</p>
          </MDBCol>
        </MDBRow>

        {/* Resume Button */}
        <MDBRow className="my-4">
          <MDBCol>
            <MDBBtn
              href={resume}
              target="_blank"
              color="dark"
              size="sm" // Adjust size to small
              style={{
                transition: 'background-color 0.3s ease', // Smooth transition
                padding: '8px 16px', // Adjust padding to make the button smaller
                fontSize: '14px', // Adjust font size to make the button text smaller
              }}
              onMouseOver={(e) => (e.currentTarget.style.backgroundColor = 'gray')}
              onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '')}
            >
              Resume
            </MDBBtn>
          </MDBCol>
        </MDBRow>

        {/* Social Icons */}
        <MDBRow className="mb-5">
          <MDBCol>
            <a href="https://github.com/nguytinh" target="_blank" rel="noopener noreferrer" className="social-icon">
              <MDBIcon fab icon="github"/>
            </a>
            <a href="https://www.linkedin.com/in/tinh-phong-nguyen/" target="_blank" rel="noopener noreferrer" className="social-icon">
              <MDBIcon fab icon="linkedin"/>
            </a>
            <a href="mailto:tinhphong04@gmail.com" className="social-icon">
              <MDBIcon fas icon="envelope"/>
            </a>
          </MDBCol>
        </MDBRow>

        {/* Project Cards */}
        <MDBRow className="mb-4" style={{ borderColor: 'white', borderRadius:"0%" }}>
          <MDBCol md="12" style={{ borderColor: 'white', borderRadius:"0%" }}>
            <Link to="/4yourinventory" style={{ textDecoration: 'none', borderRadius: "0%" }} onClick={handleCardClick}>
              <MDBCard className="hover-card" style={{ borderColor: 'white', borderRadius:"0%" }}>
                <div className="bg-image hover-overlay" style={{ borderColor: 'white', borderRadius:"0%" }}>
                  <img src={inventoryImage} className="w-100" alt="4YourInventory" style={{ height: '300px', objectFit: 'cover', borderRadius: "0%"}} />
                  <a href="#!">
                    <div
                      className="mask d-flex align-items-center justify-content-center"
                      style={{
                        background: 'linear-gradient(45deg, rgba(0, 0, 0, 100), rgba(100, 100, 100, 0.4) 100%)'
                      }}
                    >
                      <MDBCardBody style={{ color: 'white', textAlign: 'center' }}>
                        <MDBCardTitle>4YourInventory</MDBCardTitle>
                        <MDBCardText style={{ fontSize: '16px' }}>
                          Technologies: React, Node.js, Express.js, Electron.js, MySQL, Host Monster, HTML/CSS
                        </MDBCardText>
                      </MDBCardBody>
                    </div>
                  </a>
                </div>
              </MDBCard>
            </Link>
          </MDBCol>
        </MDBRow>

        {/* Repeat for other cards */}
        <MDBRow className="mb-4">
          <MDBCol md="12">
            <Link to="/chess" style={{ textDecoration: 'none' }} onClick={handleCardClick}>
              <MDBCard className="hover-card" style={{ borderColor: 'white' }}>
                <div className="bg-image hover-overlay" style={{ borderColor: 'white', borderRadius:"0%" }}>
                  <img src={chessImage} className="w-100" alt="Chess AI" style={{ height: '300px', objectFit: 'cover' }} />
                  <a href="#!">
                    <div
                      className="mask d-flex align-items-center justify-content-center"
                      style={{
                        background: 'linear-gradient(45deg, rgba(0, 0, 0, 100), rgba(100, 100, 100, 0.4) 100%)'
                      }}
                    >
                      <MDBCardBody style={{ color: 'white', textAlign: 'center' }}>
                        <MDBCardTitle>Chess AI - Sigma Phi Delta</MDBCardTitle>
                        <MDBCardText style={{ fontSize: '16px' }}>
                          Technologies: Python, Pycharm, Tensorflow
                        </MDBCardText>
                      </MDBCardBody>
                    </div>
                  </a>
                </div>
              </MDBCard>
            </Link>
          </MDBCol>
        </MDBRow>

        {/* Add similar structures for other project cards */}
        <MDBRow className="mb-4">
          <MDBCol md="12">
            <Link to="/restaurant" style={{ textDecoration: 'none' }} onClick={handleCardClick}>
              <MDBCard className="hover-card" style={{ borderColor: 'white' }}>
                <div className="bg-image hover-overlay" style={{ borderColor: 'white', borderRadius:"0%" }}>
                  <img src={restaurantImage} className="w-100" alt="Adaptive Multi-Restaurant Web Application" style={{ height: '300px', objectFit: 'cover' }} />
                  <a href="#!">
                    <div
                      className="mask d-flex align-items-center justify-content-center"
                      style={{
                        background: 'linear-gradient(45deg, rgba(0, 0, 0, 100), rgba(100, 100, 100, 0.4) 100%)'
                      }}
                    >
                      <MDBCardBody style={{ color: 'white', textAlign: 'center' }}>
                        <MDBCardTitle>Adaptive Multi-Restaurant Web Application</MDBCardTitle>
                        <MDBCardText style={{ fontSize: '16px' }}>
                          Technologies: React, Bootstrap, Git
                        </MDBCardText>
                      </MDBCardBody>
                    </div>
                  </a>
                </div>
              </MDBCard>
            </Link>
          </MDBCol>
        </MDBRow>

        <MDBRow className="mb-4">
          <MDBCol md="12">
            <Link to="/demonslayer" style={{ textDecoration: 'none' }} onClick={handleCardClick}>
              <MDBCard className="hover-card" style={{ borderColor: 'grey', borderRadius: 0 }}>
                <div className="bg-image hover-overlay" style={{ borderColor: 'white', borderRadius:"0%" }}>
                  <img src={oopImage} className="w-100" alt="Demon Slayer - Object Oriented Programming Simulation" style={{ height: '300px', objectFit: 'cover' }} />
                  <a href="#!">
                    <div
                      className="mask d-flex align-items-center justify-content-center"
                      style={{
                        background: 'linear-gradient(45deg, rgba(0, 0, 0, 100), rgba(100, 100, 100, 0.4) 100%)'
                      }}
                    >
                      <MDBCardBody style={{ color: 'white', textAlign: 'center' }}>
                        <MDBCardTitle>Demon Slayer - Object Oriented Programming Simulation</MDBCardTitle>
                        <MDBCardText style={{ fontSize: '16px' }}>
                          Technologies: Java, IntelliJ, PApplet
                        </MDBCardText>
                      </MDBCardBody>
                    </div>
                  </a>
                </div>
              </MDBCard>
            </Link>
          </MDBCol>
        </MDBRow>

        {/* Back to Top Button */}
        <MDBRow className="mt-5">
          <MDBCol className="text-center">
            <MDBIcon
              icon="angle-double-up"
              size="3x"
              className="back-to-top"
              onClick={scrollToTop}
            />
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </motion.div>
  );
}

export default Home;

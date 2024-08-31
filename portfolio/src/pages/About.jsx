import React from 'react';
import { scroller } from 'react-scroll';
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBCardText, MDBBtn, MDBIcon } from 'mdb-react-ui-kit';
import "../styles/About.css";
import resume from '../assets/Tinh_s_Resume.pdf';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import ScrollToTopButton from '../components/ScrollToTopButton';
import profileImage from '../assets/profile.JPG';

function AboutMe() {
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleIconClick = () => {
    // Perform navigation
    navigate('/more');
  
    // Delay scroll to allow for navigation completion
    setTimeout(() => {
      scroller.scrollTo('top', {
        duration: 200,
        delay: 0,
        smooth: 'easeInOutQuart',
        offset: -180, // Adjust for the height of your navbar
      });
    }, 100); // 100ms delay for smooth transition
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        duration: 0.3,
        ease: "easeInOut"
      }}
    >
      <MDBContainer className="my-5">
        <MDBRow id = "top" className="text-center mb-4">
          <MDBCol>
            <h1 style={{ fontSize: '3rem', color: 'black', paddingTop: "12px" }}>Tinh-Phong Nguyen</h1>
            <p style={{ fontSize: '1.25rem', color: 'gray' }}>Computer Scientist</p>
          </MDBCol>
        </MDBRow>

        <MDBRow className="text-center mb-4">
          <MDBCol>
            <MDBBtn
              href={resume}
              target="_blank"
              color="dark"
              size="sm"
              style={{
                transition: 'background-color 0.3s ease',
                padding: '8px 16px',
                fontSize: '14px',
              }}
              onMouseOver={(e) => (e.currentTarget.style.backgroundColor = 'gray')}
              onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '')}
            >
              Resume
            </MDBBtn>
          </MDBCol>
        </MDBRow>

        <MDBRow className="text-center mb-4">
          <MDBCol md="4" className="d-flex justify-content-center mx-auto">
            <MDBCard style={{ width: '100%', border: 'none', boxShadow: 'none' }}>
              <img
                src={profileImage}
                alt="Profile"
                className="img-fluid"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </MDBCard>
          </MDBCol>
        </MDBRow>

        <MDBRow className="mb-2">
          <MDBCol md="8" className="mx-auto">
            <MDBCard style={{ border: 'none', textAlign: 'center', width: '100%', boxShadow: 'none' }}>
              <MDBCardBody>
                <MDBCardText>
                  I am a third-year Computer Science major at Cal Poly SLO, specializing in full-stack development, machine learning, and software engineering. Driven by curiosity and innovation, I'm keen to explore dynamic internship opportunities.
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>

        <MDBRow className="text-center">
          <MDBCol>
            <MDBCard style={{ border: 'none', boxShadow: 'none' }}>
              <MDBCardBody>
                <MDBCardText>
                Apart from my passion for software development, I’m an active, energetic, and healthy person. I like playing basketball with my friends which improves my physical fitness and develops team spirit. Outside the court, I see the world through the eyes of a photographer and find beauty in ordinary things. Recently, I have also developed a passion for fashion, dressing in new outfits to unveil my creativity. My interests go even beyond that—I exercise at the gym to feel fresh and full of energy, play video games to enter a different world, build 3D metal laser-cut models, put together large Gundams, and assemble small Pokémon Legos. These hobbies give me a sense of accomplishment and satisfaction. 
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>

        <MDBRow className="text-center mt-4">
          <MDBCol>
            <MDBIcon
              fas
              icon="info-circle"
              style={{
                fontSize: '3rem', // Larger icon
                color: 'rgb(40,40,40)', // Dark gray color
                transition: 'color 0.3s ease',
              }}
              onMouseOver={(e) => (e.currentTarget.style.color = 'darkgray')}
              onMouseOut={(e) => (e.currentTarget.style.color = 'rgb(40,40,40)')}
              onClick={handleIconClick} // Handle click to navigate and scroll
            />
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <ScrollToTopButton /> 
    </motion.div>
  );
}

export default AboutMe;

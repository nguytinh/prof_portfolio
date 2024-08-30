import React from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn } from 'mdb-react-ui-kit';
import "../styles/About.css"; // For additional styling if needed
import resume from '../assets/Tinh_s_Resume.pdf';
import { motion } from 'framer-motion';
import ScrollToTopButton from '../components/ScrollToTopButton';

// Import image
import profileImage from '../assets/profile.JPG'; // Replace with your image path

function AboutMe() {
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
      <MDBContainer className="my-5">
        {/* Header */}
        <MDBRow className="text-center mb-4">
          <MDBCol>
            <h1 style={{ fontSize: '3rem', color: 'black', paddingTop: "12px" }}>Tinh-Phong Nguyen</h1>
            <p style={{ fontSize: '1.25rem', color: 'gray' }}>Computer Scientist</p>
          </MDBCol>
        </MDBRow>

        {/* Resume Button */}
        <MDBRow className="text-center mb-4"> {/* Reduced margin-bottom */}
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

        {/* Profile Image Card */}
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

        {/* About Section */}
        <MDBRow className="mb-4 text-center">
          {/* Education */}
          <MDBCol md="4" className="d-flex justify-content-center">
            <MDBCard style={{ border: 'none', textAlign: 'center', width: '100%', boxShadow: 'none' }}>
              <MDBCardBody className="d-flex flex-column align-items-center justify-content-center" style={{ minHeight: '200px' }}>
                <MDBCardTitle style={{ color: 'black', fontWeight: 'bold' }}>Education</MDBCardTitle>
                <MDBCardText>
                  <strong>California Polytechnic State University, San Luis Obispo</strong> [2026]<br />
                  Bachelor of Science in Computer Science<br />
                  GPA: 3.81<br/>
                  President's Honor Roll | Dean's Honor Roll
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>

          {/* About Me Description */}
          <MDBCol md="4" className="d-flex justify-content-center">
            <MDBCard style={{ border: 'none', textAlign: 'center', width: '100%', boxShadow: 'none' }}>
              <MDBCardBody className="d-flex align-items-center justify-content-center" style={{ minHeight: '200px' }}>
                <MDBCardText>
                  I am a third-year Computer Science major at Cal Poly SLO, specializing in full-stack development, machine learning, and software engineering. Driven by curiosity and innovation, I'm keen to explore dynamic internship opportunities.
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>

          {/* Experience */}
          <MDBCol md="4" className="d-flex justify-content-center">
            <MDBCard style={{ border: 'none', textAlign: 'center', width: '100%', boxShadow: 'none' }}>
              <MDBCardBody className="d-flex flex-column align-items-center justify-content-center" style={{ height: '100%' }}>
                <MDBCardTitle style={{ color: 'black', fontWeight: 'bold' }}>Experience</MDBCardTitle>
                <MDBCardText>
                  <strong>4yourbusiness INC.</strong><br />
                  <em>Full-stack Software Engineering Intern</em><br />
                  June 2024 - Aug 2024
                </MDBCardText>
                <MDBCardText>
                  <em>Operations Technician</em><br />
                  Oct. 2021 – July 2023
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>

        {/* Technical Skills */}
        <MDBRow className="text-center">
          <MDBCol>
            <MDBCard style={{ border: 'none', boxShadow: 'none' }}>
              <MDBCardBody>
                <MDBCardTitle style={{ color: 'black', fontWeight: 'bold' }}>Technical Skills</MDBCardTitle>
                <MDBCardText>
                  <strong>Languages:</strong> Java, Python, C, SQL, JavaScript, HTML/CSS, Assembly<br />
                  <strong>Frameworks:</strong> React, Node.js, Spring, Express.js, Electron.js, Bootstrap, Tailwind, Material-UI<br />
                  <strong>Developer Tools:</strong> Git, VS Code, Visual Studio, PyCharm, IntelliJ, Eclipse, MySQL, Microsoft Access, VIM, Linux CLI<br />
                  <strong>Libraries:</strong> TensorFlow, NumPy, Matplotlib
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <ScrollToTopButton /> 
    </motion.div>
  );
}

export default AboutMe;

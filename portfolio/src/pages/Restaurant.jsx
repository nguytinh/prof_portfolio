import React from 'react';
import { motion } from 'framer-motion';
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn
} from 'mdb-react-ui-kit';
import ScrollToTopButton from '../components/ScrollToTopButton';

// Import images
import Banhmi from '../assets/Restaurant/banhmi.jpeg';
import Teazer from '../assets/Restaurant/teazer.png';
import Git from '../assets/Restaurant/git.webp';

function Restaurant() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        duration: 0.8,
        ease: "easeInOut"
      }}
    >
      <MDBContainer className="my-5">
        <MDBRow className="justify-content-center text-center">
          <MDBCol md="8">
            <h1 className="display-4 mb-4">Adaptive Multi-Restaurant Web Application</h1>
            <p className="lead mb-5">
              Developed a comprehensive multi-restaurant web application designed to drive business growth and enhance user engagement across three distinct dining establishments. This project successfully increased overall website traffic by 35%, showcasing my ability to deliver impactful, user-centered solutions.
            </p>
          </MDBCol>
        </MDBRow>
        {/* GitHub Button */}
  <MDBRow className="mt-0 mb-8 d-flex justify-content-center"> {/* Adjusted from mt-4 to mt-2 and mb-4 to mb-5 */}
    <MDBCol md="auto">
      <MDBBtn
        href="https://github.com/lac-phong/teazerbobasnacks"
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
        Github
      </MDBBtn>
    </MDBCol>
  </MDBRow>
        <MDBRow className="my-4 justify-content-center">
          <MDBCol md="auto">
            <MDBCard style={{ border: "none", width:"900px" }}>
              <div className="d-flex justify-content-between">
                <MDBCardImage 
                  src={Banhmi} 
                  alt="Banh Mi and Bowl Page" 
                  position="top" 
                  style={{ height: '300px', width: '48%', objectFit: 'contain' }} 
                />
                <MDBCardImage 
                  src={Teazer} 
                  alt="Teazer Page" 
                  position="top" 
                  style={{ height: '300px', width: '48%', objectFit: 'contain' }} 
                />
              </div>
              <MDBCardBody style={{ textAlign: 'center', padding: "30px" }}>
                <MDBCardTitle>Innovative Front-End Engineering</MDBCardTitle>
                <MDBCardText>
                  Engineered responsive, front-end web applications tailored to the unique needs of three restaurants, seamlessly integrating them into a single dynamic platform. Leveraging React’s component-based architecture, I crafted reusable, modular UI components that significantly enhanced code maintainability and reduced development time by an estimated two work weeks. The project exemplifies the application of advanced web development techniques to create a user-friendly and high-performance interface.
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
        <MDBRow className="my-4 justify-content-center">
          <MDBCol md="auto">
            <MDBCard style={{ border: "none", width:"900px" }}>
                <MDBCardImage 
                    src={Git} 
                    alt="Github" 
                    position="top" 
                    style={{ height: '300px', width: '100%', objectFit: 'contain', paddingTop: '15px' }}/>
              <MDBCardBody style={{ textAlign: 'center', padding: "30px" }}>
                <MDBCardTitle>Effective Collaboration and Version Control</MDBCardTitle>
                <MDBCardText>
                  Demonstrated exceptional teamwork and version control expertise by utilizing GitHub for collaborative development workflows. My contributions included rigorous code reviews, ensuring the delivery of high-quality, production-ready code. This project underscored the importance of efficient collaboration in software development, with an emphasis on maintaining a robust and scalable codebase.
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

export default Restaurant;

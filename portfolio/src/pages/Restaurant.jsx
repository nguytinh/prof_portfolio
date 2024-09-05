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
            Created an integrated web application for multiple restaurants with the goal of stimulating business and improving the customers’ experience in three different restaurants. This particular project has effectively raised the general web traffic by 35%; proving my capacity in creating effective, user-friendly solutions.</p>
          </MDBCol>
        </MDBRow>
        {/* GitHub Button */}
  <MDBRow className="mt-0 mb-8 d-flex justify-content-center"> {/* Adjusted from mt-4 to mt-2 and mb-4 to mb-5 */}
    <MDBCol md="auto" className="d-flex justify-content-center">
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
          <MDBCol md="auto" className="d-flex justify-content-center">
            <MDBCard style={{ border: "none", width:"80%" }}>
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
                I designed responsive, frontend web applications for three restaurants by molding their particular needs into one dynamic platform. I utilized React's component-based architecture to my advantage, reusing UI components in a modular fashion to drive code maintainability and save an estimated two work weeks in development. This project was a good example of advanced web development techniques being applied in creating a user-friendly and high-performance interface.</MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
        <MDBRow className="my-4 justify-content-center">
          <MDBCol md="auto" className="d-flex justify-content-center">
            <MDBCard style={{ border: "none", width:"80%" }}>
                <MDBCardImage 
                    src={Git} 
                    alt="Github" 
                    position="top" 
                    style={{ height: '300px', width: '100%', objectFit: 'contain', paddingTop: '15px' }}/>
              <MDBCardBody style={{ textAlign: 'center', padding: "30px" }}>
                <MDBCardTitle>Effective Collaboration and Version Control</MDBCardTitle>
                <MDBCardText>
                Demonstrated the highest teamwork and version control with GitHub for collaborative development workflows. Contributed to their codebase in terms of in depth code reviews; this is to ensure production-level code base delivery. The project further has emphasized the ability to collaborate on software projects seamlessly and to maintain a robust, scalable codebase.</MDBCardText>
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

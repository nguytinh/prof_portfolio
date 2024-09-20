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
import MayLike from '../components/MayLike';

import Aim1 from '../assets/Aim/aim1.png';
import Aim2 from '../assets/Aim/aim2.png';
import Aim3 from '../assets/Aim/aim3.png';

function Chessai() {
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
            <h1 className="display-4 mb-4">Aim Training Game - Web App</h1>
            <p className="lead mb-5">
            Programmed using Python, Flask, and Docker, this aim training game offers an engaging platform for users to improve their targeting skills. The project leverages Flask to create a RESTful API, facilitating smooth communication between the front-end and back-end. With Docker, I ensured a consistent development environment, simplifying deployment and scalability. Throughout the development process, I utilized various technical skills, including backend development, API integration, and containerization, to deliver a seamless user experience.</p>
          </MDBCol>
        </MDBRow>
        <MDBRow className="mt-0 mb-8 d-flex justify-content-center"> 
          <MDBCol md="auto" className="d-flex justify-content-center">
            <MDBBtn
              href="https://github.com/nguytinh/aim-trainer"
              target="_blank"
              color="dark"
              size="sm"
              style={{
                transition: 'background-color 0.3s ease',
                padding: '8px 16px',
                fontSize: '14px',
                borderRadius: '30px'
              }}
              onMouseOver={(e) => (e.currentTarget.style.backgroundColor = 'gray')}
              onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '')}
            >
              GitHub
            </MDBBtn>
          </MDBCol>
        </MDBRow>
        <MDBRow className="my-4 justify-content-center">
          <MDBCol md="auto" className="d-flex justify-content-center">
            <MDBCard style={{ border: "none", width:"80%"}}>
              <div className="d-flex justify-content-between">
                <MDBCardImage 
                  src={Aim2} 
                  alt="Gameplay1" 
                  position="top" 
                  style={{ height: '300px', width: '48%', objectFit: 'contain' }} 
                />
                <MDBCardImage 
                  src={Aim1} 
                  alt="Gameplay2" 
                  position="top" 
                  style={{ height: '300px', width: '48%', objectFit: 'contain' }} 
                />
              </div>
              <MDBCardBody style={{ textAlign: 'center', padding: "30px" }}>
                <MDBCardTitle>Game Functionality and Benefits</MDBCardTitle>
                <MDBCardText>
                The aim training game serves as an effective tool for users to improve their aiming precision and hand-eye coordination. By tracking user performance and providing instant feedback, players can see their progress and identify areas for improvement. The game not only offers a fun way to practice but also emphasizes the importance of focus and quick reflexes in aim training.</MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
        <MDBRow className="my-4 justify-content-center">
            <MDBCol md="auto" className="d-flex justify-content-center">
                <MDBCard style={{ border: "none", width: "80%" }}>
                <MDBCardImage 
                    src={Aim3} 
                    alt="Aim Game" 
                    position="top" 
                    style={{ height: '200px', width: '100%', objectFit: 'contain', paddingTop: '15px' }}/>
                <MDBCardBody style={{ textAlign: 'center', padding: "30px" }}>
                    <MDBCardTitle>Technical Skills and Learning Outcomes</MDBCardTitle>
                    <MDBCardText>
                    Throughout the development, I honed my skills in:
                    <ul style={{ listStyleType: 'none', padding: 0 }}>
                        <li><strong>Backend Development:</strong> Utilizing Flask to build a robust server-side architecture.</li>
                        <li><strong>Frontend Development:</strong> Utilizing JavaScript and HTML/CSS to create a clean and organized UI for the user.</li>
                        <li><strong>RESTful API Design:</strong> Creating endpoints for user interactions and game state management.</li>
                        <li><strong>Containerization:</strong> Using Docker to encapsulate the application and its dependencies for easier deployment.</li>
                    </ul>
                    This project taught me valuable lessons in API development, game mechanics, and containerization. I gained hands-on experience in managing stateful applications and learned how to effectively integrate different components to create a seamless user experience.
                    </MDBCardText>
                </MDBCardBody>
                </MDBCard>
            </MDBCol>
        </MDBRow>
        <MayLike currentProject="Aim Trainer" />
      </MDBContainer>
      <ScrollToTopButton />
    </motion.div>
  );
}

export default Chessai;

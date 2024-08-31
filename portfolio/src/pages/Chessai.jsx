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
import Chess1 from '../assets/Chess/chess1.jpg';
import Chess2 from '../assets/Chess/chess2.jpg';

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
            <h1 className="display-4 mb-4">Advanced AI Chess Robot</h1>
            <p className="lead mb-5">
              Engineered an advanced AI chess robot in collaboration with Sigma Phi Delta Professional Engineering Fraternity. This project involved implementing sophisticated algorithms and training AI models to achieve high levels of gameplay strategy.
            </p>
          </MDBCol>
        </MDBRow>
        {/* GitHub Button */}
        <MDBRow className="mt-0 mb-8 d-flex justify-content-center"> {/* Adjusted from mt-4 to mt-2 and mb-4 to mb-5 */}
          <MDBCol md="auto">
            <MDBBtn
              href="https://github.com/keonroohparvar/AI_ChessEngine"
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
              GitHub
            </MDBBtn>
          </MDBCol>
        </MDBRow>
        <MDBRow className="my-4 justify-content-center">
          <MDBCol md="auto">
            <MDBCard style={{ border: "none", width:"800px"}}>
              <div className="d-flex justify-content-between">
                <MDBCardImage 
                  src={Chess1} 
                  alt="AI Chess Robot in Action" 
                  position="top" 
                  style={{ height: '300px', width: '48%', objectFit: 'contain' }} 
                />
                <MDBCardImage 
                  src={Chess2} 
                  alt="Chess Strategy" 
                  position="top" 
                  style={{ height: '300px', width: '48%', objectFit: 'contain' }} 
                />
              </div>
              <MDBCardBody style={{ textAlign: 'center', padding: "30px" }}>
                <MDBCardTitle>Innovative AI Implementation</MDBCardTitle>
                <MDBCardText>
                  The AI chess robot was designed using advanced techniques like Alpha Beta Pruning algorithms in Python to optimize search tree navigation, enabling faster decision-making during gameplay. The AI models were trained using TensorFlow on a large dataset of Lichess games, with a Convolutional Neural Network (CNN) employed to resolve complex ties and enhance the AI's predictive capabilities. The AI currently is leveled with a rating of around 1200 or 1300.
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

export default Chessai;

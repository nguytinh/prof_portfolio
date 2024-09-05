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
            Designed a sophisticated Artificial Intelligence chess robot with Sigma Phi Delta Professional Engineering Fraternity. This project required using complex algorithms and teaching AI systems to play games at a strategic level.</p>
          </MDBCol>
        </MDBRow>
        <MDBRow className="mt-0 mb-8 d-flex justify-content-center"> 
          <MDBCol md="auto" className="d-flex justify-content-center">
            <MDBBtn
              href="https://github.com/keonroohparvar/AI_ChessEngine"
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
                The AI chess robot was created using highly sophisticated methods such as Alpha Beta Pruning algorithms in Python that help to navigate through the search tree faster in relation to the time needed to make a decision during the game play. The AI was trained on TensorFlow for a large dataset of Lichess games, breaking ties in CNN and improving the AI’s accuracy. The AI currently is leveled with a rating of around 1500.</MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
        <MayLike currentProject="Chess AI - Sigma Phi Delta" />
      </MDBContainer>
      <ScrollToTopButton />
    </motion.div>
  );
}

export default Chessai;

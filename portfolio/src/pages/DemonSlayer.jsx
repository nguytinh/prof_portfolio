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
  MDBCardImage
} from 'mdb-react-ui-kit';
import ScrollToTopButton from '../components/ScrollToTopButton';

// Import images
import Simulation from '../assets/OOP/sim.png';
import UML from '../assets/OOP/uml.png';
import CustomIMG from '../assets/OOP/custom.png';

function DemonSlayer() {
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
            <h1 className="display-4 mb-4">Demon Slayer Simulation</h1>
            <p className="lead mb-5">
            The Demon Slayer Simulation project is a program with many complicated situations to realistically stimulate the situation from the Demon Slayer Anime, including real scenes, which goes fully fleshed in an object-oriented program modeling.</p>
          </MDBCol>
        </MDBRow>
        <MDBRow className="my-4 justify-content-center">
          <MDBCol md="auto" className="d-flex justify-content-center">
            <MDBCard style={{ border: "none", width: "80%" }}>
              <div className="d-flex justify-content-between">
                <MDBCardImage 
                  src={Simulation} 
                  alt="Simulation Engine" 
                  position="top" 
                  style={{ height: '300px', width: '48%', objectFit: 'contain' }} 
                />
                <MDBCardImage 
                  src={UML} 
                  alt="UML Diagram" 
                  position="top" 
                  style={{ height: '300px', width: '48%', objectFit: 'contain' }} 
                />
              </div>
              <MDBCardBody style={{ textAlign: 'center', padding: "30px" }}>
                <MDBCardTitle>Refactoring with SOLID Principles</MDBCardTitle>
                <MDBCardText>
                This project involved the refactoring of a very big, badly built program. The refactored program used sound principles of OOP in restructuring the codebase from not that well-structured and maintainable, into one that was well-structured and maintainable. This refactored simulation engine is single responsibility-obedient, open-closed, utilized SOLID OOP principles, worked with modular components, extensible, and easy to maintain. This really improved performance and scalability a lot, making it a robust platform on which one could simulate every interaction that is going on in the Demon Slayer world.</MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>

        <MDBRow className="my-4 justify-content-center">
          <MDBCol md="auto" className="d-flex justify-content-center">
            <MDBCard style={{ border: "none", width: "80%" }}>
                <MDBCardImage 
                  src={CustomIMG} 
                  alt="Tanjiro Sprites" 
                  position="top" 
                  style={{ height: '200px', width: '100%', objectFit: 'contain', paddingTop: '15px' }}/>
              <MDBCardBody style={{ textAlign: 'center', padding: "30px" }}>
                <MDBCardTitle>Custom Graphics, Entities, and Functionality</MDBCardTitle>
                <MDBCardText>
                The last part of the project involves the development of custom graphics and entities, including other custom functionalities, in an effort to enhance user experience. Custom elements added visual appeal to this simulation, even while providing an immersive and interactive experience where users could immerse themselves with scenarios and characters from the Demon Slayer universe.</MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <ScrollToTopButton />
    </motion.div>
  );
}

export default DemonSlayer;

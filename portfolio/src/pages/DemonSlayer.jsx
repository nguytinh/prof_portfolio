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
              The Demon Slayer Simulation project is a sophisticated software that simulates various scenarios from the popular anime, allowing users to experience and interact with different elements of the Demon Slayer universe through a fully developed object-oriented programming (OOP) model.
            </p>
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
                  This project involved the massive refactoring of an extremely large and poorly built program. By applying SOLID OOP principles, the program was transformed into a well-structured and maintainable codebase. The simulation engine now adheres to single responsibility, open-closed, and other SOLID principles, ensuring that each component is modular, extensible, and easy to maintain. The refactoring process greatly improved the performance and scalability of the software, making it a robust platform for simulating the complex interactions within the Demon Slayer universe.
                </MDBCardText>
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
                  As a final step in this project, custom graphics, entities, and unique functionalities were developed to enrich the user experience. These custom elements not only enhanced the visual appeal of the simulation but also provided a more immersive and interactive experience, allowing users to fully engage with the various scenarios and characters from the Demon Slayer universe.
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

export default DemonSlayer;

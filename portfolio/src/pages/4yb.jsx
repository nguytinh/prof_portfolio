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
import workbenchImg from '../assets/4yb/workbench.png';
import hostmonsterImg from '../assets/4yb/hostmonster.png';
import logoImg from '../assets/4yb/4invLOGO.png';
import lockedPageImg from '../assets/4yb/lockedpage.png';
import fullTableImg from '../assets/4yb/fulltable.png';
import searchImg from '../assets/4yb/search.png';
import dynamicSearchImg from '../assets/4yb/dynamicSearch.png';
import partsTableImg from '../assets/4yb/partsTable.png';
import ebayApiImg from '../assets/4yb/ebayapi.jpg';
import addProductImg from '../assets/4yb/addproduct.png';

function Fouryb() {
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
            <h1 className="display-4 mb-4">4YourInventory</h1>
            <p className="lead mb-5">
              4YourInventory is the official inventory management system developed during my tenure as a Software Engineering Intern for 4YourBusiness Inc. This application revolutionizes the company's approach to managing inventory and database operations by transitioning from an archaic Microsoft Access 2003 system to a modern MySQL architecture. It features a seamlessly integrated web and desktop application platform, designed for optimal efficiency and user experience.
            </p>
          </MDBCol>
        </MDBRow>
        {/* GitHub Button */}
        <MDBRow className="mt-0 mb-5 d-flex justify-content-center"> {/* Adjusted from mt-4 to mt-2 and mb-4 to mb-5 */}
          <MDBCol md="auto">
            <MDBBtn
              href="https://github.com/lac-phong/4YourInventory"
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
            <MDBCard style={{ border: "none", width: "800px" }}>
              <MDBCardImage 
                src={workbenchImg} 
                alt="Workbench" 
                position="top" 
                style={{ height: '200px', width: '100%', objectFit: 'contain' }} 
              />
              <MDBCardBody style={{ textAlign: 'center', padding: "30px" }}>
                <MDBCardTitle>Refactoring the Database</MDBCardTitle>
                <MDBCardText>
                  The project commenced with the meticulous task of refactoring a legacy Microsoft Access 2003 database into a robust MySQL schema using MySQL Workbench. This initial phase showcased my ability to modernize outdated systems and optimize database performance, laying the foundation for a more sophisticated and efficient inventory management solution.
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>

        <MDBRow className="my-4 justify-content-center">
          <MDBCol md="auto">
            <MDBCard style = {{ border: "none", width: '1000px' }}>
              <MDBCardImage 
                src={hostmonsterImg} 
                alt="Host Monster" 
                position="top" 
                style={{ height: '400px', width: '100%', objectFit: 'contain' }} 
              />
              <MDBCardBody style={{ textAlign: 'center', padding: "30px" }}>
                <MDBCardTitle>Database Optimization and Hosting</MDBCardTitle>
                <MDBCardText>
                  Following extensive SQL query optimization and database refinements, the final product was an impeccably designed and highly organized database. We utilized Host Monster for cloud hosting, ensuring reliable access and performance. This phase highlighted my skills in SQL, database design, and cloud hosting solutions.
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>

        <MDBRow className="my-4 justify-content-center">
          <MDBCol md="auto">
            <MDBCard style = {{ border: "none", width: "1000px" }}>
              <MDBCardImage 
                src={logoImg} 
                alt="4YourInventory Technologies" 
                position="top" 
                style={{ height: '200px', width: '100%', objectFit: 'contain', paddingTop: '15px' }} 
              />
              <MDBCardBody style={{ textAlign: 'center', padding: "30px" }}>
                <MDBCardTitle>Technologies Used</MDBCardTitle>
                <MDBCardText>
                  The application leverages a comprehensive tech stack including React, Node.js, Express.js, and Electron.js, coupled with HTML/CSS for front-end development. The web application is powered by Express.js and Axios for backend operations, while the desktop version utilizes Electron.js to integrate local system functions for efficient CRUD operations through IPC (Inter-Process Communication).
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>

        <MDBRow className="my-4 justify-content-center">
          <MDBCol md="auto">
            <MDBCard style = {{ border: "none", width: "1000px" }}>
              <MDBCardImage 
                src={lockedPageImg} 
                alt="Login Page" 
                position="top" 
                style={{ height: '400px', width: '100%', objectFit: 'contain' }} 
              />
              <MDBCardBody style={{ textAlign: 'center', padding: "30px" }}>
                <MDBCardTitle>Secure Authentication</MDBCardTitle>
                <MDBCardText>
                  The login interface is secured using Firebase for authentication, providing robust and reliable user credential storage. This ensures data protection and access control within the application, showcasing my ability to implement secure authentication mechanisms.
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>

        <MDBRow className="my-4 justify-content-center">
          <MDBCol md="auto">
            <MDBCard style = {{ border: "none", width: "1000px" }}>
              <MDBCardImage 
                src={fullTableImg} 
                alt="Full Database" 
                position="top" 
                style={{ height: '400px', width: '100%', objectFit: 'contain' }} 
              />
              <MDBCardBody style={{ textAlign: 'center', padding: "30px" }}>
                <MDBCardTitle>Database Overview</MDBCardTitle>
                <MDBCardText>
                  Upon logging in, users are greeted with a comprehensive view of the hosted cloud database. This interface allows for detailed inspection and management of inventory data, reflecting the application’s capability to handle large datasets efficiently.
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>

        <MDBRow className="my-4 justify-content-center">
          <MDBCol md="auto">
            <MDBCard style = {{ border: "none", width:"1000px" }}>
            <MDBCardBody style={{ textAlign: 'center', padding: "30px" }}>
                <div className="d-flex justify-content-between" style={{ paddingBottom: "30px" }} >
                    <MDBCardImage 
                        src={searchImg} 
                        alt="Search Page" 
                        position="top" 
                        style={{ height: '250px', width: '50%', objectFit: 'contain' }} 
                    />
                    <MDBCardImage 
                        src={dynamicSearchImg} 
                        alt="Dynamic Search" 
                        position="top" 
                        style={{ height: '250px', width: '50%', objectFit: 'contain' }} 
                    />
                    </div>
                <MDBCardTitle>Dynamic Search Functionality</MDBCardTitle>
                <MDBCardText>
                  The search page features a dynamic search bar, enabling users to efficiently query and sort inventory. This functionality enhances the user experience by providing powerful and flexible search capabilities, integral to effective inventory management.
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>

        <MDBRow className="my-4 justify-content-center">
          <MDBCol md="auto">
            <MDBCard style = {{ border: "none", width:"1000px" }}>
            <MDBCardBody style={{ textAlign: 'center', padding: "30px" }}>
                <div className="d-flex justify-content-between" style={{ paddingBottom: "30px" }}>
                    <MDBCardImage 
                        src={partsTableImg} 
                        alt="Parts Table" 
                        position="top" 
                        style={{ height: '250px', width: '55%', objectFit: 'contain' }} 
                    />
                    <MDBCardImage 
                        src={ebayApiImg} 
                        alt="eBay API Integration" 
                        position="top" 
                        style={{ height: '250px', width: '55%', objectFit: 'contain' }} 
                    />
                    </div>
                <MDBCardTitle>Item Details & eBay API Integration</MDBCardTitle>
                <MDBCardText>
                  The integrated eBay APIs facilitate convenient and efficient listing and management of inventory. Despite the limited documentation, our team successfully implemented eBay API integrations to enhance inventory functionality, demonstrating resilience and problem-solving skills. This shared card highlights both item details and API integration as key features of the project.
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>

        <MDBRow className="my-4 justify-content-center">
          <MDBCol md="auto">
            <MDBCard style = {{ border: "none", width:"1000px" }}>
              <MDBCardImage 
                src={addProductImg} 
                alt="Add Product" 
                position="top" 
                style={{ height: '400px', width: '100%', objectFit: 'contain' }} 
              />
              <MDBCardBody style={{ textAlign: 'center', padding: "30px" }}>
                <MDBCardTitle>Product Management</MDBCardTitle>
                <MDBCardText>
                  Users have the ability to add new products and mark items as sold with a single click. This feature streamlines inventory management, showcasing the application’s user-friendly design and efficiency in handling inventory updates.
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

export default Fouryb;

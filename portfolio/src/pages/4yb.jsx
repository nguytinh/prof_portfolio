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
import MayLike from "../components/MayLike";

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
            4YourInventory is the official inventory management, which I have created during my work at 4YourBusiness Inc as the Software Engineering Intern. This application changed the company’s way of managing inventories and database activities moving from the MS Access 2003 environment to the MySQL one. There are web and desktop application ideas that are easily integrated; ideas based on efficiency and user interface.</p>
          </MDBCol>
        </MDBRow>
        {/* GitHub Button */}
        <MDBRow className="mt-0 mb-5 d-flex justify-content-center"> {/* Adjusted from mt-4 to mt-2 and mb-4 to mb-5 */}
          <MDBCol md="auto" className="d-flex justify-content-center">
            <MDBBtn
              href="https://github.com/lac-phong/4YourInventory"
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
            <MDBCard style={{ border: "none", width: "80%" }}>
              <MDBCardImage 
                src={workbenchImg} 
                alt="Workbench" 
                position="top" 
                style={{ height: '200px', width: '100%', objectFit: 'contain' }} 
              />
              <MDBCardBody style={{ textAlign: 'center', padding: "30px" }}>
                <MDBCardTitle>Refactoring the Database</MDBCardTitle>
                <MDBCardText>
                The project was initiated with a quite mechanical and time-consuming process of converting a poorly structured Microsoft Access 2003 database to a highly structured MySQL database using MySQL work bench. It was in this first part of the project where I proved my competency in updating and enhancing the primitive and slow database methods paving way for a much better implementation of integrated inventory system.</MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>

        <MDBRow className="my-4 justify-content-center">
          <MDBCol md="auto" className="d-flex justify-content-center">
            <MDBCard style = {{ border: "none", width: '80%' }}>
              <MDBCardImage 
                src={hostmonsterImg} 
                alt="Host Monster" 
                position="top" 
                style={{ height: '400px', width: '100%', objectFit: 'contain' }} 
              />
              <MDBCardBody style={{ textAlign: 'center', padding: "30px" }}>
                <MDBCardTitle>Database Optimization and Hosting</MDBCardTitle>
                <MDBCardText>
                After the optimization of SQL queries and database improvements, it was finally a clean, well-structured and arranged database. For the hosting solution, we used Host Monster for cloud hosting which guarantees the users proper access and impressive performance. This phase brought me at par in handling SQL, database designing in cloud hosting solutions.</MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>

        <MDBRow className="my-4 justify-content-center">
          <MDBCol md="auto" className="d-flex justify-content-center">
            <MDBCard style = {{ border: "none", width: "90%" }}>
              <MDBCardImage 
                src={logoImg} 
                alt="4YourInventory Technologies" 
                position="top" 
                style={{ height: '200px', width: '100%', objectFit: 'contain', paddingTop: '15px' }} 
              />
              <MDBCardBody style={{ textAlign: 'center', padding: "30px" }}>
                <MDBCardTitle>Technologies Used</MDBCardTitle>
                <MDBCardText>
                The application developed makes use of a rather large tech stack comprising of React.js, Node. js, Express. js, and Electron. js, combined with HTML and CSS for front-end development. The web application version of our project is built with Express as the back-end, whereas the desktop version is made using Electron.js to perform the prerequisites of local system functions for CRUD operations and implementation through IPC.</MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>

        <MDBRow className="my-4 justify-content-center">
          <MDBCol md="auto" className="d-flex justify-content-center">
            <MDBCard style = {{ border: "none", width: "90%" }}>
              <MDBCardImage 
                src={lockedPageImg} 
                alt="Login Page" 
                position="top" 
                style={{ height: '400px', width: '100%', objectFit: 'contain' }} 
              />
              <MDBCardBody style={{ textAlign: 'center', padding: "30px" }}>
                <MDBCardTitle>Secure Authentication</MDBCardTitle>
                <MDBCardText>
                The login interface is implemented using Firebase for authentication thus ensuring that user credentials are safe and secure. This ensures data protection and access control within the application, showcasing my ability to implement secure authentication mechanisms.</MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>

        <MDBRow className="my-4 justify-content-center">
          <MDBCol md="auto" className="d-flex justify-content-center">
            <MDBCard style = {{ border: "none", width: "90%" }}>
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
          <MDBCol md="auto" className="d-flex justify-content-center">
            <MDBCard style = {{ border: "none", width:"80%" }}>
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
          <MDBCol md="auto" className="d-flex justify-content-center">
            <MDBCard style = {{ border: "none", width:"80%" }}>
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
          <MDBCol md="auto" className="d-flex justify-content-center">
            <MDBCard style = {{ border: "none", width:"80%" }}>
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
        <MayLike currentProject="4YourInventory" />
      </MDBContainer>
      <ScrollToTopButton />
    </motion.div>
  );
}

export default Fouryb;

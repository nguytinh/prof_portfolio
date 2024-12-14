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

import img1 from '../assets/Aery/img1.png';
import img2 from '../assets/Aery/img2.png';
import img3 from '../assets/Aery/img3.png';
import img4 from '../assets/Aery/img4.png';
import img5 from '../assets/Aery/img5.png';
import img6 from '../assets/Aery/img6.png';

function Aery() {
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
            <h1 className="display-4 mb-4">Aery</h1>
            <p className="lead mb-5">
            A social media app that helps create a collaborative space for users to keep streaks of tasks/habits with their friends. The app will help motivate users to do all sorts of things such as shower, go to the gym, study, etc. It combines the popular idea of keeping a "Streak" in other popular social media apps such as Snapchat and BeReal.
            </p>
          </MDBCol>
        </MDBRow>
        <MDBRow className="mt-0 mb-8 d-flex justify-content-center"> 
          <MDBCol md="auto" className="d-flex justify-content-center">
            <MDBBtn
              href="https://github.com/nguytinh/Aery"
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
                <MDBCardImage 
                    src={img1}
                    alt="data" 
                    position="top" 
                    style={{ height: '300px', width: '100%', objectFit: 'contain' }} 
                />
              <MDBCardBody style={{ textAlign: 'center', padding: "30px" }}>
                <MDBCardTitle>Landing Page</MDBCardTitle>
                <MDBCardText>
                We built a robust authentication system from scratch for the web application, leveraging Zod for input validation, NextAuth.js for session management, and custom middleware to enhance security. This implementation ensured seamless user login and secure access control throughout the application. Additionally, Chakra UI was used for the frontend to create nice and simple designs as well as improve production time. 
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>

        <MDBRow className="my-4 justify-content-center">
          <MDBCol md="auto" className="d-flex justify-content-center">
            <MDBCard style={{ border: "none", width:"80%"}}>
                <div className="d-flex justify-content-between">
                <MDBCardImage 
                  src={img2} 
                  alt="feed" 
                  position="top" 
                  style={{ height: '300px', width: '48%', objectFit: 'contain' }} 
                />
                <MDBCardImage 
                  src={img3} 
                  alt="friends" 
                  position="top" 
                  style={{ height: '300px', width: '48%', objectFit: 'contain' }} 
                />
                </div>
              <MDBCardBody style={{ textAlign: 'center', padding: "30px" }}>
                <MDBCardTitle>Main feed and Friends page</MDBCardTitle>
                <MDBCardText>
                    We implemented the frontend and backend of our social media app using Next.js and Prisma, building a full-stack application tailored to help users maintain streaks of tasks and habits with their friends. Next.js powered the dynamic and responsive user interface, enabling features like task tracking and friend collaboration, while Prisma provided an efficient ORM for managing user data and streak records, ensuring smooth data integration and robust backend functionality.                
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>

        <MDBRow className="my-4 justify-content-center">
          <MDBCol md="auto" className="d-flex justify-content-center">
            <MDBCard style={{ border: "none", width:"80%"}}>
                <div className="d-flex justify-content-between">
                <MDBCardImage 
                  src={img4} 
                  alt="feed" 
                  position="top" 
                  style={{ height: '300px', width: '48%', objectFit: 'contain' }} 
                />
                <MDBCardImage 
                  src={img5} 
                  alt="friends" 
                  position="top" 
                  style={{ height: '300px', width: '48%', objectFit: 'contain' }} 
                />
                </div>
              <MDBCardBody style={{ textAlign: 'center', padding: "30px" }}>
                <MDBCardTitle>Leaderboard and Profile page</MDBCardTitle>
                <MDBCardText>
                For the leaderboard and profile pages, we used Next.js to create dynamic and responsive user interfaces that showcase user rankings and personal streak statistics. Prisma was utilized to manage and query the database, ensuring accurate and efficient retrieval of leaderboard data and user profiles. This approach allowed us to seamlessly integrate features like real-time updates to rankings and personalized profile details, enhancing user engagement and interaction within the app.
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
        <MDBRow className="my-4 justify-content-center">
          <MDBCol md="auto" className="d-flex justify-content-center">
            <MDBCard style={{ border: "none", width:"80%"}}>
                <MDBCardImage 
                    src={img6}
                    alt="data" 
                    position="top" 
                    style={{ height: '300px', width: '100%', objectFit: 'contain' }} 
                />
              <MDBCardBody style={{ textAlign: 'center', padding: "30px" }}>
                <MDBCardTitle>Docker</MDBCardTitle>
                <MDBCardText>
                Every component of the project is fully dockerized, allowing the app to be easily deployed on any environment with Docker and Docker Compose installed. This setup ensures the portability and lightweight operation of the application, making it simple to run and scale across various systems. By containerizing the frontend, backend, and database, we streamlined the development and deployment process, ensuring consistency and efficiency in every environment.
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
        
        <MayLike currentProject="Aery" />
      </MDBContainer>
      <ScrollToTopButton />
    </motion.div>
  );
}

export default Aery;

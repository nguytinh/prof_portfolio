import React from 'react';
import { MDBRow, MDBCol, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import chessImage from '../assets/Chess/chess1.jpg';
import restaurantImage from '../assets/Restaurant/banhmi.jpeg';
import oopImage from '../assets/OOP/custom.png';
import inventoryImage from '../assets/4yb/lockedpage.png';

function MayLike({ currentProject }) {
  const projects = [
    {
      title: 'Adaptive Multi-Restaurant Web Application',
      year: '2024',
      image: restaurantImage,
      link: '/restaurant',
    },
    {
      title: 'Chess AI - Sigma Phi Delta',
      year: '2023',
      image: chessImage,
      link: '/chess',
    },
    {
      title: 'Demon Slayer - Object Oriented Programming Simulation',
      year: '2023',
      image: oopImage,
      link: '/demonslayer',
    },
    {
      title: '4YourInventory',
      year: '2024',
      image: inventoryImage,
      link: '/4yourinventory',
    },
  ];

  const filteredProjects = projects.filter(project => project.title !== currentProject);

  const handleCardClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div style={{ paddingTop: "80px" }}>
      <h5 style={{ paddingBottom: "10px" }}>You may also like:</h5>
      <MDBRow>
        {filteredProjects.map((project, index) => (
          <MDBCol key={index}>
            <Link to={project.link} style={{ textDecoration: 'none' }} onClick={handleCardClick}>
              <MDBCard
                style={{
                  borderRadius: '20px',
                  position: 'relative',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                }}
                className="card-hover"
              >
                <div className="bg-image" style={{ borderRadius: '20px' }}>
                  <img
                    src={project.image}
                    className="w-100"
                    alt={project.title}
                    style={{ height: '300px', objectFit: 'cover', borderRadius: '20px' }}
                  />
                  <div
                    className="mask d-flex align-items-center justify-content-center"
                    style={{
                      background: 'linear-gradient(45deg, rgba(0, 0, 0, 0.8), rgba(150, 150, 150, 0.4))',
                      borderRadius: '20px',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      color: 'white',
                    }}
                  >
                    <MDBCardBody style={{ textAlign: 'center' }}>
                      <MDBCardTitle>{project.title}</MDBCardTitle>
                      <MDBCardText style={{ fontSize: '16px' }}>{project.year}</MDBCardText>
                    </MDBCardBody>
                  </div>
                </div>
              </MDBCard>
            </Link>
          </MDBCol>
        ))}
      </MDBRow>

      <style>{`
        .card-hover:hover {
          transform: scale(1.05);
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
          outline: 3px solid rgba(0, 0, 0, 0.6); /* Use outline instead of border */
        }
      `}</style>
    </div>
  );
}

export default MayLike;

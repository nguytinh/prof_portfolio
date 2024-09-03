import React from 'react';
import { scroller } from 'react-scroll';
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBCardText, MDBBtn, MDBIcon } from 'mdb-react-ui-kit';
import "../styles/About.css";
import resume from '../assets/Tinh_s_Resume.pdf';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import ScrollToTopButton from '../components/ScrollToTopButton';
import profileImage from '../assets/profile.JPG';

function AboutMe() {
  const navigate = useNavigate();

  const handleIconClick = () => {
    navigate('/more');
    setTimeout(() => {
      scroller.scrollTo('top', {
        duration: 200,
        delay: 0,
        smooth: 'easeInOutQuart',
        offset: -180,
      });
    }, 100);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      style={{ position: 'relative', overflow: 'hidden' }} // Ensure the animation fits the container
    >
      <svg
  version="1.1"
  xmlns="http://www.w3.org/2000/svg"
  xmlnsXlink="http://www.w3.org/1999/xlink"
  x="0px"
  y="0px"
  width="100%"
  height="100%"
  viewBox="0 0 1600 900"
  preserveAspectRatio="xMidYMax slice"
  style={{
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: -1, // Place behind other content
    backgroundColor: '#ffffff', // White background
  }}
>
  <defs>
    <linearGradient id="bg">
      <stop offset="0%" style={{ stopColor: 'rgba(240, 240, 240, 0.06)' }} />
      <stop offset="50%" style={{ stopColor: 'rgba(200, 200, 200, 0.6)' }} />
      <stop offset="100%" style={{ stopColor: 'rgba(180, 180, 180, 0.2)' }} />
    </linearGradient>
    <path
      id="wave"
      fill="url(#bg)"
      d="M-363.852,502.589c0,0,236.988-41.997,505.475,0
        s371.981,38.998,575.971,0s293.985-39.278,505.474,0s493.475,48.368,716.963-25.995v560.106H-363.852V502.589z"
    />
  </defs>
  <g>
    <use xlinkHref="#wave" opacity=".3">
      <animateTransform
        attributeName="transform"
        attributeType="XML"
        type="translate"
        dur="10s"
        calcMode="spline"
        values="270 230; -334 180; 270 230"
        keyTimes="0; .5; 1"
        keySplines="0.42, 0, 0.58, 1.0;0.42, 0, 0.58, 1.0"
        repeatCount="indefinite"
      />
    </use>
    <use xlinkHref="#wave" opacity=".6">
      <animateTransform
        attributeName="transform"
        attributeType="XML"
        type="translate"
        dur="8s"
        calcMode="spline"
        values="-270 230;243 220;-270 230"
        keyTimes="0; .6; 1"
        keySplines="0.42, 0, 0.58, 1.0;0.42, 0, 0.58, 1.0"
        repeatCount="indefinite"
      />
    </use>
    <use xlinkHref="#wave" opacity=".9">
      <animateTransform
        attributeName="transform"
        attributeType="XML"
        type="translate"
        dur="6s"
        calcMode="spline"
        values="0 230;-140 200;0 230"
        keyTimes="0; .4; 1"
        keySplines="0.42, 0, 0.58, 1.0;0.42, 0, 0.58, 1.0"
        repeatCount="indefinite"
      />
    </use>
  </g>
</svg>


      <MDBContainer className="my-5">
        <MDBRow id="top" className="text-center mb-4">
          <MDBCol>
            <h1 style={{ fontSize: '3rem', color: 'black', paddingTop: "12px" }}>Tinh-Phong Nguyen</h1>
            <p style={{ fontSize: '1.25rem', color: 'gray' }}>Computer Scientist</p>
          </MDBCol>
        </MDBRow>

        <MDBRow className="text-center mb-4">
          <MDBCol>
            <MDBBtn
              href={resume}
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
              Resume
            </MDBBtn>
          </MDBCol>
        </MDBRow>

        <MDBRow className="text-center mb-4">
          <MDBCol md="4" className="d-flex justify-content-center mx-auto">
            <MDBCard style={{ width: '100%', border: 'none', boxShadow: 'none'}}>
              <img
                src={profileImage}
                alt="Profile"
                className="img-fluid"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </MDBCard>
          </MDBCol>
        </MDBRow>

        <MDBRow className="mb-2">
          <MDBCol md="8" className="mx-auto">
            <MDBCard style={{ border: 'none', textAlign: 'center', width: '100%', boxShadow: 'none', backgroundColor: "rgba(255, 255, 255, 0)" }}>
              <MDBCardBody>
                <MDBCardText>
                  I am a third-year Computer Science major at Cal Poly SLO, specializing in full-stack development, machine learning, and software engineering. Driven by curiosity and innovation, I'm keen to explore dynamic internship opportunities.
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>

        <MDBRow className="text-center">
          <MDBCol>
            <MDBCard style={{ border: 'none', boxShadow: 'none', backgroundColor: "rgba(255, 255, 255, 0)", paddingBottom:"60px" }}>
              <MDBCardBody>
                <MDBCardText>
                Apart from my passion for software development, I’m an active, energetic, and healthy person. I like playing basketball with my friends which improves my physical fitness and develops team spirit. Outside the court, I see the world through the eyes of a photographer and find beauty in ordinary things. Recently, I have also developed a passion for fashion, dressing in new outfits to unveil my creativity. My interests go even beyond that—I exercise at the gym to feel fresh and full of energy, play video games to enter a different world, build 3D metal laser-cut models, put together large Gundams, and assemble small Pokémon Legos. These hobbies give me a sense of accomplishment and satisfaction. 
                </MDBCardText>
              </MDBCardBody>
              <MDBIcon
              fas
              icon="info-circle"
              style={{
                fontSize: '3rem',
                color: 'rgb(40,40,40)',
                transition: 'color 0.3s ease',
                paddingTop:"70px"
              }}
              onMouseOver={(e) => (e.currentTarget.style.color = 'darkgray')}
              onMouseOut={(e) => (e.currentTarget.style.color = 'rgb(40,40,40)')}
              onClick={handleIconClick}
            />
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <ScrollToTopButton />
    </motion.div>
  );
}

export default AboutMe;

import React from 'react';
import { MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import { motion } from 'framer-motion';
import ScrollToTopButton from '../components/ScrollToTopButton';
import "../styles/More.css";

// Import images
import img1 from '../assets/More/img1.JPG';
import img2 from '../assets/More/img2.JPEG';
import img3 from '../assets/More/img3.JPEG';
import img4 from '../assets/More/img4.JPEG';
import img5 from '../assets/More/img5.JPEG';
import img6 from '../assets/More/img6.JPEG';  // Vertical image
import img7 from '../assets/More/img7.JPEG';
import img8 from '../assets/More/img8.JPEG';  // Vertical image
import img9 from '../assets/More/img9.JPEG';
import img10 from '../assets/More/img10.JPEG';  // Vertical image
import img11 from '../assets/More/img11.JPG';
import img12 from '../assets/More/img12.JPG';
import img13 from '../assets/More/img13.JPG';


function More() {
  // Array of imported images with their orientation (vertical or horizontal)
  const images = [
    { src: img7, alt: "Description of image 7", orientation: "horizontal" },
    { src: img8, alt: "Description of image 8", orientation: "vertical" },  // Vertical image
    { src: img1, alt: "Description of image 1", orientation: "horizontal" },
    { src: img2, alt: "Description of image 2", orientation: "horizontal" },
    { src: img3, alt: "Description of image 3", orientation: "horizontal" },
    { src: img4, alt: "Description of image 4", orientation: "horizontal" },
    { src: img5, alt: "Description of image 5", orientation: "horizontal" },
    { src: img6, alt: "Description of image 6", orientation: "vertical" },  // Vertical image
    { src: img11, alt: "Description of image 11", orientation: "horizontal" },
    { src: img12, alt: "Description of image 12", orientation: "horizontal" },
    { src: img9, alt: "Description of image 9", orientation: "horizontal" },
    { src: img10, alt: "Description of image 10", orientation: "vertical" }, // Vertical image
    { src: img13, alt: "Description of image 13", orientation: "horizontal" },
  ];

  const fixedHeight = 400; // Set a fixed height for the images

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        duration: 0.3,
        ease: "easeInOut"
      }}
    >
      <MDBContainer className="my-5">
        {/* Header for the page */}
        <MDBRow className="text-center mb-4">
          <MDBCol>
          <h1
            style={{
              fontSize: '3rem',
              color: 'black', // White color for high contrast
              textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)' // Black shadow for better readability
            }}
          >
            My Photos
          </h1>
          </MDBCol>
        </MDBRow>

        {/* Images displayed in a neat grid */}
        <MDBRow className="justify-content-center">
          {images.map((image, index) => (
            <MDBCol 
              key={index} 
              md={image.orientation === "vertical" ? "4" : "6"}  // Adjust column width based on image orientation
              sm="12" 
              className="d-flex justify-content-center align-items-center mb-4"
            >
              <div style={{ height: fixedHeight }}> {/* Set container height */}
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  className="img-fluid"
                  style={{ 
                    height: '100%',    // Fix the height
                    width: 'auto',      // Allow the width to auto-adjust
                    objectFit: 'contain',  // Ensure images are not cropped
                    border: "none"
                  }}
                />
              </div>
            </MDBCol>
          ))}
        </MDBRow>
      </MDBContainer>

      {/* Scroll to Top Button */}
      <ScrollToTopButton /> 
    </motion.div>
  );
}

export default More;
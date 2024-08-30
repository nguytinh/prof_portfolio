import React from 'react';
import { animateScroll as scroll } from 'react-scroll'; // Import scroll instead of scroller
import { MDBIcon } from 'mdb-react-ui-kit';

function ScrollToTopButton() {
  // Function to scroll to the top
  const scrollToTop = () => {
    scroll.scrollToTop({
      duration: 200,
      smooth: 'easeInOutQuart',
    });
  };

  return (
    <div style={styles.buttonContainer}>
      <MDBIcon 
        fas icon="angle-double-up" 
        size="2x"
        style={styles.icon}
        onClick={scrollToTop}
      />
    </div>
  );
}

const styles = {
  buttonContainer: {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    zIndex: 1000,
    cursor: 'pointer',
    padding: '10px'
  },
  icon: {
    color: 'dark-gray',
  },
};

export default ScrollToTopButton;

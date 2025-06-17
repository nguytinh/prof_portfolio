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
import MayLike from "../components/MayLike";

// Import images
import img1 from '../assets/HorseGPT/img1.jpg';
import img2 from '../assets/HorseGPT/img2.png';
import img3 from '../assets/HorseGPT/img3.jpeg';
import img4 from '../assets/HorseGPT/img4.png';
import img5 from '../assets/HorseGPT/img5.png';
import img6 from '../assets/HorseGPT/img6.jpg';
import img7 from '../assets/HorseGPT/img7.jpg';


function Neuralnetwork() {
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
            <h1 className="display-4 mb-4">HorseGPT</h1>
            <p className="lead mb-5">
            HorseGPT is an AI Horse Race predictor and generative AI that takes in statistics from different horses based on previous races, and predicts the outcome and winner of a certain race.
            </p>
          </MDBCol>
        </MDBRow>

        <MDBRow className="my-4 justify-content-center">
          <MDBCol md="auto" className="d-flex justify-content-center">
            <MDBCard style = {{ border: "none", width: '80%' }}>
            <MDBCardBody style={{ textAlign: 'center', padding: "30px" }}>
                <MDBCardTitle>Motivation</MDBCardTitle>
                <MDBCardText>
                This project uses AI to bring more accurate, data-driven analysis to horse racing, moving beyond basic stats and gut instinct. By training a model on horse racing data, we aim to improve predictions, uncover deeper performance patterns, and make advanced analytics more accessible. It also highlights how open-source AI like Llama 2 and Gemma 3 can be tailored for niche domains using university computing resources.
                </MDBCardText>
              </MDBCardBody>
              <MDBCardImage 
                src={img1} 
                alt="horse gambling" 
                position="top" 
                style={{ height: '300px', width: '100%', objectFit: 'contain' }} 
              />
              
            </MDBCard>
          </MDBCol>
        </MDBRow>

        <MDBRow className="my-4 justify-content-center">
          <MDBCol md="auto" className="d-flex justify-content-center">
            <MDBCard style = {{ border: "none", width:"80%" }}>
            <MDBCardBody style={{ textAlign: 'center', padding: "30px" }}>
                <MDBCardTitle>Tools and Tech Used</MDBCardTitle>
                <MDBCardText>
                    We needed a Local LLM Chatbot Interface (Gemma 3, Llama 2, Phi 3 mini), Python 3.10+, Node.js+npm, llama-cpp-python, React, Axios, Express. We also ran all of the LLMs on the Cal Poly GPU Unix Servers for maximum efficiency rather than our own personal computers due to hardware limitations.
                </MDBCardText>
                <div className="d-flex justify-content-between" style={{ paddingBottom: "30px" }} >
                    <MDBCardImage 
                        src={img2} 
                        alt="gemma" 
                        position="top" 
                        style={{ height: '250px', width: '50%', objectFit: 'contain' }} 
                    />
                    <MDBCardImage 
                        src={img3} 
                        alt="python" 
                        position="top" 
                        style={{ height: '250px', width: '50%', objectFit: 'contain' }} 
                    />
                    </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>

        <MDBRow className="my-4 justify-content-center">
          <MDBCol md="auto" className="d-flex justify-content-center">
            <MDBCard style = {{ border: "none", width:"80%" }}>
            <MDBCardBody style={{ textAlign: 'center', padding: "30px" }}>
                <MDBCardTitle>Evaluation Metrics</MDBCardTitle>
                <MDBCardText>
                Gemma3: Achieved ~60% accuracy after 12 hours of training (current best performer) when assuming that it is given every data point it was trained on. It Dropped down to about 20% after some data points get replaced w/ N/A’s. Llama 3.0: Only 12.8% accuracy after 8 hours of training. Llama 3.3: Similarly low accuracy (comparable to 3.0). For the Llama models, we used smaller models with less parameters so this makes sense. 
                </MDBCardText>
                <div className="d-flex justify-content-between" style={{ paddingBottom: "30px" }} >
                    <MDBCardImage 
                        src={img4} 
                        alt="frontend" 
                        position="top" 
                        style={{ height: '250px', width: '50%', objectFit: 'contain' }} 
                    />
                    <MDBCardImage 
                        src={img5} 
                        alt="cli response" 
                        position="top" 
                        style={{ height: '250px', width: '50%', objectFit: 'contain' }} 
                    />
                    </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>

        <MDBRow className="my-4 justify-content-center">
          <MDBCol md="auto" className="d-flex justify-content-center">
            <MDBCard style = {{ border: "none", width: '80%' }}>
            <MDBCardBody style={{ textAlign: 'center', padding: "30px" }}>
                <MDBCardTitle>Analysis of Results</MDBCardTitle>
                <MDBCardText>
                It also makes sense why Gemma3 was the best performer, it was the biggest model that we trained on at 
                4 billion parameters, versus millions for the others. The amount of data that we gave it to train on 
                was kind of unrealistic, which is why we were able to obtain 60% accuracy when given every data point. 
                Failures: In a more realistic scenario where not every data point could be found, it makes sense why 
                the accuracy drops down to 20% as the model doesn’t have as much data to work with. Surprises: On the 
                first training run on the gemma3 model, we got 100% accuracy when testing no matter what dataset we 
                tested on which was weird. Turns out, we forgot to shuffle the training and testing input so the prompt 
                would be formatted such that the winner would always be the first horse listed so the model learned to 
                just always return the first horse (which was coincidentally also the winner).
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>

        <MDBRow className="my-4 justify-content-center">
          <MDBCol md="auto" className="d-flex justify-content-center">
            <MDBCard style = {{ border: "none", width: '80%' }}>
            <MDBCardBody style={{ textAlign: 'center', padding: "30px" }}>
                <MDBCardTitle>Challenges Faced</MDBCardTitle>
                <MDBCardText>
                Model files too large for GitHub – used Google Drive instead. Manual component setup required for each team member. Issues integrating AI training models. Time used to train models was substantial, had to run overnight. Google collab limits to 4 hours of GPU usage for free so we had to torture our own PCs. Took up considerable memory and CPU processing power on computers. Cal Poly servers only allow for a certain amount of time, auto kicks off after around 8 hours, could not train successfully in that amount of time. Windows subsystem for linux having a microsoft driver issue where it didn’t use all VRAM leading to out of memory errors. Uploading the large trained LLMs to the Cal Poly Unix servers was also an issue as there are limits to the size of files that you can rsync to the servers. We had to break up the models with split and cat them back together on the servers.
                </MDBCardText>
              </MDBCardBody>
              <MDBCardImage 
                src={img6} 
                alt="bad ape" 
                position="top" 
                style={{ height: '300px', width: '100%', objectFit: 'contain' }} 
              />
              
            </MDBCard>
          </MDBCol>
        </MDBRow>

        <MDBRow className="my-4 justify-content-center">
          <MDBCol md="auto" className="d-flex justify-content-center">
            <MDBCard style = {{ border: "none", width: '80%' }}>
            <MDBCardBody style={{ textAlign: 'center', padding: "30px" }}>
                <MDBCardTitle>Future Works</MDBCardTitle>
                <MDBCardText>
                Model catered more to specifically Horse Racing gambling rather than just the statistics on horses, includes best odds and what sportsbooks offer. Cleaner frontend. Make it more visually appealing. Utilize stronger models instead of the small 4 billion parameter Gemma model. More datasets so that it can be better with missing data points. Obtain F1 scores for all models.
                </MDBCardText>
              </MDBCardBody>
              <MDBCardImage 
                src={img7} 
                alt="horse gambling" 
                position="top" 
                style={{ height: '300px', width: '100%', objectFit: 'contain' }} 
              />
              
            </MDBCard>
          </MDBCol>
        </MDBRow>

        <MayLike currentProject="HorseGPT" />
      </MDBContainer>
      <ScrollToTopButton />
    </motion.div>
  );
}

export default Neuralnetwork;

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
import img1 from '../assets/NNBenchmark/img1.jpg';
import img2 from '../assets/NNBenchmark/img2.png';
import img3 from '../assets/NNBenchmark/img3.png';
import img4 from '../assets/NNBenchmark/img4.png';
import img5 from '../assets/NNBenchmark/img5.png';
import img6 from '../assets/NNBenchmark/img6.png';
import img7 from '../assets/NNBenchmark/img7.png';
import img8 from '../assets/NNBenchmark/img8.png';
import img9 from '../assets/NNBenchmark/img9.png';
import img10 from '../assets/NNBenchmark/img10.png';
import img11 from '../assets/NNBenchmark/img11.png';
import img12 from '../assets/NNBenchmark/img12.png';


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
            <h1 className="display-4 mb-4">Neural Network Benchmark</h1>
            <p className="lead mb-5">
            A study comparing image recognition performance of four different neural network architectures: Convolutional Neural Networks, Recurrent Neural Networks, Feed-Forward Neural Networks, Long Short Term Memory Neural Networks. </p>
          </MDBCol>
        </MDBRow>

        <MDBRow className="my-4 justify-content-center">
          <MDBCol md="auto" className="d-flex justify-content-center">
            <MDBCard style = {{ border: "none", width: '80%' }}>
            <MDBCardBody style={{ textAlign: 'center', padding: "30px" }}>
                <MDBCardTitle>Objectives/Research Questions</MDBCardTitle>
                <MDBCardText>
                How do different neural network architectures perform in terms of image recognition accuracy? How about on different types of images? By how much?
                </MDBCardText>
                <MDBCardText>
                    <strong>Response Variable:</strong> Accuracy --> (Number of Correct Predictions)/(Total Number of Predictions) * 100%
                </MDBCardText>
                <MDBCardText>
                    <strong>Experimental Factors:</strong> Neural Network Architecture (4 levels), Number of Epochs (4 levels), Dataset Complexity/Theme (4 levels).
                </MDBCardText>
                <MDBCardText>
                    The four neural network architectures we tested were CNN, RNN, FFNN, LSTM. The epoch number tested on was 1, 5, 10 and 15. The dataset themes we tested our models on were clothing items, animals, digits, and cats/dogs.
                </MDBCardText>
              </MDBCardBody>
              <MDBCardImage 
                src={img1} 
                alt="image recognition" 
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
                <MDBCardTitle>Pilot Study</MDBCardTitle>
                <MDBCardText>
                For our pilot study only two levels were selected because they represent distinctly different architectures. CNNs excel in complex tasks, while FFNNs are simpler and more general. This will help us quickly identify any significant differences in accuracy between these two architectures on a small dataset. We replicated this five times for each neural network architecture to reduce any variability in the results. In each one of our replications, we tested on a different random dataset of the same type of images. In all cases, they will be datasets of size 10000 with a constant of 15 epochs and a theme of Clothing Items. The only factor we are testing is Neural Network architecture. The constant factors are Epoch size (15) and image theme (clothing).
                </MDBCardText>
                <MDBCardText>
                <strong>FFNN:</strong> Consists of fully connected layers, where each neuron in one layer connects to every neuron in the next. This structure is simple but dense, requiring a large number of parameters and often making it less efficient with complex data.                </MDBCardText>
                <MDBCardText>
                <strong>CNN:</strong> Introduces convolutional layers, where neurons connect only to a localized region of the input (receptive field). This enables CNNs to recognize patterns across spatial hierarchies with far fewer parameters.
                </MDBCardText>
              </MDBCardBody>
              <MDBCardImage 
                src={img2} 
                alt="pilot study" 
                position="top" 
                style={{ height: '300px', width: '100%', objectFit: 'contain' }} 
              />
              
              <br></br>
              <MDBCardBody style={{ textAlign: 'center', padding: "30px" }}>
                <MDBCardTitle>GLM and Tukey Comparisons</MDBCardTitle>
                <MDBCardText>
                Here is our initial GLM setup and results from our pilot study, with our response variable being percent accuracy and our only experimental factor being neural network architecture since epoch and theme remained constant.
                </MDBCardText>
                <MDBCardText>
                In the bottom right, you can see the results of our Tukey comparisons, which gave us a difference of means between FFNN and CNN of -1.752. We also have a standard deviation of 0.870768, which suggests a lower spread in the difference between the accuracies of FFNN and CNN. We’ll use this information to help determine effect size.
                </MDBCardText>
                <MDBCardText>
                With a p-value of 0.013 being less than 0.05 threshold, we have a statistically significant p-value and can reject the null hypothesis. Thus, we can state there is a difference in image recognition accuracy between FFNN and CNN when testing the theme of clothing through 15 epochs. Using the interval generated, we can say that we are 95% confident that our interval of (-3.022, -0.482) accurately captures the true difference in percent accuracy between FFNN and CNN. 
                </MDBCardText>
              </MDBCardBody>
              <MDBCardImage 
                src={img3} 
                alt="comparisons and GLM" 
                position="top" 
                style={{ height: '300px', width: '100%', objectFit: 'contain' }} 
              />
              
              <br></br>
              <MDBCardBody style={{ textAlign: 'center', padding: "30px" }}>
                <MDBCardTitle>Power Analysis</MDBCardTitle>
                <MDBCardText>
                To conduct our power analysis, we utilized the standard deviation of 0.870678 generated from the GLM analysis along with an alpha level of 0.05, which is the probability of making a Type 1 error, and 3 experimental factors each having 4 levels. We chose an effect size of 1, or 1% in our case because we are measuring accuracy in percentage. This would make it easier to detect meaningful distinctions without overstating minor differences. We thought that something like 3% or 2% would be a little too broad. Considering our problem in the real world, 1% may not seem that much to you, but think of a company like Tesla which deals with millions of customers and has to use image recognition for billions of objects. 1% of 1 billion is ten million. That is an extremely large difference. Of course, our specific project is working with much smaller scales. In our case, in a dataset of 10,000 images, that would mean one neural network would beat the other neural network by 100 images. In larger scales like 500,000 images, that equates to a 5,000 difference. This is a moderate and reasonable difference to look for in different Neural Network Architectures. Additionally, our power analysis states that the number of replicates is 2. This is feasible and our group will be able to execute accordingly.
                </MDBCardText>
              </MDBCardBody>
              <MDBCardImage 
                src={img4} 
                alt="power analysis" 
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
                <MDBCardTitle>Main Experiment</MDBCardTitle>
                <MDBCardText>
                Similar how to we did in our pilot study, we had a data set of 10k images and used a random 5k of those 10k to test each model and to find the accuracy. This training was done for all four architectures, in which we completed 2 replicates for each treatment and averaged those two values to generate our response variable of percent accuracy.                 </MDBCardText>
              </MDBCardBody>
              <MDBCardImage 
                src={img5} 
                alt="action shot of experiment" 
                position="top" 
                style={{ height: '300px', width: '100%', objectFit: 'contain' }} 
              />
              
                <br></br>
                <MDBCardBody style={{ textAlign: 'center', padding: "30px" }}>
                <MDBCardTitle>Comparative Dot Plot and Test for Equal Variance</MDBCardTitle>
                <MDBCardText>
                Here is a comparative dot plot of the results from our main experiment. A key point we’d like to make is that for the treatment of CNN with 1 epoch on the clothing theme, there was a very large difference in accuracy. These points are indicated by the red circles on our dot plot. We’re noting this because it significantly affects our normality test.                
                </MDBCardText>
                <MDBCardText>
                Before we can run an ANOVA of our main experiment data, we must make sure that the underlying condition of equal variance is valid. We initially chose to run a Test for Equal Variance, since we didn’t have any blocking factors, however since we only have 2 replicates, we were unable to run Levene’s test which requires 3+ replicates. Furthermore, we were advised by Professor Heather Smith to do a SRES vs FITS plot to ensure that we had equal variance. As you can see there is no funnel pattern and our data is random. So we can move forward with ANOVA.                 
                </MDBCardText>
              </MDBCardBody>
              <MDBCardImage 
                src={img6} 
                alt="data" 
                position="top" 
                style={{ height: '300px', width: '100%', objectFit: 'contain' }} 
              />
            
              <br></br>
              <MDBCardBody style={{ textAlign: 'center', padding: "30px" }}>
                <MDBCardTitle>General Linear Model</MDBCardTitle>
                <MDBCardText>
                When running a GLM analysis on our main experiment data, we continued to have accuracy as our response variable like in our pilot study. We included all three experimental factors of architecture, theme, and epoch as well as their interactions with each other to determine if any of these interactions are significant. We also stored fits, residuals, and standardized residuals. Our GLM indicates that there is a significant interaction between architecture and epoch as well as architecture and theme since both possess statistically significant p-values that are less than 0.05. Theme and epoch however do not have a significant interaction. All experimental factors themselves also had significantly small p-values. We would like to highlight that our standard deviation in this main experiment was 4.02942, which is notably higher than the standard deviation of 0.870678 we used when doing our power analysis in our pilot study. Had we instead used this standard deviation when completing our power analysis, we would’ve likely had to increase the number of replicates.                 </MDBCardText>
              </MDBCardBody>
              <MDBCardImage 
                src={img7} 
                alt="data" 
                position="top" 
                style={{ height: '300px', width: '100%', objectFit: 'contain' }} 
              />

              <br></br>
              <MDBCardBody style={{ textAlign: 'center', padding: "30px" }}>
                <MDBCardTitle>Interaction Plots</MDBCardTitle>
                <MDBCardText>
                Here are our interaction plots. The first interaction plot to the left is for the interaction of architecture and theme. As you can see, our themes are ordered from left to right with the most complex images being on the left and the least complex image theme being on the right. The interaction plot further tells us that the neural network architectures have worse accuracies with the more complex images which completely makes sense. On this plot, we also circled the groupings for the architectures which will be further depicted in our Tukey comparisons later. The plot on the right is for the interaction of architecture and epoch. You can observe how CNN leads the neural network architectures in performance, and also how the more epochs that the architecture is trained on, the better performing it is until at some point it bottlenecks to a certain value. The only architecture that has worse performance at 15 epochs than 10 epochs is RNN.                 
                </MDBCardText>
              </MDBCardBody>
              <MDBCardImage 
                src={img8} 
                alt="data" 
                position="top" 
                style={{ height: '300px', width: '100%', objectFit: 'contain' }} 
              />

            <br></br>
              <MDBCardBody style={{ textAlign: 'center', padding: "30px" }}>
                <MDBCardTitle>Tukey Comparisons - Same Architecture; Different Theme</MDBCardTitle>
                <MDBCardText>
                Here are the confidence intervals for the Same Architecture, but different themes. This will tell us how the themes performed against one another. From these confidence intervals, we can observe that Animals had the worst performance, then cats/dogs, then clothing, and finally digits performed the best on average. The animal dataset was the most complex because of the different shapes and colors that animals come in, while the digits were the least complex images as they were just hand-drawn images. This tells us that complexity within the image datasets plays a large role in the accuracy of the model. The more complex images tend to make the architectures perform worse while less complexity leads to better performance.                 
                </MDBCardText>
              </MDBCardBody>
              <MDBCardImage 
                src={img9}
                alt="data" 
                position="top" 
                style={{ height: '300px', width: '100%', objectFit: 'contain' }} 
              />

            <br></br>
              <MDBCardBody style={{ textAlign: 'center', padding: "30px" }}>
                <MDBCardTitle>Tukey Comparisons - Different Architecture; Same Themes</MDBCardTitle>
                <MDBCardText>
                Next, I want to look at the confidence intervals for different architectures, but same themes. These are snippets of our confidence intervals for the Animal theme but on different architectures. This is used to determine which neural network architecture performed better than others, or worse than others. From these confidence intervals, we found that CNN was much better in performance than all of the architectures. LSTM had better performance than RNN and FFNN while RNN and FFNN had no statistically significant differences. For the Cats/Dogs theme but with different architectures, CNN had the best performance. All of the other models had 0 in their confidence intervals, with no statistically significant difference. Finally, there are the themes of Digits and Clothing: 0 was in the confidence interval for all of the different architectures so none of the Architectures had statistically significant differences because accuracies were closer together here.
                </MDBCardText>
              </MDBCardBody>
              <MDBCardImage 
                src={img10}
                alt="data" 
                position="top" 
                style={{ height: '300px', width: '100%', objectFit: 'contain' }} 
              />

            <br></br>
              <MDBCardBody style={{ textAlign: 'center', padding: "30px" }}>
                <MDBCardTitle>Tukey Comparisons - Same Architecture; Different Epochs</MDBCardTitle>
                <MDBCardText>
                Looking at confidence intervals with the same architectures but different epochs, we are trying to find differences in performance in solely the epochs. CNN and LSTM at 15 epochs outperformed themselves compared to at 1 epoch. On the other hand, FFNN and RNN had values that were too similar and 0 was in their confidence interval so there are no statistically significant differences there. 
                </MDBCardText>
              </MDBCardBody>
              <MDBCardImage 
                src={img11}
                alt="data" 
                position="top" 
                style={{ height: '300px', width: '100%', objectFit: 'contain' }} 
              />
            <br></br>
              <MDBCardBody style={{ textAlign: 'center', padding: "30px" }}>
                <MDBCardTitle>Tukey Comparisons - Different Architecture; Same Epochs</MDBCardTitle>
                <MDBCardText>
                Now moving on to the confidence intervals with different architectures, we can use these to determine which architecture performed better than the others. For these, we specifically chose 15 epochs which is the maximum number of epochs that we were testing with, and theoretically should be the best. Similar to our other findings, CNN was better than FFNN, LSTM, and RNN. LSTM had better accuracy than RNN. However the confidence intervals for RNN with FFNN, as well as FFNN with LSTM had 0 in it, so there are no statistically significant differences here. 
                </MDBCardText>
              </MDBCardBody>
              <MDBCardImage 
                src={img12}
                alt="data" 
                position="top" 
                style={{ height: '300px', width: '100%', objectFit: 'contain' }} 
              />
            <br></br>
              <MDBCardBody style={{ textAlign: 'center', padding: "30px" }}>
                <MDBCardTitle>Conclusion</MDBCardTitle>
                <MDBCardText>
                CNN performed the best out of all the neural network architectures, which follows our initial knowledge that CNNs excel at image-based tasks. We recommend CNN for image recognition over the other neural network architectures. As epoch size increased, the accuracy of image recognition by the architectures also increased except for in RNN. The rate at which the accuracy increased decreases as epoch size increases. None of our conclusions contradict what we expected to find. We knew CNN was best known for its use in image recognition tasks. We knew that although epochs increase accuracy as it increases, it also bottlenecks and eventually the model doesn’t improve much, or may even become worse in performance. We also knew that the more complex an image is, the worse a model’s accuracy would be. For our future research, we suggest that we look into the following questions: How would the different neural network architectures respond to other themes than the ones already tested? How would even larger epoch levels affect accuracy? How would other neural networks fare against the ones we tested?
                </MDBCardText>
              </MDBCardBody>
              <br></br>
            </MDBCard>
          </MDBCol>
        </MDBRow>

        <MayLike currentProject="Neural Network Benchmark" />
      </MDBContainer>
      <ScrollToTopButton />
    </motion.div>
  );
}

export default Neuralnetwork;

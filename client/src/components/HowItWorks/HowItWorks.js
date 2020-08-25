import React from 'react';
import "./HowItWorks.css";
import volunteersReview from '../../assets/images/volunteers_review.png'

// Function based React Component
const HowItWorks = (props) => {

  // Default Class to apply to Component
  let classList = `HowItWorks`;


  return(
    <div className={classList}>
      <h2>How It Works</h2>
      <div className="HowItWorks-body-container">
        <div className="HowItWorks-step-image-container">
          <img className="HowItWorks-step-image" src={volunteersReview} />
          <img className="HowItWorks-step-image" src={volunteersReview} />
          <img className="HowItWorks-step-image" src={volunteersReview} />
          <img className="HowItWorks-step-image" src={volunteersReview} />
          
        </div>
      </div>
    </div>
  );
}

export default HowItWorks;
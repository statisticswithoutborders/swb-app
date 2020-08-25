import React from 'react';
import "./HowItWorks.css";
import volunteersReview from '../../assets/images/volunteers_review.png'
import volunteersEmailReceive from '../../assets/images/volunteers_email_receive.png'
import volunteersEmailRespond from '../../assets/images/volunteers_email_respond.png'
import volunteersCrown from '../../assets/images/volunteers_crown.png'
import volunteersPath from '../../assets/images/volunteers_path.png'

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
          <img className="HowItWorks-step-image" src={volunteersEmailRespond} />
          <img className="HowItWorks-step-image" src={volunteersEmailReceive} />
          <img className="HowItWorks-step-image" src={volunteersCrown} />
        </div>
        <div className="HowItWorks-path-container" >
          <img className="HowItWorks-path-image" src={volunteersPath} />
        </div>
      </div>
    </div>
  );
}

export default HowItWorks;
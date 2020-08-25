import React from 'react';
import "./FundingFact.css";

// Function based React Component
const FundingFact = (props) => {

  // Default Class to apply to Component
  let classList = [`FundingFact`];

if (props.imgPositionRight){
  classList.push('FundingFact-img-right')
}

  return(
    <div className={classList.join(' ')}>
      <div className='FundingFact-image' style={{backgroundImage: props.image}}></div>
      <p className="FundingFact-p">{props.description}</p>
    </div>
  );
}

export default FundingFact;
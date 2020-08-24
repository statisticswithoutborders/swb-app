import React from 'react';
import "./FundingFact.css";

// Function based React Component
const FundingFact = (props) => {

  // Default Class to apply to Component
  let classList = [`FundingFact`];

if (props.imgRight){
  classList.push('img-right')
}

  return(
    <div className={classList.join(' ')}>
      <div className='funding-fact-image' style={{backgroundImage: props.image}}></div>
      <p>{props.description}</p>
    </div>
  );
}

export default FundingFact;
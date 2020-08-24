import React from 'react';
import "./ServiceTag.css";

// Function based React Component
const ServiceTag = (props) => {

  // Default Class to apply to Component
  let classList = ['ServiceTag'];
  if (props.small) {
    classList.push("small");
  }


  return(
    <div className={classList.join(" ")}>
      {props.label}
    </div>
  );
}

export default ServiceTag;
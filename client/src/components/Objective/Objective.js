import React from 'react';
import "./Objective.css";
import IconArrow from "../IconArrow/IconArrow.js"
import "../../index.css"

// Function based React Component
const Objective = (props) => {

  // Default Class to apply to Component
  let classList = `Objective`;


  return (
    <div className={classList}>
      <div className="year-objective">{props.year}</div>
      <div class="arrow-objective"><IconArrow /></div>
      <div className="text-objective">{props.text}</div>
    </div>
  );
}

export default Objective;
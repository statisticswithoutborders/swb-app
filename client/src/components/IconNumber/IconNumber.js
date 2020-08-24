import React from 'react';
import "./IconNumber.css";
// import "../../index.css"

// Function based React Component
const IconNumber = (props) => {

  // Default Class to apply to Component
  // let classList = "IconNumber"
  let classList = ""

  let numbers = ["digit"]
  if (numbers.includes(props.number)){
    classList += `0${props.number}`
    console.log(classList)
  }
  
  return(
    <div className={classList}>
      {props.label}
    </div>
  );
}
export default IconNumber
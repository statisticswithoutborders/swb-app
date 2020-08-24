import React from 'react';
import "./IconNumber.css";
import "./IconNumber.stories"
import "../../index.css"

// Function based React Component
const IconNumber = (props) => {

  // Default Class to apply to Component
  // let classList = "IconNumber"
  let classList = "icon-number"
  
  let numbers = ["digit"]
  console.log(numbers, classList, props)
  if (numbers.includes(props.number)){
    console.log(props.number)
    classList += `0${props.number}`
  }
  console.log(classList)
  
  return(
    <div className={"box"}> 
    <div className={classList}>
      {props.label}
    <div></div>

      </div>
    </div>
  )
}
export default IconNumber
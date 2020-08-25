import React from 'react';
import "./IconNumber.css";
import "./IconNumber.stories"
import "../../index.css"


const IconNumber = (props) => {


  let classList = "icon-number"
  
  let numbers = ["digit"]

  if (numbers.includes(props.number)){
    classList += `0${props.number}`
  }

  return(
    <div className={classList}>
    <div> 
      {props.label}
      <div className={"box"}></div>

      </div>
    </div>
  )
}
export default IconNumber
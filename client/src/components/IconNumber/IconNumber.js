import React from 'react';
import "./IconNumber.css";
import "./IconNumber.stories"
import "../../index.css"


const IconNumber = (props) => {


  let classList = "IconNumber"
  let numberList = []
  let types = ["box","two, three, four"]
  let numbers = ["digit"]

  if (numbers.includes(props.number)){
    classList += `0${props.number}`
  }


  if (types.includes(props.type)){
    numberList.push(`box-${props.type}`)
  }
  if (props.box){
    numberList.push(`box`)
  }
  if (props.two){
    numberList.push(`two`)
  }
  if (props.three){
    numberList.push(`three`)
  }if (props.four){
    numberList.push(`four`)
  }
  return(
    <div className={classList}>
    <div> 
      {props.label}
      <div className={numberList.join(" ")}></div>

      </div>
    </div>
  )
}
export default IconNumber
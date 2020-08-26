import React from 'react';
import "./Testimonial.css";

// Function based React Component
const Testimonial = (props) => {

  if (props.imgPostion == "left"){
    return(
      <div className="main"> 
        <div className="person-left" style={{ backgroundImage: props.imgSrc }}>
        </div> 
        <p className="testimonal-paragraph">{props.description}<span className="name"><br />{props.name}</span></p> 
      </div>
  );
  } else {
  return(
        <div className="main"> 
          <p className="testimonal-paragraph">{props.description}<span className="name"><br />{props.name}</span>
          </p> 
         <div className="person-right" style={{ backgroundImage: props.imgSrc }}>
          </div> 
        </div>
  );
  }
}

export default Testimonial;


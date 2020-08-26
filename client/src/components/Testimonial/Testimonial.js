import React from 'react';
import "./Testimonial.css";

// Function based React Component
const Testimonial = (props) => {

  // Default Class to apply to Component
  let classList = `testimonial`;
  
  if (props.imgPostion == "left"){
    return(
      <div className="main"> 
        <div className="person" style={{ backgroundImage: props.imgSrc }}>
        </div> 
        <p>{props.description}<span className="name"><br />{props.name}</span></p> 
      </div>
  );
  } else {
  return(
        <div className="main"> 
          <p>{props.description}<span className="name"><br />{props.name}</span></p> 
          <div className="person" style={{ backgroundImage: props.imgSrc }}>
          </div> 
        </div>
  );
  }
}

export default Testimonial;

/*
   <div className="main"> 
          <p>{props.description}<span class="name"><br />{props.name}</span></p>
          <div className="person"></div> 
        </div>

        if (props.imgPostion == "left"){
    return(
      <div className="main"> 
        <div className="person" style={{ backgroundImage: props.imgSrc }}>
        </div> 
        <p>{props.description}<span className="name"><br />{props.name}</span></p> 
      </div>
  );
  } else {
  return(
        <div className="main"> 
          <p>{props.description}<span className="name"><br />{props.name}</span></p>
          <div className="person" style={{ backgroundImage: props.imgSrc }}>
          </div> 
        </div>
  );
  }

        */
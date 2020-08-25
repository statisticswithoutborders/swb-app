import React from 'react';
import "./IconArrow.css";
import arrow from "./arrow.png"


const IconArrow = (props) => {


  let classList = `IconArrow`;

  return (
    <div className={classList}>
      <img src={arrow} />
    </div>
  );
}

export default IconArrow;
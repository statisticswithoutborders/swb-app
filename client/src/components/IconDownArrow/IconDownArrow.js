import React from "react";
import "./IconDownArrow.css";

const IconDownArrow = (props) => {


  let classList = [`IconDownArrow`];
  if (props.arrowUp) {
    classList.push('IconDownArrow-up')
  }

  const handleClick = () => {
    props.callBack()
  }

  return (
    <div className={classList.join(' ')}>
      <div>
        <div onClick={handleClick} style={{ cursor: 'pointer' }}>&#9660;</div>
      </div>
    </div>
  );
};

export default IconDownArrow;

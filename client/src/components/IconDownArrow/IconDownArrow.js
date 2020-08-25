import React from 'react';
import "./IconDownArrow.css";


const IconDownArrow = (props) => {


  let classList = `IconDownArrow`;

  const onClick = () => props.callback

  return (
    <div className={classList}>
      <div>
        <div onClick={onClick} style={{ color: "#C4C4C4", cursor: 'pointer' }}>&#9660;</div>
      </div>

    </div>
  );
}

export default IconDownArrow;
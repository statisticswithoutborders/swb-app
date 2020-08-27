import React from "react";
import "./IconDownArrow.css";

const IconDownArrow = props => {
  let classList = `IconDownArrow`;

  const handleClick = () => {
    props.callback();
  };

  return (
    <div className={classList}>
      <div>
        <div
          onClick={handleClick}
          style={{ color: "#C4C4C4", cursor: "pointer" }}
        >
          &#9660;
        </div>
      </div>
    </div>
  );
};

export default IconDownArrow;

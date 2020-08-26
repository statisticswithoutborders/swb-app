import React from "react";
import "./IconImage.css";
import "../../index.css";

const IconImage = props => {
  let classList = `IconImage`;

  return (
    <div className={classList}>
      <a href={props.url}>
        <div
          className="img"
          style={{ backgroundImage: props.image, height: props.height }}
        ></div>
      </a>
    </div>
  );
};

export default IconImage;

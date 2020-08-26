import React from "react";
import "./IconImage.css";
import "../../index.css";

const IconImage = props => {
  let classList = `IconImage`;

  return (
    <div className={classList}>
      <a href={props.url}>
        <div className="IconImage-image" style={{ backgroundImage: props.image, height: props.height, width: props.height }}></div>
      </a>
    </div>
  );
};

export default IconImage;

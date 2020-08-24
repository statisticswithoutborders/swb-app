import React from "react";
import "./Button.css";


function Button (props) {
  let classList = '';

  if (props.mediem) {
		classList += ` button-medium`;
	}

    return (
      <button className={classList}>
        {props.label}
      </button>
    );
  };
  
  export default Button;
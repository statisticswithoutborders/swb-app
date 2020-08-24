import React from "react";
import "./Button.css";


function Button (props) {
  let classList = '';

  if (props.medium) {
		classList += ` button-medium`;
  }
  
  if (props.large) {
    classList += ` button-large`
  }

    return (
      <button className={classList}>
        {props.label}
      </button>
    );
  };
  
  export default Button;
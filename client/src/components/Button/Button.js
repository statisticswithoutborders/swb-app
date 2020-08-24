import React from "react";
import "./Button.css";


function Button (props) {
  let classList = '';

  if (props.medium) {
		classList += ` button-medium`
  }
  
  if (props.large) {
    classList += ` button-large`
  }

  if (props.wide) {
    classList += ` button-wide`
  }

    return (
      <button className={classList} onClick = {props.callback}>
        {props.label}
      </button>
    );
  };
  
  export default Button;
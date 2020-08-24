import React from "react";
import "./Button.css";


function Button (props) {
  let classList = '';

  let types = ['small', 'large']

    return (
      <button >
        {props.label}
      </button>
    );
  };
  
  export default Button;
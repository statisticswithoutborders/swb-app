import React from "react";
import "./Input.css";

// React Functional Component
const Input = props => {
  let classList = "";

  let inputBox = ["regular", "large"];

  if (inputBox.includes(props.type)) {
    classList += `input-${props.type}`;
  }

  return (
    <label>
      <input
        type={props.type}
        placeholder={props.placeholder}
        className={props.classlist}
      ></input>
    </label>
  );
};

export default Input;

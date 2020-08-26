import React from "react";
import "../../index.css";

// React Functional Component
const Input = props => {
  let classList = "";

  if (props.small) {
    classList += ` Input-small`;
  }
  if (props.large) {
    classList += ` Input-large`;
  }

  return (
    <form>
      <input placeholder={props.placeholder} className={classList}></input>
    </form>
  );
};

export default Input;

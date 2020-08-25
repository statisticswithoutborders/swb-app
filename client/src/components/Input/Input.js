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
      <textarea
        placeholder={props.placeholder}
        className={classList}
      ></textarea>
    </form>
  );
};

export default Input;

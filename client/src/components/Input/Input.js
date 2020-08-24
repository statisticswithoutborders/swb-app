import React from "react";
import "../../index.css";

// React Functional Component
const Input = props => {
  let classList = "";

  if (props.large) {
    classList += ` input-large`;
    // classList += ` input-large-text`;
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

import React from "react";
import "./ServiceTag.css";

// Function based React Component
const ServiceTag = (props) => {
  // Default Class to apply to Component
  let classList = ["ServiceTag"];
  if (props.ServiceTagSmall) {
    classList.push("ServiceTag-small");
  }
  if (props.ServiceTagMedium) {
    classList.push("ServiceTag-medium");
  }

  return <div className={classList.join(" ")}>{props.label}</div>;
};

export default ServiceTag;

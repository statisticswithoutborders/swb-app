import React from "react";
import "./Card.css";
import lightbulb from "../../assets/images/services_lightbulb.png";
// Function based React Component
const Card = (props) => {
  // Default Class to apply to Component
  let classList = "";
  if (props.card) {
    classList += ` card`;
  }
  if (props.monitoring) {
    classList += ` monitoring`;
  }
  if (props.statisticians) {
    classList += ` statisticians`;
  }
  return (
    <div className={classList}>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </div>
  );
};

export default Card;

import React from "react";
import "./Card.css";
import "../../index.css";

// Function based React Component
const Card = (props) => {
  // Default Class to apply to Component
  let classList = "";
  if (props.how_you_can_benefit) {
    classList += ` how_you_can_benefit`;
  }
  if (props.what_we_do) {
    classList += ` what_we_do`;
  }
  if (props.our_volunteers) {
    classList += ` our_volunteers`;
  }
  if (props.volunteer_ns_image) {
    classList += ` volunteer_ns_image`;
  }

  return (
    <div className={classList}>
      <div className="Card-image" style={{backgroundImage: props.image}}/>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </div>
  );
};

export default Card;

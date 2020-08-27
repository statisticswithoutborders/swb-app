import React from "react";
import "./MemberCard.css";
import "../../index.css";
import { Link } from "react-router-dom";
import IconDownArrow from "../IconDownArrow/IconDownArrow";
// Function based React Component

const MemberCard = props => {
  // Default Class to apply to Component
  let classList = `MemberCard`;

  return (
    <div className={classList}>
      <div
        className="MemberCard-image"
        style={{ backgroundImage: props.image }}
      ></div>
      <h3 className="MemberCard-name">{props.name}</h3>
      <h6 className="MemberCard-position">{props.position}</h6>
      <hr className="Membercard-line" />
      <div>
        <p className="MemberCard-about">{props.about}</p>
        <div className="IconDownArrow-link">
          {props.IconDownArrow ? <IconDownArrow /> : null}
        </div>
      </div>
    </div>
  );
};

export default MemberCard;

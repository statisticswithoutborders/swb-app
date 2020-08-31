import React, { useState, Component, useEffect } from "react";
import "./MemberCard.css";
import "../../index.css";
import { Link } from "react-router-dom";
import IconDownArrow from "../IconDownArrow/IconDownArrow";

const MemberCard = props => {
  let classList = `MemberCard`;

  const [divClasses, toggleHidden] = useState(["MemberCard-about"]);
  const toggle = () => toggleHidden(!isHidden);

  // let IconDownArrowClasses = ["MemberCard-about"]

  let onClick = () => {
    console.log("working");

    if (divClasses[1]) {
      divClasses.pop();
    } else {
      divClasses.push(`MemberCard-expand`);
    }
    toggleHidden([...divClasses]);
  };

  return (
    <div className={classList}>
      <div className="MemberCard-parent">
        <div
          className="MemberCard-image"
          style={{ backgroundImage: props.image }}
        ></div>
        <h3 className="MemberCard-name">{props.name}</h3>
        <h6 className="MemberCard-position">{props.position}</h6>
        <hr className="MemberCard-line" />
        <p className={divClasses.join(" ")}>{props.about}</p>

        {props.IconDownArrow ? (
          <div className="IconDownArrow-link">
            {divClasses[1] ? (
              <IconDownArrow callBack={onClick} arrowUp />
            ) : (
              <IconDownArrow callBack={onClick} />
            )}
          </div>
        ) : null}
      </div>
    </div>
  );
};
export default MemberCard;

import React from 'react';
import "./MemberCard.css";

// Function based React Component
const MemberCard = (props) => {

  // Default Class to apply to Component
  let classList = `MemberCard`;


  return(
    <div className={classList}>
      <div class="MemberCard-image" style={{backgroundImage: props.image}}></div>
     <h3 className="MemberCard-name">{props.name}</h3>
  <h6 className="MemberCard-position">{props.position}</h6>
  <hr className="Membercard-line" />
    <p className="MemberCard-about">
      {props.about}
    </p>
    </div>
  );
}

export default MemberCard;
import React from 'react';
import "./WhoWeAreCard.css";
import Button from '../Button/Button'
import { Link } from 'react-router-dom'

// Function based React Component
const WhoWeAreCard = (props) => {

  // Default Class to apply to Component
  let classList = ["WhoWeAreCard"];


  return(
    <div className={classList.join(" ")}>
      <h2 className="WhoWeAreCard-title">{props.title}</h2>
      <div className="WhoWeAreCard-image" style={{backgroundImage: props.image}}></div>
      <Link to ={props.link}>
      <Button type = 'primary' medium  callback label={props.buttonLabel} />
      </Link>
    </div>
  );
}

export default WhoWeAreCard;
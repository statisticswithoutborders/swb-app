import React from 'react';
import "./ProjectCard.css";
import Button from '../Button/Button'
import { Link } from 'react-router-dom'

// Function based React Component
const ProjectCard = (props) => {

  // Default Class to apply to Component
  let classList = `ProjectCard`;


  return(
    <div className={classList}>
      <h3 className="ProjectCard-title">{props.projectTitle}</h3>
      <div className="ProjectCard-image" style={{backgroundImage: props.image}}></div>
      {props.projectDescription ? <p className="ProjectCard-description">{props.projectDescription}</p> :null}
      <Link to ={props.link}>
      <Button type = 'primary' medium  callback label="LEARN MORE" />
      </Link>
    </div>
  );
}

export default ProjectCard;
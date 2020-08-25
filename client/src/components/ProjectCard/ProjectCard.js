import React from 'react';
import "./ProjectCard.css";
import Button from '../Button/Button'

// Function based React Component
const ProjectCard = (props) => {

  // Default Class to apply to Component
  let classList = `ProjectCard`;


  return(
    <div className={classList}>
      <h4>{props.projectTitle}</h4>
      <div className="ProjectCard-image" style={{backgroundImage: props.image}}></div>
      <p className="ProjectCard-description">{props.projectDescription}</p>
      <Button type = 'primary' medium  callback label="LEARN MORE" />
    </div>
  );
}

export default ProjectCard;
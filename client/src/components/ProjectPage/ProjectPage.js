import React from "react";
import "./ProjectPage.css";

// Function based React Component
const ProjectPage = (props) => {
  // Default Class to apply to Component
  let classList = `ProjectPage`;

  return (
    <div className={classList}>
      Statistics Without Borders Projects
      <div className="projectTitle">{props.projectTitle}</div>
      <div>{props.projectPageImage}</div>
    </div>
  );
};

export default ProjectPage;

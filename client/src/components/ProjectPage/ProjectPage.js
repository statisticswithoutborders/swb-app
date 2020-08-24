import React from "react";
import "./ProjectPage.css";

// Function based React Component
const ProjectPage = (props) => {
  // Default Class to apply to Component
  let classList = `ProjectPage`;

  return (
    <div className={classList}>
      <div>Statistics Without Borders Projects</div>
      <div className="projectPageTitle">{props.projectPageTitle}</div>
      <div>Location: {props.projectPageLocation}</div>
      <div>
        Services: {props.projectPageServicesOne} {props.projectPageServicesTwo}{" "}
        {props.projectPageServicesThree} {props.projectPageServicesFour}
      </div>
      <div
        className="projectPageImage"
        style={{ backgroundImage: `${props.projectPageImage}` }}
      ></div>
      <div>{props.projectPageDescription}</div>
    </div>
  );
};

export default ProjectPage;

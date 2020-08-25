import React from "react";
import "./ProjectPage.css";
import ProjectImageGallery from "../ProjectImageGallery/ProjectImageGallery";
import ServiceTag from "../ServiceTag/ServiceTag";

// Function based React Component
const ProjectPageAsante = (props) => {
  // Default Class to apply to Component
  let classList = `ProjectPage`;

  return (
    <div className="asantePageDiv">
      <div className="projectPageTitle">Asante Africa Foundation</div>
      <div className="smallProjectTag">-project1-asante</div>
      <div>
        <div className="pPageImageGalleryDiv">
          <ProjectImageGallery />
        </div>
        <div>
          <div>Location: Kenya & Tanzania</div>
          <div>
            <div className="pPageServices">
              <div>Services:</div> <ServiceTag label="data analysis" />
              <ServiceTag label="monitoring & evaluation" />
            </div>
            <div></div>
          </div>
          Description: The Asante Africa Foundation works to empower East
          African youth with programs in Girls' Advancement, Accelerated
          Classroom Learning, and Youth Leadership and Entrepeneurship.
          Monitoring and Evaluation (M&E) is essential to showing the impact of
          their work and planning future efforts. In 2018, three SWB volunteers
          (two from Africa and one from India) delivered six 2-hour webinars on
          M&E to the East African staff. The webinars were a combination of
          lectures introducing basic concepts and terminology, and discussions
          about how to improve on-going projects. One of the SWB volunteers now
          has a connection to the Asante team and will continue to serve as a
          mentor.
        </div>
      </div>
    </div>
  );
};

export default ProjectPageAsante;

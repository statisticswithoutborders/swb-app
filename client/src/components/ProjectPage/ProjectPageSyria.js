import React from "react";
import "./ProjectPage.css";
import ProjectImageGallery from "../ProjectImageGallery/ProjectImageGallery";
import ServiceTag from "../ServiceTag/ServiceTag";

// Function based React Component
const ProjectPageSyria = (props) => {
  // Default Class to apply to Component
  let classList = `ProjectPage`;

  return (
    <div className="asantePageDiv">
      <div className="projectPageTitle">Whole of Syria Health Cluster</div>
      <div className="smallProjectTag">-project4-un</div>
      <div>
        <div className="pPageImageGalleryDiv">
          <ProjectImageGallery />
        </div>
        <div>
          <div>Location: Syria</div>
          <div>
            <div className="pPageServices">
              <div>Services Provided:</div>&ensp;
              <ServiceTag label="optimize process" />&ensp;
              <ServiceTag label="data comppilation" />
            </div>
            <div></div>
          </div>
          Description: The Syrian Health Cluster, with four hubs and 118
          partners, is the coordination mechanism to provide emergency and
          trauma care, as well as to provide basic health provision where it has
          collapsed. The Syrian Health Cluster is a part of the "Whole-of-Syria"
          approach, which allows for a more effective and accountable
          humanitarian action inside Syria. By request from Luis Hernando
          Aguilar of the Cluster at the time, a team of six SWB volunteers -
          from England, France, Kenya, the Netherlands, and the United States -
          spent one month completing and documenting an automatic data
          compilation system using ETL scripts in R to replace Excel macros. The
          scripts helped optimize the ETL processes, reducing effort time,
          minimizing error risks, and improving the quality of the data that
          were the basis for decision making.
        </div>
        <br></br>
        <br></br>
      </div>
      <div>
        Humanitarian Response website<br></br>
        <br></br>UN Office for the Coordination of Humanitarian Affairs
      </div>
    </div>
  );
};

export default ProjectPageSyria;

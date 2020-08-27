import React from "react";
import "./ProjectPage.css";
import ProjectImageGallerySyria from "../ProjectImageGallery/ProjectImageGallerySyria";
import ServiceTag from "../ServiceTag/ServiceTag";

// Function based React Component
const ProjectPageSyria = (props) => {

  return (
    <div className="ProjectPageDiv">
      <div className="projectPageSWBTitle">
        Statistics Without Borders Projects
      </div>
      <div className="projectPageTitle">Whole of Syria Health Cluster</div>
      <div className="smallProjectTag">-project4-un</div>
      <br></br>
      <div>
        <div className="pPageImageGalleryDiv">
          <ProjectImageGallerySyria />
        </div>
        <div>
          <div className="pPageLocationDiv">
            <b>Location:</b>&nbsp;Syria
          </div>
          <div>
            <div className="pPageServices">
              <div>
                <b>Services Provided:</b>
              </div>
              &ensp;
              <div className="pPageSingleServices">
              <ServiceTag label="optimize process" />
              &ensp;
              <ServiceTag label="data comppilation" />
              </div>
            </div>
            <div></div>
          </div>
          <b>Description:</b> The Syrian Health Cluster, with four hubs and 118
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
        <b>
          Humanitarian Response website<br></br>
          <br></br>UN Office for the Coordination of Humanitarian Affairs
        </b>
      </div>
    </div>
  );
};

export default ProjectPageSyria;

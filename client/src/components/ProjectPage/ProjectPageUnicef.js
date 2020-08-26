import React from "react";
import "./ProjectPage.css";
import ProjectImageGalleryUnicef from "../ProjectImageGallery/ProjectImageGalleryUnicef";
import ServiceTag from "../ServiceTag/ServiceTag";

// Function based React Component
const ProjectPageUnicef = (props) => {
  // Default Class to apply to Component
  let classList = `ProjectPage`;

  return (
    <div className="UnicefPageDiv">
      <div className="projectPageTitle">UNICEF Sierra Leone</div>
      <div className="smallProjectTag">-project5-unicef</div>
      <br></br>
      <div>
        <div className="pPageImageGalleryDiv">
          <ProjectImageGalleryUnicef />
        </div>
        <div>
          <div>
            <b>Location:</b> Sierra Leone
          </div>
          <div>
            <div className="pPageServices">
              <div>
                <b>Services Provided:</b>
              </div>
              &ensp;
              <ServiceTag label="baseline survey" />
              &ensp;
              <ServiceTag label="data analysis" />
              &ensp;
              <ServiceTag label="survey weighting" />
              &ensp;
              <ServiceTag label="data cleaning" />
            </div>
          </div>
          <b>Description:</b> SWB is working on a long-term project with UNICEF
          to evaluate health interventions in Sierra Leone. SWB assisted with
          the design of the baseline survey, data cleaning, and survey
          weighting. Ongoing work will include data analysis and planning for a
          post-intervention survey. An unsolicited comment from our main UNICEF
          contact follows: "...[your SWB volunteer] did and outstanding job. I
          could not have done it without her. She was so patient with cleaning
          the data and dealing with unexpected problems related revists. ..."
        </div>
      </div>
    </div>
  );
};

export default ProjectPageUnicef;

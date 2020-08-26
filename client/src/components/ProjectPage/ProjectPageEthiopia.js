import React from "react";
import "./ProjectPage.css";
import ProjectImageGalleryEthiopia from "../ProjectImageGallery/ProjectImageGalleryEthiopia";
import ServiceTag from "../ServiceTag/ServiceTag";

// Function based React Component
const ProjectPageEthiopia = (props) => {
  // Default Class to apply to Component
  let classList = `ProjectPage`;

  return (
    <div className="EthiopiaPageDiv">
      <div className="projectPageTitle">Save the Children - Ethiopia</div>
      <div className="smallProjectTag">-project2-stc</div>
      <br></br>
      <div>
        <div className="pPageImageGalleryDiv">
          <ProjectImageGalleryEthiopia />
        </div>
        <div>
          <div><b>Location:</b> Ethiopia</div>
          <div>
            <div className="pPageServices">
              <div><b>Services Provided:</b></div>&ensp;<ServiceTag label="longitudinal study" />&ensp;
              <ServiceTag label="data analysis" />
            </div>
            <div></div>
          </div>
          <b>Description:</b> Save the Children is an international non-profit
          organization dedicated to improving the lives of children. Save the
          Children requested help from SWB to design an analysis plan for a
          longitudinal cohort study of nearly 2,000 children in Tigray,
          Ethiopia, as part of a long-term evaluation of Sponsorship-funded
          integrated programming. Sponsorship-funded programming operates in the
          areas of maternal and child health , early childhood care and
          development, basic education, school health and nutrition, and
          adolescent development. This valuation focuses on educational and
          early childhood interventions. <br></br>
          <br></br>Data will be collected every two years from 2017 and
          continuing through 2027. Statistical challenges include analysis of
          missing data, definition of random effects and correlation structure,
          use of propensity scores, and causal interference. SWB's team includes
          a graduate student and a medical school professor, both in the US, a
          post-doctoral fellow in Spain and a semi-retired academic researcher
          from Canada.
        </div>
      </div>
    </div>
  );
};

export default ProjectPageEthiopia;

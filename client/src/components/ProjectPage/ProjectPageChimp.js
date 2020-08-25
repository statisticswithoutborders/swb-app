import React from "react";
import "./ProjectPage.css";
import ProjectImageGallery from "../ProjectImageGallery/ProjectImageGallery";
import ServiceTag from "../ServiceTag/ServiceTag";

// Function based React Component
const ProjectPageChimp = (props) => {
  // Default Class to apply to Component
  let classList = `ProjectPage`;

  return (
    <div className="asantePageDiv">
      <div className="projectPageTitle">Tacugama Chimpanzee Sanctuary</div>
      <div className="smallProjectTag">-project3-chimp</div>
      <div>
        <div className="pPageImageGalleryDiv">
          <ProjectImageGallery />
        </div>
        <div>
          <div>Location: Sierra Leone</div>
          <div>
            <div className="pPageServices">
              <div>Services Provided:</div>&ensp;
              <ServiceTag label="data analysis" />
              &ensp;
              <ServiceTag label="CART models" />
              &ensp;
              <ServiceTag label="risk plots" />
              &ensp;
              <ServiceTag label="database" />
            </div>
            <div></div>
          </div>
          Description: Since 1995, Tacugama Chimpanzee Sanctuary has rescued and
          rehabilitated nearly 200 orphaned and illegally traded western
          chimpanzees (Pan troglodytes versus). SWB did two projects for
          Tacugama in 2018. <br></br>
          <br></br>In a fairly rapid 3-month project, one of our Masters-level
          statisticians analyzed before-and-after data from an environmental
          awareness campaign conducted by the conservation manager in order to
          reduce the negative impact of construction along the Banajuma-Jendema
          road near the Liberian border.<br></br>
          <br></br>McNemar's test was used to demonstrate the success of the
          campaign in improving awareness of the illegality of chimpanzee
          trading and risks associated with bushmeat consumption, GLMM models
          indicated that individuals who encounter bushmeat and/or use it as
          part of their daily lives may lack a corresponding awareness of the
          health risks, and be at highest risk for diseases such as Ebola. SWB
          was asked to investigate the causes of an ataxia-like mystery disease
          responsible for the deaths of over 50 chimpanzees since 2005. Tacugama
          veterinarians have long recognized important risk factors such as time
          of year and forested enclosure but were anxious to investigate
          further. The SWB team included a medical school professor and a recent
          graduate in Industrial Engineering. Project work continued for nearly
          a year while SWB volunteers explored the data with Cox survival
          analysis, competing risk plots, and CART models. We also created an
          electronic database for veterinarians, enabling them to record more
          types of data in a consistant and easily accesible form.
        </div>
      </div>
    </div>
  );
};

export default ProjectPageChimp;

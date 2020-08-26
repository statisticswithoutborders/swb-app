import React from "react";
import "./ProjectPage.css";
import ProjectImageGalleryHaiti from "../ProjectImageGallery/ProjectImageGalleryHaiti";
import ServiceTag from "../ServiceTag/ServiceTag";

const ProjectPageHaiti = (props) => {
  return (
    <div className="ProjectPageDiv">
      <div className="projectPageSWBTitle">
        Statistics Without Borders Projects
      </div>
      <div className="projectPageTitle">Haitian Earthquake Data Collection</div>
      <div className="smallProjectTag">-project6-haiti</div>
      <br></br>
      <div>
        <div className="pPageImageGalleryDiv">
          <ProjectImageGalleryHaiti />
        </div>
        <div>
          <div className="pPageLocationDiv">
            <b>Location:</b>&nbsp;Haiti
          </div>
          <div>
            <div className="pPageServices">
              <div>
                <b>Services Provided:</b>
              </div>
              &ensp;
              <div className="pPageSingleServices">
              <ServiceTag label="survey design" />
              &ensp;
              <ServiceTag label="field testing" />
              </div>
            </div>
          </div>
          <b>Description:</b> A team of Statistics Without Borders (SWB)
          volunteers advised SciMetrika, LLC (an 8(a) firm that focuses on
          providing solutions to advancing human health) on the design and
          execution of a survey in Haiti. Data collected will be used to assess
          the impact of the magnitude 7.0 Mw earthquake of January 12, 2010. The
          epicentre of this earthquake, near the town of Léogâne, was about 16
          miles WSW of the Haitian capital and population center of
          Port-au-Prince. Thousands of people died and homes, businesses,
          government buildings, and national landmarks throughout the region
          collapsed or suffered structural damage, resulting in the displacement
          of millions of survivors. <br></br>
          <br></br>
          In the aftermath of this (or any other) natural disaster, it is
          critical to quickly develop reliable estimates of the extent of damage
          to homes and displacement of people as well as the nature of the
          displacements (temporary or permanent, current living conditions of
          the displaced, etc.). It is on these issues that SciMetrika and SWB
          focused. <br></br>
          <br></br>Three SWB volunteers spent a week working with SciMetrika
          President & CEO Jean Orelien in Haiti. This trip had multiple
          purposes: <br></br>
          <br></br>Work with local Haitian authorities and representatives of
          other organizations in Haiti to assess the situation and the potential
          difficulties to data collection; <br></br>
          <br></br>Work with the SWB Project Director and other SWB volunteers
          to design a questionnaire and plan for executing the study; <br></br>
          <br></br>Assist with cognitive testing, field testing, and focus group
          testing of the draft questionnaire; <br></br>
          <br></br>Assist with translation and back-translation of the
          questionnaire and instructions for data collectors and their
          supervisors; <br></br>
          <br></br>Assist with pilot testing;<br></br>
          <br></br>
          and Advise on revision the questionnaire and data collection plan
          based on what is learned from the pilot testing. <br></br>
          <br></br>While the geographic focus of this study is Port-au-Prince
          and its suburbs (such as Carrefour and Petion-Ville), SciMetrika is
          considering expansion of the project into cities outside of the
          capital that were affected such as Jacmel and Leogane. <br></br>
          <br></br>As of September 2012, the anonymized Haitian post-earthquake
          cell-phone survey dataset is available. The zipped file contains
          documentation and the data in SAS and SPSS formats. <br></br>
          <br></br>In October 2013, an article on this SWB project was published
          in Significance Magazine. <br></br>
          <br></br>Students from Carnegie Mellon University created Statistical
          Graphics and Visualization Projects for a Fall 2015 course entitled
          "Statistical Graphics and Visualization" taught by Jerzy Wieczorek:{" "}
          <br></br>
          <br></br>Abby Smith <br></br>
          <br></br>Chushan Chen <br></br>
          <br></br>Lauren Miller <br></br>
          <br></br>Sikha Das<br></br>
          <br></br>
          Ting-Kang Pai <br></br>
          <br></br>Interactive graphic by Chiyan Cho <br></br>
          <br></br>Interactive graphic by Siqi Wang
        </div>
      </div>
    </div>
  );
};

export default ProjectPageHaiti;

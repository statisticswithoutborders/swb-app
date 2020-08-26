import React, { Component } from "react";
import "./ProjectSummary.css";
import NavBar from "../../components/NavBar/NavBar";
import ProjectCard from "../../components/ProjectCard/ProjectCard"


// React Class Page Component
class ProjectSummary extends Component {
  constructor() {
    super();

    this.state = { classlist: "ProjectSummary" };
  }

  render() {
    return (
        <React.Fragment>
      <div>
        <NavBar />
        <h1>Statistics Without Borders</h1>
        <p className="details">
          Our projects are the core of our mission. Through these projects we
          help workers in resource-limited settings who do not have statistical
          training by partnering them with professional and student
          statisticians. The scope of our work is diverse, ranging from survey
          design to analysis to efforts to provide statistical software for
          developing nations.
        </p>
        <div className="project-layout">
        <ProjectCard projectTitle="Asante Africa Foundation" 
                          image="var(--home-asante)" 
                          projectDescription="Use Monitoring & Evaluation to assess impact of work that empowers East African youth with programs in Girls' Advancement, Accelerated Classroom Learning, and Youth Leadership and Entrepreneurship"
              />
        <ProjectCard projectTitle="Save The Children - Ethiopia" 
                          image="var(--project-stc)" 
                          projectDescription="Design an analysis plan for a longitudinal cohort study of nearly 2,000 children in Tigray, Ethiopia, as part of a long-term evaluation of Sponsorship-funded integrated programming"
              />
        <ProjectCard projectTitle="Tacugama Chimpanzee Sanctuary" 
                          image="var(--project-chimp)" 
                          projectDescription="Analyze before-and-after data from an environmental awareness campaign and investigate the causes of an ataxia-like mystery disease responsible for the deaths of over 50 chimpanzees since 2005"
              />
        <ProjectCard projectTitle="Whole of Syria Health Cluster:" 
                          image="var(--project-un)" 
                          projectDescription={[<strong><i>UN Office for the Coordination of Humanitarian Affairs Humanitarian Response Operation</i></strong>, <br/>, <br/>, "Optimize the ETL processes, reducing effort time, minimizing error risks, and improving the quality of the data that were the basis for decision making."]}
              />
        <ProjectCard projectTitle="UNICEF Sierra Leone" 
                          image="var(--project-unicef-sl)" 
                          projectDescription="Design of the baseline survey, data cleaning, and survey weighting. Ongoing work will include data analysis and planning for a post-intervention survey.."
              />
        <ProjectCard projectTitle="Haitian Earthquake Data Collection" 
                          image="var(--project-haiti)" 
                          projectDescription="A team of Statistics Without Borders (SWB) volunteers advised SciMetrika, LLC (an 8(a) firm that focuses on providing solutions to advancing human health) on the design and execution of a survey in Haiti"
              />
        </div>
      </div>
      </React.Fragment>
    );
  }
}

export default ProjectSummary;

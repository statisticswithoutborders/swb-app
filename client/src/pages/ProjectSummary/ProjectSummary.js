import React, { Component } from "react";
import "./ProjectSummary.css";
import NavBar from "../../components/NavBar/NavBar";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import Footer from "../../components/Footer/Footer";
import Video from "../../components/Video/Video";

// React Class Page Component
class ProjectSummary extends Component {
  constructor() {
    super();

    this.state = { classlist: "ProjectSummary" };
  }

  render() {
    return (
      <React.Fragment>
        <div className="container">
          <div className="swb-projects">
            <h1>Statistics Without Borders</h1>
            <p className="details">
              Our projects are the core of our mission. Through these projects
              we help workers in resource-limited settings who do not have
              statistical training by partnering them with professional and
              student statisticians. The scope of our work is diverse, ranging
              from survey design to analysis to efforts to provide statistical
              software for developing nations.
            </p>
          </div>
          <div className="project-layout">
            <div className="project-row">
              <div className="project-card">
                <ProjectCard
                  projectTitle="Asante Africa Foundation"
                  image="var(--home-asante)"
                  projectDescription="Use Monitoring & Evaluation to assess impact of work that empowers East African youth with programs in Girls' Advancement, Accelerated Classroom Learning, and Youth Leadership and Entrepreneurship"
                  link="/projects/asante"
                />
              </div>
              <div className="project-card">
                <ProjectCard
                  projectTitle="Save The Children - Ethiopia"
                  image="var(--project-stc)"
                  projectDescription="Design an analysis plan for a longitudinal cohort study of nearly 2,000 children in Tigray, Ethiopia, as part of a long-term evaluation of Sponsorship-funded integrated programming"
                  link="/projects/ethiopia"
                />
              </div>
              <div className="project-card">
                <ProjectCard
                  projectTitle="Tacugama Chimpanzee Sanctuary"
                  image="var(--project-chimp)"
                  projectDescription="Analyze before-and-after data from an environmental awareness campaign and investigate the causes of an ataxia-like mystery disease responsible for the deaths of over 50 chimpanzees since 2005"
                  link="/projects/chimp"
                />
              </div>
              <div className="project-card project-card-syria">
                <ProjectCard
                  projectTitle="Whole of Syria Health Cluster:"
                  image="var(--project-un)"
                  projectDescription={[
                    <span className="un-text">
                      UN Office for the Coordination of Humanitarian Affairs
                      Humanitarian Response Operation
                    </span>,
                    <br />,
                    <span className="optomize-text">
                      Optimize the ETL processes, reducing effort time,
                      minimizing error risks, and improving the quality of the
                      data that were the basis for decision making.
                    </span>,
                  ]}
                  link="/projects/syria"
                />
              </div>
              <div className="project-card project-card-unicef">
                <ProjectCard
                  projectTitle="UNICEF Sierra Leone"
                  image="var(--project-unicef-sl)"
                  projectDescription="Design of the baseline survey, data cleaning, and survey weighting. Ongoing work will include data analysis and planning for a post-intervention survey.."
                  link="/projects/unicef"
                />
              </div>
              <div className="project-card">
                <ProjectCard
                  projectTitle="Haitian Earthquake Data Collection"
                  image="var(--project-haiti)"
                  projectDescription="A team of Statistics Without Borders (SWB) volunteers advised SciMetrika, LLC (an 8(a) firm that focuses on providing solutions to advancing human health) on the design and execution of a survey in Haiti"
                  link="/projects/haiti"
                />
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ProjectSummary;

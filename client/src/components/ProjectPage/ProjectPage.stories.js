import React from "react";
import { storiesOf } from "@storybook/react";
import "../../index.css";
import ProjectPage from "./ProjectPage";
import ServiceTag from "../ServiceTag/ServiceTag";

storiesOf("ProjectPage", module).add("ProjectPageOne", () => {
  return (
    <ProjectPage
      projectPageTitle="Save the Children - Ethiopia"
      projectPageImage={"var(--project1-asante)"}
      projectPageLocation="Kenya & Tanzania"
      projectPageServicesOne={<ServiceTag label="data analysis" />}
      projectPageServicesTwo={<ServiceTag label="monitoring & evaluation" />}
      projectPageServicesThree=""
      projectPageServicesFour=""
      projectPageDescription="The Asante Africa Foundation works to empower East African youth with programs in Girls' Advancement, Accelerated Classroom Learning, and Youth Leadership and Entrepeneurship. Monitoring and Evaluation (M&E) is essential to showing the impact of their work and planning future efforts. In 2018, three SWB volunteers (two from Africa and one from India) delivered six 2-hour webinars on M&E to the East African staff. The webinars were a combination of lectures introducing basic concepts and terminology, and discussions about how to improve on-going projects. One of the SWB volunteers now has a connection to the Asante team and will continue to serve as a mentor."
    />
  );
});
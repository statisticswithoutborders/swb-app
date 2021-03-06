import React from "react";
import { storiesOf } from "@storybook/react";
import "../../index.css";
import Card from "./Card";
import lightbulb from "../../assets/images/services_lightbulb.png";
import grow from "../../assets/images/services_grow.png";
import innovate from "../../assets/images/services_innovate.png";
import monitor_eval from "../../assets/images/home_monitor_eval.png";
import home_data_analysis from "../../assets/images/home_data_analysis.png";
import home_exp_design from "../../assets/images/home_exp_design.png";
import volunteers_workspace from "../../assets/images/volunteers_undraw_workspace.png";
import volunteer_students from "../../assets/images/volunteers_undraw_students.png";
import volunteer_chill from "../../assets/images/volunteers_undraw_chill.png";
import volunteer_community from "../../assets/images/volunteers_undraw_community.png";

//How You Can Benefit //
let learn_img = "var(--services-lightbulb)";
let learn_title = "Learn";
let learn_description =
  "Exploratory data analysis. Get insights to drive your organization's projects and fulfill its purpose.";
let grow_img = "var(--services-grow)";
let grow_title = "Grow";
let grow_description =
  "Test and experiment with reliable and accurate data to expand projects and yield desired results for social good.";
let innovate_img = "var(--services-grow)";
let innovate_title = "Innovate";
let innovate_description =
  "Use data to come up with creative solutions to real-world problems that leave a lasting positive impact.";

//What We Do//
let monitor_eval_img = "var(--home-monitor)";
let monitor_eval_title = "Monitoring & Evaluation";
let monitor_eval_description =
  "Monitoring and Evaluation is used to assess the performance of projects, institutions and programmers set up by governments, international organizations and NGOs.";
let data_analysis_img = "var(--home-data-analysis)";
let data_analysis_title = "Data Analysis";
let data_analysis_description =
  "Data analysis is a process of inspecting, cleansing, transforming, and modeling data with the goal of discovering useful information, informing conclusions and supporting decision-making.";
let experimental_design_img = "var(--home-exp-design)";
let experimental_design_title = "Experimental Design";
let experimental_design_description =
  "Experimental design is a a method of planning a set of procedures to investigate a relationship between variables.  This is a branch of statistics that focuses on the analysis of the resultant data.";

//Our Volunteers
let ces_img = "var(--volunteers-workspace)";
let ces_title = "Currently Employed Statisticians";
let ces_description =
  "Statisticians who are currently working are valuable contributors to our projects.  Volunteers cannot participate in projects where there is a conflict of interest but are eligible for any projects that do not conflict with their job.";
let students_img = "var(--volunteers-students)";
let students_title = "Students";
let students_description =
  "Although SWB cannot provide statistical training or classes, any students who are looking or real-world experience are welcome to volunteer on our projects";
let retirees_img = "var(--volunteers-chill)";
let retirees_title = "Retirees";
let retirees_description =
  "Anyone who has retired and who would like to continue working in the statistical community.  SWB accepts projects across multiple disciplines and has a need for any volunteers with years of experience in their specific areas.";
let non_statisticians__img = "var(--volunteers-community)";
let non_statisticians_title = "Non-statisticians";
let non_statisticians_description =
  "Anyone who has knowledge or experience  in related fields (data science, CS, genetics, etc.) and would like more experience working on statistical projects are welcome to volunteer.";

storiesOf("Card", module)
  .add("HowYouCanBenefit-Learn", () => (
    <div style={{width: "25%"}}>
    <Card
      how_you_can_benefit
      image={learn_img}
      title={learn_title}
      description={learn_description}
    />
    </div>
  ))
  .add("HowYouCanBenefit-Grow", () => (
    <div style={{width: "25%"}}>
    <Card
      how_you_can_benefit
      image={grow_img}
      title={grow_title}
      description={grow_description}
    />
    </div>
  ))
  .add("HowYouCanBenefit-Innovate", () => (
    <div style={{width: "25%"}}>
    <Card
      how_you_can_benefit
      image={innovate_img}
      title={innovate_title}
      description={innovate_description}
    />
    </div>
  ))
  .add("WhatWeDo-MonitorNEval", () => (
    <div style={{width: "30%"}}>
    <Card
      what_we_do
      image={monitor_eval_img}
      title={monitor_eval_title}
      description={monitor_eval_description}
    />
    </div>
  ))
  .add("WhatWeDo-DataAnalysis", () => (
    <div style={{width: "30%"}}>
    <Card
      what_we_do
      image={data_analysis_img}
      title={data_analysis_title}
      description={data_analysis_description}
    />
    </div>
  ))
  .add("WhatWeDo-Experimental-Design", () => (
    <div style={{width: "30%"}}>
    <Card
      what_we_do
      image={experimental_design_img}
      title={experimental_design_title}
      description={experimental_design_description}
    />
    </div>
  ))
  .add("OurVolunteers-CES", () => (
    <div style={{width: "30%"}}>
    <Card
      our_volunteers
      image={ces_img}
      title={ces_title}
      description={ces_description}
    />
    </div>
  ))
  .add("OurVolunteers-Students", () => (
    <div style={{width: "30%"}}>
    <Card
      our_volunteers
      volunteer_ns_image
      image={students_img}
      title={students_title}
      description={students_description}
    />
    </div>
  ))
  .add("OurVolunteers-Retirees", () => (
    <div style={{width: "30%"}}>
    <Card
      our_volunteers
      image={retirees_img}
      title={retirees_title}
      description={retirees_description}
    />
    </div>
  ))
  .add("OurVolunteers-Non-Statisticians", () => (
    <div style={{width: "30%"}}>
    <Card
      our_volunteers
      image={non_statisticians__img}
      title={non_statisticians_title}
      description={non_statisticians_description}
    />
    </div>
  ));

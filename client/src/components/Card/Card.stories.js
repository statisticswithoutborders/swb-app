import React from "react";
import { storiesOf } from "@storybook/react";
// import "../../index.css";
import Card from "./Card";
let card_title = "Learn";
let card_description =
  "Exploratory data analysis. Get insights to drive your organization's projects and fulfill its purpose.";
let monitoring_title = "Monitoring & Evaluation";
let monitoring_description =
  "Monitoring and Evaluation is used to assess the performance of projects, institutions and programmers set up by governments, international organizations and NGOs.";
let statisticians_title = "Currently Employed Statisticians";
let statisticians_description =
  "Statisticians who are currently working are valuable contributors to our projects.  Volunteers cannot participate in projects where there is a conflict of interest but are eligible for any projects that do not conflict with their job.";

storiesOf("Card", module)
  .add("Card", () => (
    <Card card title={card_title} description={card_description} />
  ))
  .add("Monitoring", () => (
    <Card
      monitoring
      title={monitoring_title}
      description={monitoring_description}
    />
  ))
  .add("Statisticians", () => (
    <Card
      statisticians
      title={statisticians_title}
      description={statisticians_description}
    />
  ));

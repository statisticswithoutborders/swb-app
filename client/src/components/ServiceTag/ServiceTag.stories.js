import React from "react";
import { storiesOf } from "@storybook/react";
import ServiceTag from "./ServiceTag";
import "../../index.css";

storiesOf("ServiceTag", module)
  //large service tags
  .add("Data Analysis", () => {
    return <ServiceTag label="data analysis" />;
  })
  .add("Monitoring & Evaluation", () => {
    return <ServiceTag label="monitoring & evaluation" />;
  })
  .add("Longitudinal Study", () => {
    return <ServiceTag label="longitudinal study" />;
  })
  .add("Database", () => {
    return <ServiceTag label="database" />;
  })
  .add("CART models", () => {
    return <ServiceTag label="CART models" />;
  })
  .add("Risk Plots", () => {
    return <ServiceTag label="risk plots" />;
  })
  .add("Data Compilation", () => {
    return <ServiceTag label="data comppilation" />;
  })
  .add("Optimize Process", () => {
    return <ServiceTag label="optimize process" />;
  })
  .add("Data Cleaning", () => {
    return <ServiceTag label="data cleaning" />;
  })
  .add("Survey Weighting", () => {
    return <ServiceTag label="survey weighting" />;
  })
  .add("Baseline Survey", () => {
    return <ServiceTag label="baseline survey" />;
  })
  .add("Survey Design", () => {
    return <ServiceTag label="survey design" />;
  })
  .add("Field Testing", () => {
    return <ServiceTag label="field testing" />;
  })
  //medium service tags
  .add("Data Analysis Medium", () => {
    return <ServiceTag ServiceTagMedium label="data analysis" />;
  })
  .add("Monitoring & Evaluation Medium", () => {
    return <ServiceTag ServiceTagMedium label="monitoring & evaluation" />;
  })
  .add("Longitudinal Study Medium", () => {
    return <ServiceTag ServiceTagMedium label="longitudinal study" />;
  })
  .add("Database Medium", () => {
    return <ServiceTag ServiceTagMedium label="database" />;
  })
  .add("CART models Medium", () => {
    return <ServiceTag ServiceTagMedium label="CART models" />;
  })
  .add("Risk Plots Medium", () => {
    return <ServiceTag ServiceTagMedium label="risk plots" />;
  })
  .add("Data Compilation", () => {
    return <ServiceTag ServiceTagMedium label="data comppilation" />;
  })
  .add("Optimize Process Medium", () => {
    return <ServiceTag ServiceTagMedium label="optimize process" />;
  })
  .add("Data Cleaning Medium", () => {
    return <ServiceTag ServiceTagMedium label="data cleaning" />;
  })
  .add("Survey Weighting Medium", () => {
    return <ServiceTag ServiceTagMedium label="survey weighting" />;
  })
  .add("Baseline Survey Medium", () => {
    return <ServiceTag ServiceTagMedium label="baseline survey" />;
  })
  .add("Survey Design Medium", () => {
    return <ServiceTag ServiceTagMedium label="survey design" />;
  })
  .add("Field Testing Medium", () => {
    return <ServiceTag ServiceTagMedium label="field testing" />;
  })
  //small service tags
  .add("Data Analysis Small", () => {
    return <ServiceTag ServiceTagSmall label="data analysis" />;
  })
  .add("Monitoring & Evaluation Small", () => {
    return <ServiceTag ServiceTagSmall label="monitoring & evaluation" />;
  })
  .add("Longitudinal Study Small", () => {
    return <ServiceTag ServiceTagSmall label="longitudinal study" />;
  })
  .add("Database Small", () => {
    return <ServiceTag ServiceTagSmall label="database" />;
  })
  .add("CART models Small", () => {
    return <ServiceTag ServiceTagSmall label="CART models" />;
  })
  .add("Risk Plots Small", () => {
    return <ServiceTag ServiceTagSmall label="risk plots" />;
  })
  .add("Data Compilation Small", () => {
    return <ServiceTag ServiceTagSmall label="data comppilation" />;
  })
  .add("Optimize Process Small", () => {
    return <ServiceTag ServiceTagSmall label="optimize process" />;
  })
  .add("Data Cleaning Small", () => {
    return <ServiceTag ServiceTagSmall label="data cleaning" />;
  })
  .add("Survey Weighting Small", () => {
    return <ServiceTag ServiceTagSmall label="survey weighting" />;
  })
  .add("Baseline Survey Small", () => {
    return <ServiceTag ServiceTagSmall label="baseline survey" />;
  })
  .add("Survey Design Small", () => {
    return <ServiceTag ServiceTagSmall label="survey design" />;
  })
  .add("Field Testing Small", () => {
    return <ServiceTag ServiceTagSmall label="field testing" />;
  });

import React from "react";
import { storiesOf } from "@storybook/react";
import ServiceTag from "./ServiceTag";
import "../../index.css";

storiesOf("ServiceTag", module)
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
  .add("risk plots", () => {
    return <ServiceTag label="risk plots" />;
  })
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
  .add("risk plots Medium", () => {
    return <ServiceTag ServiceTagMedium label="risk plots" />;
  })
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
  .add("risk plots Small", () => {
    return <ServiceTag ServiceTagSmall label="risk plots" />;
  });

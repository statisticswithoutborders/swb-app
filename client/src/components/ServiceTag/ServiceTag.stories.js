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
  .add("Data Analysis Small", () => {
    return <ServiceTag ServiceTag-small label="data analysis" />;
  })
  .add("Monitoring & Evaluation Small", () => {
    return <ServiceTag ServiceTag-small label="monitoring & evaluation" />;
  })
  .add("Longitudinal Study Small", () => {
    return <ServiceTag ServiceTag-small label="longitudinal study" />;
  })
  .add("Database Small", () => {
    return <ServiceTag ServiceTag-small label="database" />;
  })
  .add("CART models Small", () => {
    return <ServiceTag ServiceTag-small label="CART models" />;
  })
  .add("risk plots Small", () => {
    return <ServiceTag ServiceTag-small label="risk plots" />;
  });

import React from "react";
import { storiesOf } from "@storybook/react";
import "../../index.css";
import ProjectPageAsante from "./ProjectPageAsante";
import ProjectPageEthiopia from "./ProjectPageEthiopia";
import ProjectPageChimp from "./ProjectPageChimp";
import ProjectPageSyria from "./ProjectPageSyria";

storiesOf("ProjectPage", module)
  .add("ProjectPageAsante", () => {
    return <ProjectPageAsante />;
  })
  .add("ProjectPageEthiopia", () => {
    return <ProjectPageEthiopia />;
  })
  .add("ProjectPageChimp", () => {
    return <ProjectPageChimp />;
  })
  .add("ProjectPageSyria", () => {
    return <ProjectPageSyria />;
  });

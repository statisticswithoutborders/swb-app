import React from "react";
import { storiesOf } from "@storybook/react";
import "../../index.css";
import ProjectImageGalleryAsante from "./ProjectImageGalleryAsante";

storiesOf("ProjectImageGallery", module).add(
  "ProjectImageGalleryAsante",
  () => {
    return <ProjectImageGalleryAsante />;
  }
);

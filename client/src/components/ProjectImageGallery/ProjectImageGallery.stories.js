import React from "react";
import { storiesOf } from "@storybook/react";
import "../../index.css";
import ProjectImageGalleryAsante from "./ProjectImageGalleryAsante";
import ProjectImageGalleryEthiopia from "./ProjectImageGalleryEthiopia";
import ProjectImageGalleryChimp from "./ProjectImageGalleryChimp";
import ProjectImageGallerySyria from "./ProjectImageGallerySyria";
import ProjectImageGalleryUnicef from "./ProjectImageGalleryUnicef";
import ProjectImageGalleryHaiti from "./ProjectImageGalleryHaiti";

storiesOf("ProjectImageGallery", module)
  .add("ProjectImageGalleryAsante", () => {
    return <ProjectImageGalleryAsante />;
  })
  .add("ProjectImageGalleryEthiopia", () => {
    return <ProjectImageGalleryEthiopia />;
  })
  .add("ProjectImageGalleryChimp", () => {
    return <ProjectImageGalleryChimp />;
  })
  .add("ProjectImageGallerySyria", () => {
    return <ProjectImageGallerySyria />;
  })
  .add("ProjectImageGalleryUnicef", () => {
    return <ProjectImageGalleryUnicef />;
  })
  .add("ProjectImageGalleryHaiti", () => {
    return <ProjectImageGalleryHaiti />;
  });

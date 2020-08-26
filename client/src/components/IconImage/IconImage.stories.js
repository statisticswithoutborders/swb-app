import React from "react";
import { storiesOf } from "@storybook/react";
import "../../index.css";
import IconImage from "./IconImage";

storiesOf("IconImage", module)
  .add("IconFacebook", () => (
    <IconImage
      image="var(--logo-facebook)"
      height="50px"
      url="https://www.facebook.com/statisticswithoutborders/"
    />
  ))
  .add("IconLinkedIn", () => (
    <IconImage
      image="var(--logo-linkedin)"
      height="50px"
      url="https://www.linkedin.com/company/statistics-without-border"
    />
  ))
  .add("IconTwitter", () => (
    <IconImage
      image="var(--logo-twitter)"
      height="50px"
      url="https://twitter.com/swbprobono"
    />
  ))
  .add("IconYoutube", () => (
    <IconImage
      image="var(--logo-youtube)"
      height="50px"
      url="https://www.youtube.com/channel/UC_B9IFL3z8bB1Ml6GcVDavA"
    />
  ))
  .add("IconEmail", () => (
    <IconImage image="var(--logo-email)" height="50px" url="" />
  ))
  .add("IconAboutGiveHeart", () => (
    <IconImage image="var(--about-give-heart)" height="150px" url="" />
  ))
  .add("IconAboutReceiveHeart", () => (
    <IconImage image="var(--about-receive-heart)" height="150px" url="" />
  ))
  .add("IconAboutNoFees", () => (
    <IconImage image="var(--about-no-fees)" height="150px" url="" />
  ))
  .add("IconAboutDonate", () => (
    <IconImage image="var(--about-donate)" height="150px" url="" />
  ));

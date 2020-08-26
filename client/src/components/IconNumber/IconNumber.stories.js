import React from "react";
import { storiesOf } from "@storybook/react";
import "../../index.css";
import IconNumber from "./IconNumber.js";
import "./IconNumber.css";

storiesOf("IconNumber", module)
  .add("IconNumber", () => {
    return <IconNumber type="digit" IconNumber box label="01" />;
  })
  .add("IconNumber", () => {
    return <IconNumber type="digit" IconNumber box label="02" />;
  })
  .add("IconNumber", () => {
    return <IconNumber type="digit" IconNumber box label="03" />;
  })
  .add("IconNumber", () => {
    return <IconNumber type="digit" IconNumber box label="04" />;
  });

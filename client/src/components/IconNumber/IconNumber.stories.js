import React from "react";
import { storiesOf } from "@storybook/react";
import "../../index.css";
import IconNumber from "./IconNumber.js";
import "./IconNumber.css";

storiesOf("IconNumber", module)
  .add("IconNumber1", () => {
    return <IconNumber type="digit" IconNumber box label="01" />;
  })
  .add("IconNumber2", () => {
    return <IconNumber type="digit" IconNumber two label="02" />;
  })
  .add("IconNumber3", () => {
    return <IconNumber type="digit" IconNumber three label="03" />;
  })
  .add("IconNumber4", () => {
    return <IconNumber type="digit" IconNumber four label="04" />;
  });

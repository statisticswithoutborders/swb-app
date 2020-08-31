import React from "react";
import { storiesOf } from "@storybook/react";

import IconDownArrow from "./IconDownArrow";

storiesOf("IconDownArrow", module)
  .add("IconDownArrow", () => {
    return <IconDownArrow />;
  })
  .add("IconUpArrow", () => {
    return <IconDownArrow inverted />;
  });

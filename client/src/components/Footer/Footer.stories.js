import React from "react";
import { storiesOf } from "@storybook/react";
import StoryRouter from "storybook-react-router";
import Footer from "./Footer";
import "./Footer.css";

storiesOf("Footer", module)
.addDecorator(StoryRouter())
.add("Footer", () => {
  return <Footer />;
});

import React from "react";
import { storiesOf } from "@storybook/react";
import StoryRouter from "storybook-react-router";
import "./NavBar.css";
import NavBar from "./NavBar.js";

storiesOf("NavBar", module)
  .addDecorator(StoryRouter())
  .add("NavBar", () => <NavBar />);

import React from "react";
import { storiesOf } from "@storybook/react";
import Input from "./Input.js";
import "./Input.css";
import "../../index.css";

// Form inputs
storiesOf("Input", module)
  .add("Input Name", () => <Input placeholder="NAME" type="regular" />)
  .add("Input Email", () => <Input placeholder="E-MAIL" type="regular" />)
  .add("Input Organization", () => (
    <Input placeholder="ORGANIZATION" type="regular" />
  ))
  .add("Input Subject", () => <Input placeholder="SUBJECT" type="regular" />)
  .add("Input Message", () => (
    <Input large placeholder="MESSAGE" type="input-large" />
  ));

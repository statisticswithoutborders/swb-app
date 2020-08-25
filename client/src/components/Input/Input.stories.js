import React from "react";
import { storiesOf } from "@storybook/react";
import Input from "./Input.js";
import "./Input.css";
import "../../index.css";

// Form inputs
storiesOf("Input", module)
  .add("Name", () => <Input small placeholder="NAME" type="regular" />)
  .add("Email", () => <Input small placeholder="E-MAIL" type="regular" />)
  .add("Organization", () => (
    <Input small placeholder="ORGANIZATION" type="regular" />
  ))
  .add("Subject", () => <Input small placeholder="SUBJECT" type="regular" />)
  .add("Message", () => (
    <Input large placeholder="MESSAGE" type="input-large" />
  ))
  .add("Leave a Comment", () => (
    <Input large placeholder="LEAVE A COMMENT" type="input-large" />
  ));

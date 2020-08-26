import React from "react";
import { storiesOf } from "@storybook/react";
import Input from "./Input.js";
import "./Input.css";
import "../../index.css";

// Form inputs
storiesOf("Input", module)
	.add("Name", () => (
		<Input
			name="name"
			type="text"
			placeholder=" NAME"
			small
			// value={this.state.name}
			// onChange={this.handleChange}
		/>
	))
	.add("Email", () => <Input small placeholder="EMAIL" type="regular" />)
	.add("Organization", () => (
		<Input small placeholder="ORGANIZATION" type="regular" />
	))
	.add("Subject", () => <Input small placeholder="SUBJECT" type="regular" />)
	.add("Message", () => (
		<Input large placeholder="MESSAGE" type="input-large" />
	));

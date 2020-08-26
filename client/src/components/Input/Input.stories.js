import React from "react";
import { storiesOf } from "@storybook/react";
import Input from "./Input.js";
import "./Input.css";
import "../../index.css";

//* Use notes:
//* After you copy/paste <Input... into a Form component,
//* change onChange to onChange={this.handleChange}.
//* Create a method called handleChange in your component
//* to implement capturing key strokes in Input
//* Pass in event: handleChange(e)
//* Then change value to for each Input story
//* value={this.state.name} for Name
//* value={this.state.email} for Email
//* value={this.state.email} for Email
//* value={this.state.subject} for Subject
//* value={this.state.message} for Message

// Form inputs
storiesOf("Input", module)
	.add("Name", () => (
		<Input name="name" type="text" placeholder=" NAME" small value onChange />
	))
	.add("Email", () => (
		<Input name="email" type="text" placeholder=" EMAIL" small value onChange />
	))
	.add("Organization", () => (
		<Input
			name="organization"
			type="text"
			placeholder=" ORGANIZATION"
			small
			value
			onChange
		/>
	))
	.add("Subject", () => (
		<Input
			name="subject"
			type="text"
			placeholder=" SUBJECT"
			small
			value
			onChange
		/>
	))
	.add("Message", () => (
		<Input
			name="message"
			type="text"
			placeholder=" MESSAGE"
			large
			value
			onChange
		/>
	));

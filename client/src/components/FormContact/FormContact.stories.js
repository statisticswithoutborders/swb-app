import React from "react";
import { storiesOf } from "@storybook/react";
import FormContact from "./FormContact";

storiesOf("FormContact", module)
	.add("FormContact", () => {
		return <FormContact formCallback={this.handleSend} />;
	})
	.add("FormContactHelp", () => {
		return <FormContact help formCallback={this.handleSend} />;
	})
	.add("FormContactVolunteer", () => {
		return <FormContact volunteer formCallback={this.handleSend} />;
	});
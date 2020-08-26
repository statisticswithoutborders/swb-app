import React, { useState } from "react";
import { storiesOf } from "@storybook/react";
// import { action } from "@storybook/addon-actions";
import FormContact from "./FormContact";

storiesOf("FormContact", module)
	.add("FormContact", () => {
		return (
			// formCallback={this.handleSend}
			<FormContact formCallback />
		);
	})
	.add("FormContactHelp", () => {
		return <FormContact help formCallback={this.handleSend} />;
	})
	.add("FormContactVolunteer", () => {
		return <FormContact volunteer formCallback={this.handleSend} />;
	});

import React, { useState } from "react";
import { storiesOf } from "@storybook/react";
import FormContact from "./FormContact";

//* Use notes:
//* After you copy/paste <FormContact... into a component,
//* change formCallback={testCallback}
//* to formCallback={this.handleSend}.
//* Then create a method called handleSend in your component
//* to post form data via your API.
//* FormContact provides name, email, organization, subject,
//* and message on submit, which you need to pass to handleSend
//* handleSend(name, email, organization, subject, message)

let testCallback = (name, email, organization, subject, message) => {
	console.log(name, email, organization, subject, message);
};

storiesOf("FormContact", module)
	.add("FormContact", () => {
		return <FormContact formCallback={testCallback} />;
	})
	.add("FormContactHelp", () => {
		return <FormContact help formCallback={testCallback} />;
	})
	.add("FormContactVolunteer", () => {
		return <FormContact volunteer formCallback={testCallback} />;
	});

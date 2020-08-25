import React from "react";
import { storiesOf } from "@storybook/react";
import FormContact from "./FormContact";

storiesOf("FormContact", module).add("FormContact", () => {
	return <FormContact formCallback={this.handleSend} />;
});

import React from "react";
import { storiesOf } from "@storybook/react";
import Service from "./Service";
import "../../index.css";

storiesOf("Service", module).add("Service", () => {
	return (
		<Service
			title="Data Science Consulting"
			description="Our projects are the core of our mission. Throught these projects, we help workers in resource-limited settings who do not have statistical training by partnering them with professional and student statisticians. The scope of our work is diverse, ranging from survey design to analysis to efforts to provide statistical software for developing nations."
			image="var(--services-consulting)"
			alt="Services: data science consulting"
		/>
	);
});

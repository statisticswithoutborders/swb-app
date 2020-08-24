import React from "react";
import "./Service.css";

// Function based React Component
const Service = (props) => {
	// Default Class to apply to Component

	return (
		<div className="service">
			<div
				className="service-img"
				style={{ backgroundImage: props.image }}
			></div>
			<div className="service-text">
				<h3>{props.title}</h3>
				<p>{props.description}</p>
			</div>
		</div>
	);
};

export default Service;

import React from "react";
import "../../index.css";

// React Functional Component
const Input = (props) => {
	const { name, type, placeholder, value, onChange } = props;
	let classList = "Input";

	// if (props.small) {
	// 	classList += ` Input-small`;
	// }
	if (props.large) {
		classList += ` Input-large`;
	}

	return (
		<input
			name={name}
			type={type}
			placeholder={placeholder}
			value={value}
			onChange={onChange}

			// placeholder={props.placeholder}
			// className={classList}
		></input>
	);
};

export default Input;

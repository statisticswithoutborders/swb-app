import React from "react";
import "../../index.css";

// React Functional Component
const Input = (props) => {
	const { name, type, placeholder, small, large, value, onChange } = props;
	let classList = "Input";

	if (small) {
		classList += ` Input-small`;
	}
	if (large) {
		classList += ` Input-large`;
	}

	return (
		<input
			name={name}
			type={type}
			placeholder={placeholder}
			className={classList}
			value={value}
			onChange={onChange}
		></input>
	);
};

export default Input;

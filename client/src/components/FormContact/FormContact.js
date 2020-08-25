import React, { Component } from "react";
import "./FormContact.css";
import Button from "../Button/Button";
import Input from "../Input/Input";

// Controlled Component
class FormContact extends Component {
	constructor() {
		super();
		this.state = {
			classlist: "FormContact",
			name: "",
			email: "",
			organization: "",
			subject: "",
			message: "",
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	} //constructor()

	handleChange(e) {
		this.setState({ [e.target.name]: e.target.value });
	} //handleChange()

	handleSubmit(e) {
		e.preventDefault();
		this.props.formCallback(
			this.state.name,
			this.state.email,
			this.state.organization,
			this.state.subject,
			this.state.message
		);
	}

	render() {
		return <div className={classList}></div>;
	}
}

export default FormContact;

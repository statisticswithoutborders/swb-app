import React, { Component } from "react";
import "./FormContact.css";
import Button from "../Button/Button";
// import Input from "../Input/Input";

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
	} //handleSubmit()

	render() {
		return (
			<form className={this.state.classlist} onSubmit={this.handleSubmit}>
				<label>
					<input
						name="name"
						type="text"
						placeholder=" NAME"
						value={this.state.name}
						onChange={this.handleChange}
					/>
				</label>
				<label>
					<input
						name="email"
						type="text"
						placeholder=" EMAIL"
						value={this.state.email}
						onChange={this.handleChange}
					/>
				</label>
				<label>
					<input
						name="organization"
						type="text"
						placeholder=" ORGANIZATION"
						value={this.state.organization}
						onChange={this.handleChange}
					/>
				</label>
				<label>
					<input
						name="subject"
						type="text"
						placeholder=" SUBJECT"
						value={this.state.subject}
						onChange={this.handleChange}
					/>
				</label>
				<label>
					<textarea
						name="message"
						placeholder=" MESSAGE"
						value={this.state.message}
						onChange={this.handleChange}
					/>
				</label>
				<Button type="submit" small callback label="SEND" />
			</form>
		); //return
	} //render()
}

export default FormContact;

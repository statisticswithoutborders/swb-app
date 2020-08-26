import React, { Component } from "react";
import "./FormContact.css";
import Button from "../Button/Button";
import Input from "../Input/Input";

// Controlled Component
class FormContact extends Component {
	constructor() {
		super();
		this.state = {
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
		//* callback to Parent with form data
		this.props.formCallback(
			this.state.name,
			this.state.email,
			this.state.organization,
			this.state.subject,
			this.state.message
		);
		//* Set state to initial values to clear input fields
		this.setState({
			name: "",
			email: "",
			organization: "",
			subject: "",
			message: "",
		});
	} //handleSubmit()

	render() {
		let infoAtTopOfForm = this.props.help ? (
			<div className="FormContact-div-help-volunteer">
				<h4>New Projects Procedure - Request Help</h4>
				<p>
					We will be in touch within 1-2 weeks about your project. We will work
					with you to evaluate the project needs, including assigning a team of
					Statistics Without Borders volunteers to work on your project under
					one or two SWB project leaders and working with you to bring the
					project to fruition. If for any reason you do not hear from us within
					a week, please contact us at{" "}
					<strong>statisticswithoutborders@gmail.com</strong> to check on the
					status of your request.
				</p>
			</div>
		) : this.props.volunteer ? (
			<div className="FormContact-div-help-volunteer">
				<h4>Volunteering for a Project</h4>
				<p>
					To volunteer with SWB, please contact us below. We try to collect as
					much information as possible on our volunteers' statistical
					backgrounds and experiences, so please attach any relevant
					information. This allows us to match volunteers with appropriate
					projects. SWB never releases any identifying information about our
					volunteers and only provides summary statistics (number of volunteers,
					country or continent, years of experience, etc.).
				</p>
			</div>
		) : null;

		let attachFile =
			this.props.help || this.props.volunteer ? (
				<div className="FormContact-div-attach">
					<Button type="submit" small label="Attach File" />
				</div>
			) : null;

		return (
			<form className="FormContact" onSubmit={this.handleSubmit}>
				{infoAtTopOfForm}
				<div className="FormContact-div-inputs">
					<div className="FormContact-div-name-email">
						<label className="FormContact-label-name">
							{/* <input
								name="name"
								type="text"
								placeholder=" NAME"
								value={this.state.name}
								onChange={this.handleChange}
							/> */}
							<Input
								name="name"
								type="text"
								placeholder=" NAME"
								small
								value={this.state.name}
								onChange={this.handleChange}
							/>
						</label>
						<label className="FormContact-label-email">
							{/* <input
								name="email"
								type="text"
								placeholder=" EMAIL"
								value={this.state.email}
								onChange={this.handleChange}
							/> */}
							<Input
								name="email"
								type="text"
								placeholder=" EMAIL"
								small
								value={this.state.email}
								onChange={this.handleChange}
							/>
						</label>
					</div>
					<div className="FormContact-div-org-subject">
						<label className="FormContact-label-organization">
							{/* <input
								name="organization"
								type="text"
								placeholder=" ORGANIZATION"
								value={this.state.organization}
								onChange={this.handleChange}
							/> */}
							<Input
								name="organization"
								type="text"
								placeholder=" ORGANIZATION"
								small
								value={this.state.organization}
								onChange={this.handleChange}
							/>
						</label>
						<label className="FormContact-label-subject">
							{/* <input
								name="subject"
								type="text"
								placeholder=" SUBJECT"
								value={this.state.subject}
								onChange={this.handleChange}
							/> */}
							<Input
								name="subject"
								type="text"
								placeholder=" SUBJECT"
								small
								value={this.state.subject}
								onChange={this.handleChange}
							/>
						</label>
					</div>
				</div>
				<label className="FormContact-label-message">
					{/* <textarea
						name="message"
						placeholder=" MESSAGE"
						value={this.state.message}
						onChange={this.handleChange}
					/> */}
					<Input
						name="message"
						type="text"
						placeholder=" MESSAGE"
						large
						value={this.state.message}
						onChange={this.handleChange}
					/>
				</label>
				{attachFile}
				<Button type="submit" small label="SEND" />
			</form>
		); //return
	} //render()
}

export default FormContact;

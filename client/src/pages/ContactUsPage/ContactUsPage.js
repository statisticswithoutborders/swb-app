import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./ContactUsPage.css";
import Button from "../../components/Button/Button";
import FormContact from "../../components/FormContact/FormContact";

// * Add API url below
const url = ``;

class ContactUsPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			classList: "ContactUsPage",
			name: "",
			email: "",
			organization: "",
			subject: "",
			message: "",
		};
	}

	handleSend(name, email, organization, subject, message) {
		//* Add API POST code here
		console.log(url);
		console.log(name, email, organization, subject, message);
	}

	render() {
		return (
			<div className={this.state.classList}>
				<div className="ContactUsPage-body">
					<h2 className="ContactUsPage-header">Let's Work Together</h2>
					<FormContact formCallback={this.handleSend} />
					<p className="ContactUsPage-inquiries">
						<strong>For any direct inquiries, please email SWB:</strong>{" "}
						<a href="mailto:statisticswithoutborders@gmail.com">
							statisticswithoutborders@gmail.com
						</a>
					</p>
					<div className="ContactUsPage-button">
						<Link to="/ourservices">
							<Button
								type="primary"
								wide
								label="LEARN MORE ABOUT OUR SERVICES"
							/>
						</Link>
					</div>
					<div className="ContactUsPage-button">
						<Link to="/volunteers">
							<Button
								type="primary"
								wide
								label="LEARN MORE ABOUT OUR VOLUNTEERS"
							/>
						</Link>
					</div>
				</div>
			</div>
		);
	}
}

export default ContactUsPage;

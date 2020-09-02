import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./OurServicesPage.css";
import Service from "../../components/Service/Service.js";
import Card from "../../components/Card/Card.js";
import "../../index.css";
import lightbulb from "../../assets/images/services_lightbulb.png";
import grow from "../../assets/images/services_grow.png";
import innovate from "../../assets/images/services_innovate.png";
import unicef from "../../assets/images/services_logo_unicef.png";
import ocha from "../../assets/images/services_logo_ocha.png";
import asante from "../../assets/images/services_logo_asante.png";
import stc from "../../assets/images/services_logo_stc.png";
import tacugam from "../../assets/images/services_logo_tacugama.png";
import sci from "../../assets/images/services_logo_scimetrika.png";
import FormContact from "../../components/FormContact/FormContact.js";
import Video from "../../components/Video/Video.js";

let learn_img = lightbulb;
let learn_title = "Learn";
let learn_description =
	"Exploratory data analysis. Get insights to drive your organization's projects and fulfill its purpose.";
let grow_img = grow;
let grow_title = "Grow";
let grow_description =
	"Test and experiment with reliable and accurate data to expand projects and yield desired results for social good.";
let innovate_img = innovate;
let innovate_title = "Innovate";
let innovate_description =
	"Use data to come up with creative solutions to real-world problems that leave a lasting positive impact.";

class OurServicesPage extends Component {
	constructor(props) {
		super(props);

		this.handleSend = this.handleSend.bind(this);

		this.state = {
			name: "",
			organization: "",
			email: "",
			subject: "",
			message: "",
		};
	}

	handleSend(e) {
		e.preventDefault();
	}

	render() {
		return (
			<div className="ourServicePageDiv">
				<h1 class="title-services">What We Do</h1>
				<p class="intro-services">
					We work to improve decision making and knowledge in efforts that
					promote welfare through the proper application of statistical
					principles and best practices, where access to such resources is
					limited.
				</p>
				<div class="section-services">
					<Service
						title="Data Science Consulting"
						description="Our projects are the core of our mission. Throught these projects, we help workers in
                resource-limited settings who do not have statistical training by partnering them with
                professional and student statisticians. The scope of our work is diverse, ranging from
                survey design to analysis to efforts to provide statistical software for developing nations."
						image="var(--services-consulting)"
						alt="Services: Data Science Consulting"
					/>
				</div>
				<div class="section-services">
					<Service
						title="Monitoring &amp; Evaluation"
						description="Our projects are the core of our mission. Through these projects we help workers in
                resource-limited settings who do not have statistical training by partnering them with
                professional and student statisticians. The scope of our work is diverse, ranging from
                survey design to analysis to efforts to provide statistical software for developing nations."
						image="var(--services-monitor)"
						alt="Services: Monitoring &amp; Evaluation"
					/>
				</div>
				<div class="section-services">
					<Service
						title="Dashboard Data"
						description="Our projects are the core of our mission. Through these projects we help workers in
                resource-limited settings who do not have statistical training by partnering them with 
                professional and student statisticians. The scope of our work is diverse, ranging from
                survey design to analysis to efforts to provide statistical software for developing nations."
						image="var(--services-dashboard)"
						alt="Services: Dashboard Data"
					/>
				</div>
				<div class="section-services">
					<Service
						title="Survey Sampling"
						description="Our projects are the core of our mission. Through these projects we help workers in
                resource-limited settings who do not have statistical training by partnering them with 
                professional and student statisticians. The scope of our work is diverse, ranging from
                survey design to analysis to efforts to provide statistical software for developing nations."
						image="var(--services-survey)"
						alt="Services: Survey Sampling"
					/>
				</div>
				<div class="section-services">
					<Service
						title="Data Analysis"
						description="Our projects are the core of our mission. Through these projects we help workers in
                resource-limited settings who do not have statistical training by partnering them with 
                professional and student statisticians. The scope of our work is diverse, ranging from
                survey design to analysis to efforts to provide statistical software for developing nations."
						image="var(--services-data-analysis)"
						alt="Services: Data Analysis"
					/>
				</div>
				<div class="section-services">
					<Service
						title="Statistical Model"
						description="Our projects are the core of our mission. Through these projects we help workers in
                resource-limited settings who do not have statistical training by partnering them with 
                professional and student statisticians. The scope of our work is diverse, ranging from
                survey design to analysis to efforts to provide statistical software for developing nations."
						image="var(--services-stat-model)"
						alt="Services: Statistical Model"
					/>
				</div>
				<hr className="services-hr" />
				<h1 className="title-services">How You Can Benefit</h1>
				<div className="services-cards-flex">
					<div className="services-card">
						<Card
							how_you_can_benefit
							image={learn_img}
							title={learn_title}
							description={learn_description}
						/>
					</div>
					<div className="services-card">
						<Card
							how_you_can_benefit
							image={grow_img}
							title={grow_title}
							description={grow_description}
						/>
					</div>
					<div className="services-card">
						<Card
							how_you_can_benefit
							image={innovate_img}
							title={innovate_title}
							description={innovate_description}
						/>
					</div>
				</div>
				<hr className="services-hr" />
				<h1 className="title-services">
					Faunalytics: Working with Statistics Without Borders
				</h1>
				<div class="video-section">
					<div>
						<Video
							large
							width="900px"
							height="500px"
							url="https://www.youtube.com/watch?v=xFKkTMjQoIw"
						/>
					</div>
				</div>
				<hr className="services-hr" />
				<h1 className="title-services">Our Clients</h1>
				<p className="clients">
					Oranizations that have used our pro-bono services
				</p>
				<div className="clients-img-row">
					<a href="https://www.unicef.org/">
						{" "}
						<div className="clients-img">
							<img src={unicef} />
						</div>
					</a>
					<a href="https://www.unocha.org/">
						{" "}
						<div className="clients-img">
							<img src={ocha} />
						</div>
					</a>
				</div>
				<div className="clients-img-row">
					<a href="https://www.asante.org/">
						{" "}
						<div className="clients-img">
							<img src={asante} />
						</div>
					</a>

					<a href="https://www.savethechildren.org/">
						{" "}
						<div className="clients-img">
							<img src={stc} />
						</div>
					</a>
					<a href="https://www.tacugama.com/">
						<div className="clients-img">
							<img src={tacugam} />
						</div>
					</a>
					<a href="https://www.scimetrika.com/">
						<div className="clients-img">
							<img src={sci} />
						</div>
					</a>
				</div>
				<hr className="services-hr" />
				<h2 className="services-form-h2">Let's Work Together - Contact Us</h2>
				<div className="services-form">
					<FormContact help formCallback={this.handleSend} />
				</div>
			</div>
		
		);
	}
}

export default OurServicesPage;

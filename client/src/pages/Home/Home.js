import React, { Component } from "react";
import "./Home.css";
import Button from "../../components/Button/Button";
import Globe from "../../assets/images/home_globe.png";
import Analysis from "../../assets/images/home_analysis.png";
import Bullet from "../../assets/images/Slice 1.png";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import Testimonial from "../../components/Testimonial/Testimonial";
import WhoWeAreCard from "../../components/WhoWeAreCard/WhoWeAreCard";
import BlogCard from "../../components/BlogCard/BlogCard";
import FormContact from "../../components/FormContact/FormContact";
import Card from "../../components/Card/Card";
import { Link } from "react-router-dom";

class Home extends Component {
  constructor() {
    super();
    this.state = { classlist: "Home" };
  }

  render() {
    return (
      <React.Fragment>
        <div className="banner">
          <div className="words">
            <h1>We Use Data For Good</h1>
            <p className="statement">
              Statistics Without Borders is a non-profit volunteer outreach
              group of the American Statistical Association. We provide pro-bono
              consultancy and training in statistics and data science to promote
              objective and transparent decision making.
            </p>
            <Link to="/ourservices">
              <Button large label="LEARN MORE" />
            </Link>
          </div>
        </div>
        <div className="mission">
          <img className="globe" src={Globe} />
          <h2 className="om">Our Mission</h2>
          <img className="analysis" src={Analysis} />
        </div>
        <div className="missionstatement">
          <h3 className="probono">
            We provide pro bono services in statistics and data science, to
            improve decision making and knowledge in efforts that promote
            welfare through the proper application of statistical principles and
            best practices, where access to such resources is limited
          </h3>
        </div>
        <div className="bulletpoint">
          {" "}
          <img src={Bullet} className="bullet" />
          <div className="point">
            {" "}
            Advocate objective, impartial, and sound decision making using best
            statistical practices
          </div>
        </div>
        <div className="bulletpoint">
          {" "}
          <img src={Bullet} className="bullet" />
          <div className="point">
            {" "}
            Provide analytical services through client projects for public
            benefit that support goals that are nonreligious, non-partisan, and
            non-personal, with a focus on developing countries
          </div>
        </div>
        <div className="bulletpoint">
          {" "}
          <img src={Bullet} className="bullet" />
          <div className="point">
            {" "}
            Assist organizations outside of the for-profit sector, with
            priorities given to organizations with limited access to statistical
            resources
          </div>
        </div>
        <div className="bulletpoint">
          {" "}
          <img src={Bullet} className="bullet" />
          <div className="point">
            {" "}
            Strengthen its clients and their communities by helping them build
            their capacities in statistics, data science and analytics, and
            promotes best practices in these areas
          </div>
        </div>
        <hr className="homeHR" />

        <div className="wwd">
          <h2>What We Do</h2>
          <h3 className="wwd2">
            We work to improve decision making and knowledge in efforts that
            promote welfare through the proper application of statistical
            principles and best practices, where access to such resources is
            limited.
          </h3>
          <div className="cards">
            <div className="card">
              <Card
                what_we_do
                image="var(--home-monitor)"
                title="Monitoring & Evaluation"
                description="Monitoring and Evaluation is used to assess the performance of projects, institutions and programmes set up by governments, international organisations and NGOs."
              />{" "}
            </div>
            <div className="card">
              <Card
                what_we_do
                image="var(--home-data-analysis)"
                title="Data Analysis"
                description="Data analysis is a process of inspecting, cleansing, transforming and modeling data with the goal of discovering useful information, informing conclusions and supporting decision-making. "
              />
            </div>
            <div className="card">
              <Card
                what_we_do
                image="var(--home-exp-design)"
                title="Experimental Design"
                description="Experimental design is a method of planning a set of procedures to investigate a relationship between variables. This is a branch of statistics that focuses on the analysis of the resultant data."
              />
            </div>
          </div>
          <Link to="/ourservices">
            <Button medium label="MORE SERVICES" />
          </Link>
        </div>
        <hr className="homeHR" />
        <h2>Who We Are</h2>
        <div className="wwa">
          <div className="wwac">
            <WhoWeAreCard
              title="Members"
              image="var(--home-members)"
              buttonLabel="OUR TEAM"
              link="/aboutus"
            />
          </div>
          <div className="wwac">
            <WhoWeAreCard
              title="Volunteers"
              image="var(--home-volunteers)"
              buttonLabel="JOIN US"
              link="/volunteers"
            />
          </div>
          <div className="wwac">
            <WhoWeAreCard
              title="Clients"
              image="var(--home-clients)"
              buttonLabel="WORK WITH US"
              link="/contactus"
            />
          </div>
        </div>

        <hr className="homeHR" />

        <h2>Our Projects</h2>
        <div className="projects">
          <div className="project">
            <ProjectCard
              image="var(--home-asante)"
              projectTitle="Asante Africa Foundation"
              link="/projects/asante"
            />
          </div>
          <div className="project">
            <ProjectCard
              image="var(--home-stc)"
              projectTitle="Save the Children - Ethiopia"
              link="/projects/ethiopia"
            />
          </div>
          <div className="project">
            <ProjectCard
              image="var(--home-chimp)"
              projectTitle="Tacugama Chimpanzee Sanctuary"
              link="/projects/chimp"
            />
          </div>
          <div className="project">
            <ProjectCard
              image="var(--home-un)"
              projectTitle="Whole of Syria Health Cluster"
              link="/projects/syria"
            />
          </div>
          <div className="project">
            <ProjectCard
              image="var(--home-unicef-sl)"
              projectTitle="UNICEF Sierra Leone"
              link="/projects/unicef"
            />
          </div>
          <div className="project">
            <ProjectCard
              image="var(--home-haiti)"
              projectTitle="Haitian Earthquake Data Collection"
              link="/projects/haiti"
            />
          </div>
        </div>
        <hr className="homeHR" />

        <h2>Testimonials</h2>
        <div className="testimonials">
          {" "}
          <div className = "testimonial">
            <Testimonial
              description={
                'Being an SWB volunteer is probably one of the best things I did. The experience helped me change my career track. Volunteering for SWB gave me experience that helped me move into the area of global health. I had the opportunity to learn from an expert(Gary Shapiro) about conducting surveys in a resource-poor country. We produced 6 publications and presentations and I wrote a chapter on Developing Leadership Skills through Volunteering for the book "Leadership and Women in statistics."'
              }
              name="Eugene"
              imgSrc="var(--home-india)"
              imgPostion="right"
            />
          </div>
          <div className = "testimonial">
            {" "}
            <Testimonial
              description="Statistics Without Borders is an incredible way to give back to others. To be able to leverage the knowledge you've gained is an immensely rewarding experience. That being said, it is a commitment! We're using a huge network of volunteers to work with organizations around the world. It's important to be responsive and to communicate well with others, because we all rely on each other. If you're eager to get your hands into some volunteer work, SWB is a great place to look!"
              name="Ester"
              imgSrc="var(--home-yoel)"
              imgPostion="left"
            />
          </div>
        </div>
        <hr className="homeHR" />

        <h2>SWB Blog</h2>
        <div className="blogs">
          <div className="blog" className="blog">
            <BlogCard
              title="Title: Blog Post 1"
              date="Date: May 20, 2020"
              hr
              label="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. "
            />
          </div>
          <div className="blog">
            <BlogCard
              title="Title: Blog Post 2"
              date="Date: March 9, 2020"
              hr
              label="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. "
            />
          </div>
          <div className="blog">
            <BlogCard
              title="Title: Blog Post 3"
              date="Date: February 23, 2020"
              hr
              label="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. "
            />
          </div>
        </div>
        <hr className="homeHR" />

        <div className="form">
          <FormContact />
        </div>
      </React.Fragment>
    );
  }
}

export default Home;

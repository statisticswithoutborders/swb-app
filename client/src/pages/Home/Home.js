import React, { Component } from "react";
import "./Home.css";
import NavBar from "../../components/NavBar/NavBar";
import Button from "../../components/Button/Button";
import Globe from "../../assets/images/home_globe.png";
import Analysis from "../../assets/images/home_analysis.png";
import Bullet from "../../assets/images/Slice 1.png";
import ProjectCard from '../../components/ProjectCard/ProjectCard'
import Testimonial from '../../components/Testimonial/Testimonial'

class Home extends Component {
  constructor() {
    super();
    this.state = { classlist: "Home" };
  }

  render() {
    return (
      <React.Fragment>
        <NavBar />
        <div className="banner">
          <div className="words">
            <h1>We Use Data For Good</h1>
            <p className="statement">
              Statistics Without Borders is a non-profit volunteer outreach
              group of the American Statistical Association. We provide pro-bono
              consultancy and training in statistics and data science to promote
              objective and transparent decision making.
            </p>
            <Button large label="LEARN MORE" />
          </div>
        </div>
        <div className="mission">
          <img src={Globe} />
          <h2>Our Mission</h2>
          <img src={Analysis} />
        </div>
        <h3 className = 'probono'>
          We provide pro bono services in statistics and data science, to
          improve decision making and knowledge in efforts that promote welfare
          through the proper application of statistical principles and best
          practices, where access to such resources is limited
        </h3>
      

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
        <hr />
        <div className= "wwd">
        <h2 >What We Do</h2>
        <h3 className = 'wwd2'>
          We work to improve decision making and knowledge in efforts that
          promote welfare through the proper application of statistical
          principles and best practices, where access to such resources is
          limited.
        </h3>
        <div>Card will go here</div>
        <div>Card will go here</div>
        <div>Card will go here</div>
        <Button medium label= 'MORE SERVICES'/>
        </div>
        <hr/>
        <h2>Our Projects</h2>
        <div className = 'projects'>
          
          <div className = 'project'><ProjectCard image= 'var(--home-asante)' projectTitle= 'Asante Africa Foundation'/></div>
          <div className = 'project'><ProjectCard image= 'var(--home-stc)' projectTitle = 'Save the Children - Ethiopia'/></div>
          <div className = 'project'><ProjectCard image= 'var(--home-chimp)' projectTitle = 'Tacugama Chimpanzee Sanctuary'/></div>
          <div className = 'project'><ProjectCard image= 'var(--home-un)' projectTitle = 'Whole of Syria Health Cluster'/></div>
          <div className = 'project'><ProjectCard image= 'var(--home-unicef-sl)' projectTitle = 'UNICEF Sierra Leone'/></div>
          <div className = 'project'><ProjectCard image= 'var(--home-haiti)' projectTitle = 'Haitian Earthquake Data Collection'/></div>
        </div>
        <hr/>
        <h2>Testimonials</h2>
        <Testimonial/>
        <Testimonial/>
        <hr/>
        <h2>SWB Blog</h2>
        <div>Another card goes here</div>
        <div>Another card goes here</div>
        <div>Another card goes here</div>
        <hr/>
      </React.Fragment>
    );
  }
}

export default Home;

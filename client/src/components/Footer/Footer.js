import React, { Component } from "react";
import { pnk } from "react-router-dom";
import { BrowserRouter as Router, Link } from "react-router-dom";
import IconImage from "../IconImage/IconImage";
import "./Footer.css";
import "../../index.css";

// React Class Component
class Footer extends Component {
  render() {
    return (
      <div className="FooterWrapper">
        <hr className="Footer-hr" />

        <div className="Footer">
          <div classname="Footer-Column">
            <br></br>
            <div className="Footer-Icons">
              <IconImage
                image="var(--logo-facebook)"
                height="50px"
                url="https://www.facebook.com/statisticswithoutborders/"
              />
              <IconImage
                image="var(--logo-linkedin)"
                height="50px"
                url="https://www.linkedin.com/company/statistics-without-border"
              />
              <IconImage
                image="var(--logo-twitter)"
                height="50px"
                url="https://twitter.com/swbprobono"
              />
              <IconImage
                image="var(--logo-youtube)"
                height="50px"
                url="https://www.youtube.com/channel/UC_B9IFL3z8bB1Ml6GcVDavA"
              />
              <IconImage image="var(--logo-email)" height="50px" url="" />
            </div>
            <h3>Contact</h3>
            <p>
              <Router>
                <Link className="footer-text-link" to="">
                  <span className="footer-email-link">
                    statisticswithoutborders@gmail.com
                </span>
                </Link>
              </Router>
            </p>
            <p>
              <Router>
                <Link className="footer-text-link" to="">
                  Project Application
              </Link>
              </Router>
            </p>
            <p>
              <Router>
                <Link className="footer-text-link" to="">
                  Volunteer Application
              </Link>
<<<<<<< HEAD
              </Router>
            </p>
            <p>
              <Router>
                <Link className="footer-text-link" to="">
                  <span className="footer-privacy-policy">Privacy Policy</span>
                </Link>
              </Router>
            </p>
          </div>
          <div classname="Footer-Column">
            <h3>Projects</h3>
            <p>
              <Router>
                <Link className="footer-text-link" to="">
                  Asante Africa Foundation
              </Link>
              </Router>
            </p>
            <p>
              <Router>
                <Link className="footer-text-link" to="">
                  Save the Children
              </Link>
              </Router>
            </p>
            <p>
              <Router>
                <Link className="footer-text-link" to="">
                  Tacugama Chimpanzee Sanctuary
              </Link>
              </Router>
            </p>
            <p>
              <Router>
                <Link className="footer-text-link" to="">
                  Whole of Syria Health Cluster
              </Link>
              </Router>
            </p>
            <p>
              <Router>
                <Link className="footer-text-link" to="">
                  UNICEF Sierra Leone
              </Link>
              </Router>
            </p>
            <p>
              <Router>
                <Link className="footer-text-link" to="">
                  Haitian Earthquake Data Collection
              </Link>
              </Router>
            </p>
          </div>
          <div classname="Footer-Column">
            <h3>About</h3>
            <p>
              <Router>
                <Link className="footer-text-link" to="">
                  American Statistical Association
              </Link>
              </Router>
            </p>
            <p>
              <Router>
                <Link className="footer-text-link" to="">
                  Press Publications
=======
            </Router>
          </p>
          <p>
            <Router>
              <Link className="footer-text-link" to="">
                <span className="footer-privacy-policy">Privacy Policy</span>
              </Link>
            </Router>
          </p>
        </div>
        <div classname="Footer-Column">
          <h3>Projects</h3>
          <p>
          
              <Link className="footer-text-link" to="/projects/asante">
                Asante Africa Foundation
              </Link>
            
          </p>
          <p>
          
              <Link className="footer-text-link" to="/projects/ethiopia">
                Save the Children
              </Link>
            
          </p>
          <p>
          
              <Link className="footer-text-link" to="/projects/chimp">
                Tacugama Chimpanzee Sanctuary
              </Link>
            
          </p>
          <p>
          
              <Link className="footer-text-link" to="/projects/syria">
                Whole of Syria Health Cluster
              </Link>
            
          </p>
          <p>
          
              <Link className="footer-text-link" to="/projects/unicef">
                UNICEF Sierra Leone
              </Link>
            
          </p>
          <p>
          
              <Link className="footer-text-link" to="/projects/haiti">
                Haitian Earthquake Data Collection
              </Link>
            
          </p>
        </div>
        <div classname="Footer-Column">
          <h3>About</h3>
          <p>
            <Router>
              <a href = "https://www.amstat.org/"className="footer-text-link">
                American Statistical Association
              </a>
            </Router>
          </p>
          <p>
            <Router>
              <Link className="footer-text-link" to="">
                Press Publications
>>>>>>> e24ac318115982588aafb97497a0945d74b892ae
              </Link>
              </Router>
            </p>
            <p>
              <Router>
                <Link className="footer-text-link" to="">
                  ASA Ethical Guidelines for Statistical Practice
              </Link>
              </Router>
            </p>
            <p>
              <Router>
                <Link className="footer-text-link" to="">
                  Broadgreen Solutions
              </Link>
              </Router>
            </p>
            <p>
              <Router>
                <Link className="footer-text-link" to="">
                  Blog
              </Link>
              </Router>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;

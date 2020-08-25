import React, { Component } from "react";
import "./Home.css";
import homeBanner from "../../assets/images/home_banner.png";
import NavBar from "../../components/NavBar/NavBar";
import Button from "../../components/Button/Button";

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
          <div className= 'words'>
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
      </React.Fragment>
    );
  }
}

export default Home;

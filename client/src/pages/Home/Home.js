import React, { Component } from "react";
import "./Home.css";
import "../../index.css";
import NavBar from "../../components/NavBar/NavBar";

class Home extends Component {
  constructor() {
    super();
    this.state = { classlist: "Home" };
  }

  render() {
    return (
      <React.Fragment>
        <NavBar />
        <div>
            
        </div>
      </React.Fragment>
    );
  }
}

export default Home;

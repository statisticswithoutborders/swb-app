import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import { render } from "enzyme";
import Home from "./pages/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import ContactUs from "./pages/ContactUsPage/ContactUsPage";
import Footer from "./components/Footer/Footer";
import Projects from "./pages/ProjectSummary/ProjectSummary";
import ProjectAsante from "./components/ProjectPage/ProjectPageAsante";
import ProjectChimp from "./components/ProjectPage/ProjectPageChimp";
import ProjectEthiopia from "./components/ProjectPage/ProjectPageEthiopia";
import ProjectHaiti from "./components/ProjectPage/ProjectPageHaiti";
import ProjectSyria from "./components/ProjectPage/ProjectPageSyria";
import ProjectUnicef from "./components/ProjectPage/ProjectPageUnicef";
import Services from "./pages/OurServicesPage/OurServicesPage"
import Volunteers from "./pages/VolunteersPage/VolunteersPage"

function App() {
  return (
      <div>
        <NavBar/>
        <Route path="/" component={Home} exact={true}/>
        <Route path="/contactus" component={ContactUs} exact={true}/>
        <Route path="/projects/" component={Projects} exact={true}/>
        <Route path="/projects/asante" component={ProjectAsante}/>
        <Route path="/projects/chimp" component={ProjectChimp}/>
        <Route path="/projects/ethiopia" component={ProjectEthiopia} />
        <Route path="/projects/haiti" component={ProjectHaiti} />
        <Route path="/projects/syria" component={ProjectSyria} />
        <Route path="/projects/unicef" component={ProjectUnicef} />
        <Route path="/ourservices" component={Services}/>
        <Route path="/volunteers" component={Volunteers}/>
        
        <Footer/>
      </div>
  );
}

export default App;

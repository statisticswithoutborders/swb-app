import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import { render } from "enzyme";
import Home from './pages/Home/Home'
import NavBar from './components/NavBar/NavBar'
import ContactUs from './pages/ContactUsPage/ContactUsPage'
import Footer from './components/Footer/Footer'

function App() {
   
      return(
        <React.Fragment>
      <div>
        <NavBar/>
        <Route path = "/" component = {Home} exact = {true} />
        <Route path = "/contactus" component = {ContactUs} exact = {true} />
      </div>
      <Footer/>
      </React.Fragment>
      )
    
}

export default App;

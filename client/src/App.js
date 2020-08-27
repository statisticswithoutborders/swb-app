import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import { render } from "enzyme";
import Home from './pages/Home/Home'
import NavBar from './components/NavBar/NavBar'

class App extends Component() {
  constructor(props) {
		super(props);
		this.state = {
			value: "",
    };
  }
    render() {
      return(
        <React.Fragment>
      <div>
        <NavBar/>
        <Route path = "/" component = {Home} exact = {true} />
      </div>
      </React.Fragment>
      )
    }
}

export default App;

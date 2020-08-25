import React, { Component } from "react";
import { pnk } from "react-router-dom";
import "./Footer.css";
import "../../index.css";

// React Functional Component
const Footer = () => {
  return (
    <div className="Footer">
      <div classname="column">
        <br></br>
        <div>
          (Social Media Icons)<p>var(--logo-facebook)</p>
        </div>
        <h4>Contact</h4>
        <ul>
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
        </ul>
      </div>
      <div classname="column">
        <h4>Projects</h4>
        <ul>
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
        </ul>
      </div>
      <div classname="column">
        <h4>About</h4>
        <ul>
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
        </ul>
      </div>
    </div>
  );
};

export default Footer;

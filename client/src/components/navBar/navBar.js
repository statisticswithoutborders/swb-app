import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./navBar.css";

class NavBar extends Component {
  render() {
    return (
      <nav className="Nav">
        <div>
          <hr></hr>
          <ul className="Nav__item-wrapper">
            <li className="Nav__item">
              <Link className="Nav__link" to="#">
                Services
              </Link>
            </li>
            <li className="Nav__item">
              <Link className="Nav__link" to="#">
                Projects
              </Link>
            </li>
            <li className="Nav__item">
              <Link className="Nav__link" to="#">
                Volunteers
              </Link>
            </li>
            <li className="Nav__item">
              <Link className="Nav__link" to="#">
                About
              </Link>
            </li>
            <li className="Nav__item">
              <Link className="Nav__link" to="#">
                Contact
              </Link>
            </li>
          </ul>
          <hr></hr>
        </div>
      </nav>
    );
  }
}

export default NavBar;

import React, { Component } from "./node_modules/react";
import { Link } from "./node_modules/react-router-dom";
import "./NavBar.css";

class NavBar extends Component {
  render() {
    return (
      <nav className="Nav">
        <div>
          <ul className="Nav_item-wrapper">
            <li className="Nav_item">
              <Link className="Nav_link" to="#">
                Services
              </Link>
            </li>
            <li className="Nav_item">
              <Link className="Nav_link" to="#">
                Projects
              </Link>
            </li>
            <li className="Nav_item">
              <Link className="Nav_link" to="#">
                Volunteers
              </Link>
            </li>
            <li className="Nav_item">
              <Link className="Nav_link" to="#">
                About
              </Link>
            </li>
            <li className="Nav_item">
              <Link className="Nav_link" to="#">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavBar;

import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import nav_logo_world from "../../assets/images/nav_logo_world.png";
import nav_logo_name from "../../assets/images/nav_logo_name.png";
import nav_user_login from "../../assets/images/nav_user_login.png";

class NavBar extends Component {
  render() {
    return (
      <nav className="Nav">
        <div className="Header">
          <img src={nav_logo_world} className="logo" alt="world" />

          <img src={nav_logo_name} className="logo" alt="name" />
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
            <a href="#">
              <img src={nav_user_login} className="login" alt="login" />
            </a>
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavBar;

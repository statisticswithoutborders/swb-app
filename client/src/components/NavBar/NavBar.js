import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import nav_logo_world from "../../assets/images/nav_logo_world.png";
import nav_logo_name from "../../assets/images/nav_logo_name.png";
import nav_user_login from "../../assets/images/nav_user_login.png";
import hamburgerIcon from "../../assets/images/icons8-menu.svg"
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu"


class NavBar extends Component {
  constructor() {
    super()
    this.state = {
      menuOpen: false
    }
  }

  toggleHamburger = () => {
    this.setState({
      menuOpen: !this.state.menuOpen
    })
  }

  

  render() {
    return (
      <nav className="Nav">
        <div className="Header">

         <Link to='/'>  <img src={nav_logo_world} className="logo" alt="world" /></Link>

         <Link to = '/'> <img src={nav_logo_name} className="logo" alt="name" /> </Link>
          <ul className="Nav_item-wrapper">
            <li className="Nav_item nav-item-services">
              <Link className="Nav_link" to="/ourservices">
                Services
              </Link>
            </li>
            <li className="Nav_item">
              <Link className="Nav_link" to="/projects">
                Projects
              </Link>
            </li>
            <li className="Nav_item">
              <Link className="Nav_link" to="volunteers">
                Volunteers
              </Link>
            </li>
            <li className="Nav_item">
              <Link className="Nav_link" to="/aboutus">
                About
              </Link>
            </li>
            <li className="Nav_item">
              <Link className="Nav_link" to="/contactus">
                Contact
              </Link>
            </li>
          </ul>
          <a className="Nav-login-container" href="http://link">
            <img src={nav_user_login} className="login" alt="login" />
          </a>
          <div className="Nav-hamburger" onClick={this.toggleHamburger}>
            <img className="Nav-hamburger-img" src={hamburgerIcon} />
            {this.state.menuOpen ? 
        <HamburgerMenu toggle={this.toggleHamburger} />
        :null} 
          </div>
        </div>
        
      </nav>
    )
    }
  }



export default NavBar;

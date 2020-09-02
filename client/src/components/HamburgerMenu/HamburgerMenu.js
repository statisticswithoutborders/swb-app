import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './HamburgerMenu.css'
import nav_user_login from "../../assets/images/nav_user_login.png";

 function Menu(props) {

    let onClick = (e) =>{
        props.toggle()
    }

  
    return (
        <div className="HamburgerMenu">
            <h1 onClick={props.toggle}>X</h1>
            <ul className="HamburgerMenu-menu-list">
              <li className="HamburgerMenu-list-item">
                <Link className="Nav_link" to="/">
                Login
                </Link>
              </li> 
              <li className="HamburgerMenu-list-item">
                <Link className="Nav_link" to="/ourservices">
                Services
                </Link>
              </li>
              <li className="HamburgerMenu-list-item">
                <Link className="Nav_link" to="/projects">
                Projects
                </Link>
              </li>
              <li className="HamburgerMenu-list-item">
                <Link className="Nav_link" to="/volunteers">
                Volunteers
                </Link>
              </li>
              <li className="HamburgerMenu-list-item">
                <Link className="Nav_link" to="/aboutus">
                About
                </Link>
              </li>
              <li className="HamburgerMenu-list-item">
                <Link className="Nav_link" to="/contactus">
                Contact
                </Link>
              </li>
          </ul>
        </div>
    )
}

export default Menu
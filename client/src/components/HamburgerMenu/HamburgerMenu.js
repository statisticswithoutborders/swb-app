import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './HamburgerMenu.css'

 function Menu(props) {

    let onClick = (e) =>{
        props.toggle()
    }

  
    return (
        <div className="HamburgerMenu">
            <h1 onClick={props.toggle}>X</h1>
            <ul className="HamburgerMenu-menu-list">
              <li>
                <Link className="Nav_link" to="/ourservices">
                Services
                </Link>
              </li>
              <li>
                <Link className="Nav_link" to="/projects">
                Projects
                </Link>
              </li>
              <li>
                <Link className="Nav_link" to="/volunteers">
                Volunteers
                </Link>
              </li>
              <li>
                <Link className="Nav_link" to="/aboutus">
                About
                </Link>
              </li>
              <li>
                <Link className="Nav_link" to="/contactus">
                Contact
                </Link>
              </li>
          </ul>
        </div>
    )
}

export default Menu
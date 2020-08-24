import React from "react";
import { storiesOf } from "@storybook/react";
import "./navBar.css";

import navBar from "./navBar";

storiesOf("navBar", module).add("navBar", () => {
  return (
    <div>
      <hr></hr>
      <ul className="Nav__item-wrapper">
        <li className="Nav__item">
          <a className="Nav__link" href="#">
            Services
          </a>
        </li>
        <li className="Nav__item">
          <a className="Nav__link" href="#">
            Projects
          </a>
        </li>
        <li className="Nav__item">
          <a className="Nav__link" href="#">
            Volunteers
          </a>
        </li>
        <li className="Nav__item">
          <a className="Nav__link" href="#">
            About
          </a>
        </li>
        <li className="Nav__item">
          <a className="Nav__link" href="#">
            Contact
          </a>
        </li>
      </ul>
      <hr></hr>
    </div>
  );
});

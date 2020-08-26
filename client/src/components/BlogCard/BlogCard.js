import React from "react";
import "./BlogCard.css";
import "./BlogCard.stories"
import "../../index.css"
import Button from "../Button/Button"
import{ Link } from 'react-router-dom'


// Function based React Component
const BlogCard = (props) => {
  // Default Class to apply to Component
  let classList = "BlogCard";

  return (
    <div className={classList}>
      <div className="title">{props.title}</div>
      <div className="date">{props.date}</div>
      <hr />
      <div className="label">
        {props.label}
      </div>
      <div class="alignButton">
      <Button class="button" type="primary" callback label="READ MORE" />
      </div>
    </div>
  );
};

export default BlogCard;

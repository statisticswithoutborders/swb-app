import React from "react";
import "./BlogCard.css";
import "./BlogCard.stories"
import "../../index.css"
import Button from "../Button/Button"


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
     
      <Button class="button" type="primary" callback label="READ MORE" />

    </div>
  );
};

export default BlogCard;

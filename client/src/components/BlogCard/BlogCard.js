import React from "react";
import "./BlogCard.css";
import "./BlogCard.stories"
import "../../index.css"

// Function based React Component
const BlogCard = (props) => {
  // Default Class to apply to Component
  let classList = "blog-card";

  return (
    <div className={classList}>
      <div className="title">{props.title}</div>
      <div className="date">{props.date}</div>
      <hr />
      <div className="label">
        {props.label}
      </div>
    </div>
  );
};

export default BlogCard;

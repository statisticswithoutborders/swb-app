import React from "react";
import "./BlogCard.css";
import "./BlogCard.stories";
import "../../index.css";
import Button from "../Button/Button";
import { Link } from "react-router-dom";

// Function based React Component
const BlogCard = (props) => {
	// Default Class to apply to Component
	let classList = "BlogCard";

	return (
		<div className={classList}>
			<div className="BlogCard-title">{props.title}</div>
			<div className="BlogCard-date">{props.date}</div>
			<hr className="BlogCard-hr" />
			<div className="BlogCard-label">{props.label}</div>
			<div class="alignButton">
				<Link to="/">
					<Button class="button" type="primary" callback label="READ MORE" />
				</Link>
			</div>
		</div>
	);
};

export default BlogCard;

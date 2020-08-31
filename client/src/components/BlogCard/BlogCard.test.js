import React from "react";
import { shallow, mount, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });
import BlogCard from "./BlogCard.js";

describe("<BlogCard />", () => {
	it("should render", () => {
		const wrapper = shallow(<BlogCard />);
		expect(wrapper.exists()).toBe(true);
	});

	it("should render a 'title' with text", () => {
		const wrapper = shallow(<BlogCard title="Title: Blog Post 1" />);
		expect(wrapper.find(".BlogCard-title").text()).toBeTruthy();
	});

	it("should render 'date' with text", () => {
		const wrapper = shallow(<BlogCard date="Date: May 20, 2020" />);
		expect(wrapper.find(".BlogCard-date").text()).toBeTruthy();
	});

	it("should render an <hr>", () => {
		const wrapper = shallow(<BlogCard />);
		expect(wrapper.find("hr")).toBeTruthy();
	});

	it("should render 'label' with text", () => {
		const wrapper = shallow(<BlogCard label="Officia quis cupidatat." />);
		expect(wrapper.find(".BlogCard-label").text()).toBeTruthy();
	});
});

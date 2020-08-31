import React from "react";
import { shallow, mount, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });
import BlogCard from "./BlogCard.js";

describe("<BlogCard />", () => {
	it("should render", () => {
		const component = shallow(<BlogCard />);
		expect(component.exists()).toBe(true);
	});
});

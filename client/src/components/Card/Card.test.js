import React from "react";
import { shallow, mount, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });
import Card from "./Card.js";
// * import variables from Storybook
import { learn_img, learn_title, learn_description } from "./Card.stories.js";

describe("<Card />", () => {
	it("should render", () => {
		const wrapper = shallow(<Card />);
		expect(wrapper.exists()).toBe(true);
	});

	it("should render div with correct class", () => {
		const wrapper = shallow(<Card how_you_can_benefit />);
		expect(wrapper.find("div").hasClass(" how_you_can_benefit")).toEqual(true);
	});

	it("should render img element", () => {
		const wrapper = shallow(<Card image={learn_img} />);
		expect(wrapper.find("img")).toHaveLength(1);
	});

	it("should render h3 element", () => {
		const wrapper = shallow(<Card title={learn_title} />);
		expect(wrapper.find("h3")).toHaveLength(1);
	});

	it("should render p element", () => {
		const wrapper = shallow(<Card description={learn_description} />);
		expect(wrapper.find("p")).toHaveLength(1);
	});
});

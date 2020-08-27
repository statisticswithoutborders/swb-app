import React from "react";
import { shallow, mount, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });
import Input from "./Input";

describe("<Input />", () => {
	it("should render", () => {
		const wrapper = shallow(<Input />);
		expect(wrapper.exists()).toBe(true);
	});

	it("should render <input> element", () => {
		const wrapper = shallow(<Input />);
		expect(wrapper.find("input")).toHaveLength(1);
	});

	it("should render <textarea> element", () => {
		const wrapper = shallow(<Input large />);
		expect(wrapper.find("textarea")).toHaveLength(1);
	});

	it("should render with correct props values", () => {
		const wrapper = shallow(
			<Input name="name" type="text" placeholder=" NAME" small value="" />
		);
		expect(wrapper.find("input").props()).toEqual({
			className: "Input Input-small",
			name: "name",
			type: "text",
			placeholder: " NAME",
			value: "",
		});
	});
});

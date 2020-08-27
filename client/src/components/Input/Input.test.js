import React from "react";
import { shallow, mount, configure } from "enzyme";
import sinon from "sinon";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });
import Input from "./Input";

describe("<Input />", () => {
	it("should render as expected", () => {
		const wrapper = shallow(<Input />);
		expect(wrapper.exists()).toBe(true);
	});

	it("should render <input>", () => {
		const wrapper = shallow(<Input />);
		expect(wrapper.find("input")).toHaveLength(1);
	});

	it("should render <input>", () => {
		const wrapper = shallow(
			<Input name="name" type="text" placeholder=" NAME" value="" />
		);
		expect(wrapper.find("input")).to.have.lengthOf(1);
	});
});

// <input name="name" type="text" placeholder=" NAME" value=""></input>
// const callback = sinon.spy();

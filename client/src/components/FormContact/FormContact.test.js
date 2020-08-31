import React from "react";
import { shallow, mount, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });
import FormContact from "./FormContact.js";

describe("<FormContact />", () => {
	const wrapperS = shallow(<FormContact />);
	const wrapperM = mount(<FormContact />);

	it("should render", () => {
		expect(wrapperS.exists()).toBe(true);
	});

	it("should render four <input> elements", () => {
		expect(wrapperM.find("input")).toHaveLength(4);
	});

	it("should render one <textarea> element", () => {
		expect(wrapperM.find("textarea")).toHaveLength(1);
	});

	it("should render help div", () => {
		const wrapperHelp = shallow(<FormContact help />);
		expect(wrapperHelp.find(".FormContact-div-help-volunteer")).toHaveLength(1);
	});

	it("should render volunteer div", () => {
		const wrapperVol = shallow(<FormContact volunteer />);
		expect(wrapperVol.find(".FormContact-div-help-volunteer")).toHaveLength(1);
	});

	//* Test if this.handleChange method is updating state on keydown event
	it("should update state property name to 'Joe'", () => {
		let input = wrapperM.find("input").first();
		input.simulate("change", { target: { value: "Joe", name: "name" } });
		expect(wrapperM.state("name")).toEqual("Joe");
	});
});

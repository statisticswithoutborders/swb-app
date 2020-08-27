import React from "react";
import { shallow, mount, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });
import Service from "./Service.js";

<<<<<<< HEAD
describe("<Service />", () => {
	it("should render as expected", () => {
		const wrapper = shallow(<Service />);
		expect(wrapper.exists()).toBe(true);
=======
describe("FundingFact component", () => {
	it("should render as expected", () => {
		const component = shallow(<FundingFact />);
		expect(component.exists()).toBe(true);
>>>>>>> 58db8549e78708973373389188b8fed5d93943ca
	});
});

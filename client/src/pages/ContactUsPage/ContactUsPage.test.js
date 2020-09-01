import React from "react";
import { shallow, mount, configure } from "enzyme";
import ContactUsPage from "./ContactUsPage.js";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });

describe("ContactUsPage component", () => {
	it("should render as expected", () => {
		const component = shallow(<ContactUsPage />);
		expect(component.exists()).toBe(true);
	});

	it("should render <form> element", () => {
		const wrapper = mount(<ContactUsPage />);
		expect(wrapper.find("form")).toHaveLength(1);
	});
});

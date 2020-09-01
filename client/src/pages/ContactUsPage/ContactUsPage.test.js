import React from "react";
import { shallow, mount, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });
import ContactUsPage from "./ContactUsPage.js";

describe("<ContactUsPage />", () => {
	it("should render", () => {
		const wrapper = shallow(<ContactUsPage />);
		expect(wrapper.exists()).toBe(true);
	});
});

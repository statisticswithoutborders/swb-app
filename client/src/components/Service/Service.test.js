import React from "react";
import { shallow, mount, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });
import Service from "./Service.js";

describe("<Service />", () => {
	it("should render as expected", () => {
		const wrapper = shallow(<Service />);
		expect(wrapper.exists()).toBe(true);
	});
});

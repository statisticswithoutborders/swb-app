import React from "react";
import { shallow, mount, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });
import Input from "./Input";

describe("<Input />", () => {
	it("should render as expected", () => {
		const wrapper = shallow(<Input />);
		expect(wrapper.exists()).toBe(true);
	});

	it("should render <input> with name = 'name'");
});

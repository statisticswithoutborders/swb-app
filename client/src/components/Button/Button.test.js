import React from "react";
import { shallow, mount, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });
import Button from "./Button";

describe("<Button />", () => {
	it("should render as expected", () => {
		const wrapper = shallow(<Button />);
		expect(wrapper.exists()).toBe(true);
	});
});

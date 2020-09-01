import React from "react";
import { shallow, mount, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });
import ServiceTag from "./ServiceTag";

describe("<ServiceTag />", () => {
	it("should render", () => {
		const wrapper = shallow(<ServiceTag />);
		expect(wrapper.exists()).toBe(true);
	});

	it("should render div", () => {
		const wrapper = shallow(<ServiceTag />);
		expect(wrapper.find("div")).toHaveLength(1);
	});

	it("should render with correct children and class values", () => {
		const wrapper = shallow(<ServiceTag label="optimize process" />);
		expect(wrapper.find("div").props()).toEqual({
			children: "optimize process",
			className: "ServiceTag",
		});
	});

	it("should render with correct children and small class values", () => {
		const wrapper = shallow(
			<ServiceTag ServiceTagSmall label="data analysis" />
		);
		expect(wrapper.find("div").props()).toEqual({
			children: "data analysis",
			className: "ServiceTag ServiceTag-small",
		});
	});

	it("should render with correct children and medium class values", () => {
		const wrapper = shallow(<ServiceTag ServiceTagMedium label="database" />);
		expect(wrapper.find("div").props()).toEqual({
			children: "database",
			className: "ServiceTag ServiceTag-medium",
		});
	});
});

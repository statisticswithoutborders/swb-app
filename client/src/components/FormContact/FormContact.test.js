import React from "react";
import { shallow, mount, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });
import FormContact from "./FormContact.js";

describe("<FormContact />", () => {
	it("should render", () => {
		const component = shallow(<FormContact />);
		expect(component.exists()).toBe(true);
	});
});

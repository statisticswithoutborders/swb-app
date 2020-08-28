import React from "react";
import { shallow, mount, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });
import FormContact from "./FormContact.js";

describe("<FormContact />", () => {
	const wrapperS = shallow(<FormContact />);
	const wrapperM = mount(<FormContact />);
	// const testName = "Joe";
	// beforeAll(() => {
	// 	const inputName = wrapperM.find("input").first();
	// 	inputName.simulate("change", { target: { name: testName } });
	// });

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

	it("should update state property name to 'Joe'", () => {
		let input = wrapperM.find("input").first();
		input.simulate("change", { target: { value: "Joe", name: "name" } });
		expect(wrapperM.state("name")).toEqual("Joe");
	});
	// it("should submit data on submit", () => {
	// const testState = {
	// 		name: "Joe",
	// 		email: "joe@g.com",
	// 		organization: "Work Company",
	// 		subject: "Just saying hiya",
	// 		message: "Hiya Luna!",
	// };

	// const testCallback = (name, email, organization, subject, message) => {
	// 	return "Joe, joe@g.com, Work Company, Just saying hiya, Hiya Luna!"
	// };
	// const expectedData =
	// 	"Joe, joe@g.com, Work Company, Just saying hiya, Hiya Luna!";

	// const myMock = jest.fn();
	// const myMockData = () => {
	//   let myData = myMock
	// 	.mockReturnValueOnce("Joe")
	// 	.mockReturnValueOnce("joe@g.com")
	// 	.mockReturnValueOnce("Work Company")
	// 	.mockReturnValueOnce("Just saying hiya")
	//   .mockReturnValueOnce("Hiya Luna!");
	//   return myData;
	// };
	// const wrapper = mount(<FormContact formCallback={myMockData} />);
	// wrapper.find("[type='submit']").simulate("submit");
	// expect(find(.))
	// expect(testSubmit.toHaveBeenCalledWith(expectedData));
	// });
});

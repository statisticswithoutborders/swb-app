import React from "react";
import { shallow, mount, configure } from "enzyme";
import NavBar from "./NavBar.js";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });

describe("Input component", () => {
  it("should render as expected", () => {
    const component = shallow(<NavBar />);
    expect(component.exists()).toBe(true);
  });
});

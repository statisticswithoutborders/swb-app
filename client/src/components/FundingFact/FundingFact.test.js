import React from "react";
import { shallow, mount, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });
import FundingFact from "./FundingFact.js";

describe("FundingFact component", () => {
  it("should render as expected", () => {
    const wrapper = shallow(<FundingFact />);
    expect(wrapper.exists()).toBe(true);
  });
});

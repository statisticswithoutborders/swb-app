import React from "react";
import { shallow, mount, configure } from "enzyme";
import FundingFact from "./FundingFact.js";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });

describe("FundingFact component", () => {
  let leftDescription = "All donations are used 100% for SWB projects and are never used for payments or reimbursements."
  let testImage = "var(--about-donate)"
  const wrapper = shallow(<FundingFact image={testImage} description={leftDescription} />);

  it("should render as expected", () => {
    expect(wrapper.exists()).toBe(true);
  });

  it("has an image div", () => {
    expect(wrapper.find('.FundingFact-image')).toHaveLength(1);
  });
  
  it("has a description", () => {
    expect(wrapper.find('.FundingFact-p')).toHaveLength(1);
  });

  it("image loads from props", () => {
    expect(wrapper.contains(<div className='FundingFact-image' style={{backgroundImage: testImage}} />)).toBe(true);
  });

  it("props text loads", () => {
    expect(wrapper.find('.FundingFact-p').text()).toEqual(leftDescription)
  });

});
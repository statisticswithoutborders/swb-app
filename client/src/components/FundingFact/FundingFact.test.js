import React from "react";
import { shallow, mount, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });
import FundingFact from "./FundingFact.js";

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

  it("image on left if no imgPositionRight prop", () => {
    expect(wrapper.contains(<div className='FundingFact' ><div className='FundingFact-image' style={{backgroundImage: testImage}}></div><p className="FundingFact-p">{leftDescription}</p></div>)).toBe(true)
  });


  it("image is on the right", () => {
    const wrapper = shallow(<FundingFact image={testImage} description={leftDescription} imgPositionRight />);
    expect(wrapper.contains(<div className='FundingFact FundingFact-img-right'><div className='FundingFact-image' style={{backgroundImage: testImage}}></div><p className="FundingFact-p">{leftDescription}</p></div>)).toBe(true);
  });
});
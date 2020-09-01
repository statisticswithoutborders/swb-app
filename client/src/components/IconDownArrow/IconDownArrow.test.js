import React from 'react'
import { shallow, mount, configure } from 'enzyme'
import IconDownArrow from './IconDownArrow.js'
import Adapter from 'enzyme-adapter-react-16';
configure({adapter: new Adapter()});


describe('IconDownArrow component', () => {

  it('should render as expected', () => {
    const component = shallow(<IconDownArrow />)
	 	expect(component.exists()).toBe(true);
  })

  it("should render <div> element", () => {
    const wrapper = shallow(<div />);
    expect(wrapper.find("div")).toHaveLength(1);
  });

})
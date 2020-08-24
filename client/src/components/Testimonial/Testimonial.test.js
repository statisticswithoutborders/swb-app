import React from 'react'
import { shallow, mount, configure } from 'enzyme'
import Testimonial from './Testimonial.js'
import Adapter from 'enzyme-adapter-react-16';
configure({adapter: new Adapter()});


describe('Testimonial component', () => {

  it('should render as expected', () => {
    const component = shallow(<Testimonial />)
	 	expect(component.exists()).toBe(true);
  })
})
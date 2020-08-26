import React from 'react'
import { shallow, mount, configure } from 'enzyme'
import HowItWorks from './HowItWorks.js'
import Adapter from 'enzyme-adapter-react-16';
configure({adapter: new Adapter()});


describe('HowItWorks component', () => {

  it('should render as expected', () => {
    const component = shallow(<HowItWorks />)
	 	expect(component.exists()).toBe(true);
  })
})
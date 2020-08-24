import React from 'react'
import { shallow, mount, configure } from 'enzyme'
import ServiceTag from './ServiceTag.js'
import Adapter from 'enzyme-adapter-react-16';
configure({adapter: new Adapter()});


describe('ServiceTag component', () => {

  it('should render as expected', () => {
    const component = shallow(<ServiceTag />)
	 	expect(component.exists()).toBe(true);
  })
})
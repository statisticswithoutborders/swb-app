import React from 'react'
import { shallow, mount, configure } from 'enzyme'
import Service from './Service.js'
import Adapter from 'enzyme-adapter-react-16';
configure({adapter: new Adapter()});


describe('Service component', () => {

  it('should render as expected', () => {
    const component = shallow(<Service />)
	 	expect(component.exists()).toBe(true);
  })
})
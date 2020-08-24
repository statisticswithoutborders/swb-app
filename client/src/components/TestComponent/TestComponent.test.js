
import React from 'react'
import { shallow, mount, configure } from 'enzyme'
import TestComponent from './TestComponent.js'
import Adapter from 'enzyme-adapter-react-16';
configure({adapter: new Adapter()});


describe('TestComponent component', () => {

  it('should render as expected', () => {
    const component = shallow(<TestComponent />)
	 	expect(component.exists()).toBe(true);
  })
})
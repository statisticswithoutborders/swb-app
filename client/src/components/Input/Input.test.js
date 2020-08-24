import React from 'react'
import { shallow, mount, configure } from 'enzyme'
import Input from './Input.js'
import Adapter from 'enzyme-adapter-react-16';
configure({adapter: new Adapter()});


describe('Input component', () => {

  it('should render as expected', () => {
    const component = shallow(<Input />)
	 	expect(component.exists()).toBe(true);
  })
})
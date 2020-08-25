import React from 'react'
import { shallow, mount, configure } from 'enzyme'
import IconArrow from './IconArrow.js'
import Adapter from 'enzyme-adapter-react-16';
configure({adapter: new Adapter()});


describe('IconArrow component', () => {

  it('should render as expected', () => {
    const component = shallow(<IconArrow />)
	 	expect(component.exists()).toBe(true);
  })
})
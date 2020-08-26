import React from 'react'
import { shallow, mount, configure } from 'enzyme'
import IconNumber from './IconNumber.js'
import Adapter from 'enzyme-adapter-react-16';
configure({adapter: new Adapter()});


describe('IconNumber component', () => {

  it('should render as expected', () => {
    const component = shallow(<IconNumber />)
	 	expect(component.exists()).toBe(true);
  })
})

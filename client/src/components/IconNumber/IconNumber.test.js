import React from 'react'
import { shallow, mount, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
configure({adapter: new Adapter()});
import IconNumber from './IconNumber.js'


describe('IconNumber component', () => {

  it('should render as expected', () => {
    const component = shallow(<IconNumber />)
	 	expect(component.exists()).toBe(true);
  })
})

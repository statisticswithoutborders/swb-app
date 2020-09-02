import React from 'react'
import { shallow, mount, configure } from 'enzyme'
import HamburgerMenu from './HamburgerMenu.js'
import Adapter from 'enzyme-adapter-react-16';
configure({adapter: new Adapter()});


describe('HamburgerMenu component', () => {

  it('should render as expected', () => {
    const component = shallow(<HamburgerMenu />)
	 	expect(component.exists()).toBe(true);
  })
})
import React from 'react'
import { shallow, mount, configure } from 'enzyme'
import navBar from './navBar.js'
import Adapter from 'enzyme-adapter-react-16';
configure({adapter: new Adapter()});


describe('navBar component', () => {

  it('should render as expected', () => {
    const component = shallow(<navBar />)
	 	expect(component.exists()).toBe(true);
  })
})
import React from 'react'
import { shallow, mount, configure } from 'enzyme'
import Home from './Home.js'
import Adapter from 'enzyme-adapter-react-16';
configure({adapter: new Adapter()});


describe('Home component', () => {

  it('should render as expected', () => {
    const component = shallow(<Home />)
	 	expect(component.exists()).toBe(true);
  })
})
import React from 'react'
import { shallow, mount, configure } from 'enzyme'
import IconLogin from './IconLogin.js'
import Adapter from 'enzyme-adapter-react-16';
configure({adapter: new Adapter()});


describe('IconLogin component', () => {

  it('should render as expected', () => {
    const component = shallow(<IconLogin />)
	 	expect(component.exists()).toBe(true);
  })
})
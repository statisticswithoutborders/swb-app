import React from 'react'
import { shallow, mount, configure } from 'enzyme'
import FormContact from './FormContact.js'
import Adapter from 'enzyme-adapter-react-16';
configure({adapter: new Adapter()});


describe('FormContact component', () => {

  it('should render as expected', () => {
    const component = shallow(<FormContact />)
	 	expect(component.exists()).toBe(true);
  })
})
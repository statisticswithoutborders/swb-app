import React from 'react'
import { shallow, mount, configure } from 'enzyme'
import Card from './Card.js'
import Adapter from 'enzyme-adapter-react-16';
configure({adapter: new Adapter()});


describe('Card component', () => {

  it('should render as expected', () => {
    const component = shallow(<Card />)
	 	expect(component.exists()).toBe(true);
  })
})
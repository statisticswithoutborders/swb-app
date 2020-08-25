import React from 'react'
import { shallow, mount, configure } from 'enzyme'
import IconImage from './IconImage.js'
import Adapter from 'enzyme-adapter-react-16';
configure({adapter: new Adapter()});


describe('IconImage component', () => {

  it('should render as expected', () => {
    const component = shallow(<IconImage />)
	 	expect(component.exists()).toBe(true);
  })
})
import React from 'react'
import { shallow, mount, configure } from 'enzyme'
import Video from './Video.js'
import Adapter from 'enzyme-adapter-react-16';
configure({adapter: new Adapter()});


describe('Video component', () => {

  it('should render as expected', () => {
    const component = shallow(<Video />)
	 	expect(component.exists()).toBe(true);
  })
})
import React from 'react'
import { shallow, mount, configure } from 'enzyme'
import ProjectImageGallery from './ProjectImageGallery.js'
import Adapter from 'enzyme-adapter-react-16';
configure({adapter: new Adapter()});


describe('ProjectImageGallery component', () => {

  it('should render as expected', () => {
    const component = shallow(<ProjectImageGallery />)
	 	expect(component.exists()).toBe(true);
  })
})
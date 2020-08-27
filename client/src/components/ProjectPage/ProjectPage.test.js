import React from 'react'
import { shallow, mount, configure } from 'enzyme'
import ProjectPage from './ProjectPage.js'
import Adapter from 'enzyme-adapter-react-16';
configure({adapter: new Adapter()});


describe('ProjectPage component', () => {

  it('should render as expected', () => {
    const component = shallow(<ProjectPage />)
	 	expect(component.exists()).toBe(true);
  })
})
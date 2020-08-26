import React from 'react'
import { shallow, mount, configure } from 'enzyme'
import ProjectCard from './ProjectCard.js'
import Adapter from 'enzyme-adapter-react-16';
configure({adapter: new Adapter()});


describe('ProjectCard component', () => {

  it('should render as expected', () => {
    const component = shallow(<ProjectCard />)
	 	expect(component.exists()).toBe(true);
  })
})
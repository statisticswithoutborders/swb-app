import React from 'react'
import { shallow, mount, configure } from 'enzyme'
import ProjectCard from './ProjectCard.js'
import Adapter from 'enzyme-adapter-react-16';
configure({adapter: new Adapter()});


describe('ProjectCard component', () => {

  it('should render as expected', () => {
    const wrapper = shallow(<ProjectCard />)
	 	expect(wrapper.exists()).toBe(true);
  })
})

describe('Elements Render', () => {

  it('Title renders as expected', () => {
    const wrapper = shallow(<ProjectCard />)
	 	expect(wrapper.find('.ProjectCard-title')).toHaveLength(1)
  })

  it('Image renders as expected', () => {
    const wrapper = shallow(<ProjectCard />)
	 	expect(wrapper.find('.ProjectCard-image')).toHaveLength(1)
  })

  it('button renders as expected', () => {
    const wrapper = shallow(<ProjectCard />)
	 	expect(wrapper.find('Button')).toHaveLength(1)
  })
})
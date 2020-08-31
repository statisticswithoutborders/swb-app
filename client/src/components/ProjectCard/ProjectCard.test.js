import React from 'react'
import { shallow, mount, configure } from 'enzyme'
import ProjectCard from './ProjectCard.js'
import Adapter from 'enzyme-adapter-react-16';
import { MemoryRouter} from 'react-router'
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

describe('ProjectCard props rendering', () => {
  let titleProp = "Asante Africa Foundation"
  let imageProp = "var(--home-asante)"

  const wrapper = shallow(<ProjectCard projectTitle={titleProp} image={imageProp} link="/" />)
  const imgElem = wrapper.find('.ProjectCard-image')
  
  it('image prop renders', () => {  
	 	expect(imgElem.prop('style')).toEqual(expect.objectContaining({backgroundImage: `${imageProp}`}));
  })
  
  it('Title prop renders', () => {  
	 	expect(wrapper.find('.ProjectCard-title').text()).toEqual(titleProp);
  })

})

describe('Description renders if prop present', () => {
  let titleProp = "Asante Africa Foundation"
  let imageProp = "var(--home-asante)"
  let descProp = "Use Monitoring & Evaluation to assess impact of work that empowers East African youth with programs in Girls' Advancement, Accelerated Classroom Learning, and Youth Leadership and Entrepreneurship"

  const wrapper = shallow(<ProjectCard projectTitle={titleProp} image={imageProp} projectDescription={descProp} link="/" />)

  const wrapper2 = shallow(<ProjectCard projectTitle={titleProp} image={imageProp} link="/" />)

  it('Description prop renders', () => {  
    expect(wrapper.find('.ProjectCard-description').text()).toEqual(descProp);
  })

  it('Description prop does not render', () => {
	 	expect(wrapper2.find('.ProjectCard-description').exists()).toBe(false)
  })

})
import React from 'react'
import { shallow, mount, configure } from 'enzyme'
import WhoWeAreCard from './WhoWeAreCard.js'
import Adapter from 'enzyme-adapter-react-16';
configure({adapter: new Adapter()});


describe('WhoWeAreCard component', () => {

  const wrapper = shallow(<WhoWeAreCard link='/' />)

  it('should render as expected', () => {
    
	 	expect(wrapper.exists()).toBe(true);
  })

})

describe('Contains All Component Elements', () =>{
  const wrapper = shallow(<WhoWeAreCard link='/' />)

  it('h2 renders as expected', () => {
    
	 	expect(wrapper.find('.WhoWeAreCard-title')).toHaveLength(1);
  })
  
  it('image renders as expected', () => {
    
	 	expect(wrapper.find('.WhoWeAreCard-image')).toHaveLength(1);
  })
  
  it('Button renders as expected', () => {
    
	 	expect(wrapper.find('Button').exists()).toBe(true);
  })

})

describe('Component Props Render Correctly', () =>{
  let label = "Our Team"
  let image = "var(--home-members)"
  let title = "Members"

  const wrapper = shallow(<WhoWeAreCard title={title} buttonLabel={label} image={image} link='/' />)

  it('Title prop renders', () => {
    
	 	expect(wrapper.find('.WhoWeAreCard-title').text()).toEqual(title)
  })
  
  it('image prop renders', () => {
    let style = wrapper.get(0).style
    expect(style).toHaveProperty('backgroundImage', image)
  })
  
  it('buttonLabel prop renders', () => {
    
    expect(wrapper.find('Button.label').text()).toEqual(title)
  })

})
import React from 'react'
import { shallow, mount, configure } from 'enzyme'
import WhoWeAreCard from './WhoWeAreCard.js'
import Adapter from 'enzyme-adapter-react-16';
import { MemoryRouter } from 'react-router';
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
  let buttonLabel = "Our Team"
  let image = "var(--home-members)"
  let title = "Members"

  const wrapper = shallow(<WhoWeAreCard title={title} buttonLabel={buttonLabel} image={image} link='/' />)

  it('Title prop renders', () => {
    
	 	expect(wrapper.find('.WhoWeAreCard-title').text()).toEqual(title)
  })
  
  it('image prop renders', () => {
    const wrapper = mount(<MemoryRouter>
      <WhoWeAreCard title={title} buttonLabel={buttonLabel} image={image} link='/' />
    </MemoryRouter>)
    const elem = wrapper.find('.WhoWeAreCard').childAt(1)
  expect(elem.prop('style')).toEqual({'backgroundImage': `${image}`})
  })
  
  it('buttonLabel prop renders', () => {
    const button = wrapper.find('Button')
    expect(button.prop('label')).toEqual(buttonLabel)
  })

})
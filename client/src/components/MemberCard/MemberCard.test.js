import React from 'react'
import { shallow, mount, configure } from 'enzyme'
import MemberCard from './MemberCard.js'
import Adapter from 'enzyme-adapter-react-16';
configure({adapter: new Adapter()});


describe('MemberCard component renders', () => {
  const wrapper = shallow(<MemberCard />)

  it('should render as expected', () => {
	 	expect(wrapper.exists()).toBe(true);
  })
})

describe('MemberCard elements render', () => {
  const wrapper = mount(<MemberCard />)

  it('image element renders', () => {
	 	expect(wrapper.find('.MemberCard-image')).toHaveLength(1)
  })

  it('name element renders', () => {
	 	expect(wrapper.find('.MemberCard-name')).toHaveLength(1)
  })

  it('position element renders', () => {
	 	expect(wrapper.find('.MemberCard-position')).toHaveLength(1)
  })

  it('line element renders', () => {
    expect(wrapper.find('.MemberCard-line')).toHaveLength(1)
 })

  it('about element renders', () => {
	 	expect(wrapper.find('.MemberCard-about')).toHaveLength(1)
  })

  it('IconDownArrow component renders', () => {
	 	expect(wrapper.find('IconDownArrow')).toHaveLength(1)
  })
})

describe('MemberCard elements receive props', () => {
  let imageProp = "var(--about-jean)"
  let nameProp = "Jean Opsomer"
  let posProp = "Chair"
  let aboutProp = "Jean Opsomer is Professor and Chair in the Department of Statistics at Colorado State University. His main areas of statistical expertise are survey statistics and nonparametric methods. He is delighted to be able to assist SWB as it continues to expand its operations and develops a more effective organizational structure."

  const wrapper = shallow(<MemberCard image={imageProp} name={nameProp} position={posProp} about={aboutProp} />)

  it('receives image prop', () => {
    const imgElem = wrapper.find('.MemberCard-image')
    expect(imgElem.prop('style')).toEqual(expect.objectContaining({backgroundImage: `${imageProp}`}));
  })

  it('receives name prop', () => {
    expect(wrapper.find('.MemberCard-name').text()).toEqual(nameProp)
  })

  it('receives position prop', () => {
    expect(wrapper.find('.MemberCard-position').text()).toEqual(posProp)
  })

  it('receives about prop', () => {
    expect(wrapper.find('.MemberCard-about').text()).toEqual(aboutProp)
  })
})


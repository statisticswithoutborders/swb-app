import React from 'react'
import { shallow, mount, configure } from 'enzyme'
import HowItWorks from './HowItWorks.js'
import Adapter from 'enzyme-adapter-react-16';
configure({adapter: new Adapter()});


describe('HowItWorks component renders', () => {

  it('should render as expected', () => {
    const wrapper = shallow(<HowItWorks />)
	 	expect(wrapper.exists()).toBe(true);
  })
})

describe('Component Images Render', () => {

  it('Step icons render', () => {
    const wrapper = shallow(<HowItWorks />)
	 	expect(wrapper.find('.HowItWorks-step-image')).toHaveLength(4);
  })

  it('Path image renders', () => {
    const wrapper = shallow(<HowItWorks />)
	 	expect(wrapper.find('.HowItWorks-path-image')).toHaveLength(1);
  })
})
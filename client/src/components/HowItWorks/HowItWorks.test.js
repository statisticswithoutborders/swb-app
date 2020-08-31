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

describe('Component Text Renders', () => {

  it('Title Components render', () => {
    const wrapper = shallow(<HowItWorks />)
	 	expect(wrapper.find('.HowItWorks-detail-title')).toHaveLength(4);
  })

  it('Title components contain text', () => {
    const wrapper = shallow(<HowItWorks />)
    wrapper.find('.HowItWorks-detail-title').forEach(node =>{
     expect(node.text()).toMatch(/ /);
    })
  })

  it('Detail Components render', () => {
    const wrapper = shallow(<HowItWorks />)
	 	expect(wrapper.find('.HowItWorks-detail-body')).toHaveLength(4);
  })

  it('Detail components contain text', () => {
    const wrapper = shallow(<HowItWorks />)
    wrapper.find('.HowItWorks-detail-body').forEach( node => {
     expect(node.text()).toMatch(new RegExp('volunteer'));
    })
  })
})
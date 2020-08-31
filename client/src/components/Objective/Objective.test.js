import React from 'react'
import { shallow, mount, configure } from 'enzyme'
import Objective from './Objective.js'
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });


describe('Objective component', () => {

  it('should render as expected', () => {
    const wrapper = shallow(<Objective />)
    expect(wrapper.exists()).toBe(true);
  })
})

describe('Component Elements render', () => {
  const wrapper = shallow(<Objective />)

  it('Year element renders', () => {  
    expect(wrapper.find('.year-objective')).toHaveLength(1)
  })

  it('Arrow element renders', () => {
    expect(wrapper.find('IconArrow')).toHaveLength(1)
  })

  it('Text element renders', () => {
    expect(wrapper.find('.text-objective')).toHaveLength(1)
  })
})

describe('Component Props passed successfully', () => {
  let yearProp = 2008
  let textProp = "It was the excitement around topic-contributed panel at the 2008 Joint Statistical Meetings in Denver, Colorado that sparked the conversation between Gary Shapiro and Fritz Scheuren, which eventually resulted in the formation of Statistics Without Borders (SWB) the same year."
  const wrapper = shallow(<Objective year={yearProp} text={textProp} />)

  it('Year element renders', () => {  
    expect(wrapper.find('.year-objective').text).toBeTruthy()
  })

  it('Text element renders', () => {
    expect(wrapper.find('.text-objective').text).toBeTruthy()
  })
})
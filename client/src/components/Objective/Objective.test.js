import React from 'react'
import { shallow, mount, configure } from 'enzyme'
import Objective from './Objective.js'
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });


describe('Objective component', () => {

  it('should render as expected', () => {
    const component = shallow(<Objective />)
    expect(component.exists()).toBe(true);
  })
})
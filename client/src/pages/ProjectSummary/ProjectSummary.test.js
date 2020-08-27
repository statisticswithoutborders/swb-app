import React from 'react'
import { shallow, mount, configure } from 'enzyme'
import ProjectSummary from './ProjectSummary.js'
import Adapter from 'enzyme-adapter-react-16';
configure({adapter: new Adapter()});


describe('ProjectSummary component', () => {

  it('should render as expected', () => {
    const component = shallow(<ProjectSummary />)
	 	expect(component.exists()).toBe(true);
  })
})
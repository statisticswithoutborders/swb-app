import React from 'react'
import { shallow, mount, configure } from 'enzyme'
import MemberCard from './MemberCard.js'
import Adapter from 'enzyme-adapter-react-16';
configure({adapter: new Adapter()});


describe('MemberCard component', () => {

  it('should render as expected', () => {
    const component = shallow(<MemberCard />)
	 	expect(component.exists()).toBe(true);
  })
})
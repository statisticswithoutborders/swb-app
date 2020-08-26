import React from 'react'
import { shallow, mount, configure } from 'enzyme'
import WhoWeAreCard from './WhoWeAreCard.js'
import Adapter from 'enzyme-adapter-react-16';
configure({adapter: new Adapter()});


describe('WhoWeAreCard component', () => {

  it('should render as expected', () => {
    const component = shallow(<WhoWeAreCard />)
	 	expect(component.exists()).toBe(true);
  })
})
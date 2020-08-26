import React from 'react'
import { shallow, mount, configure } from 'enzyme'
import BlogCard from './BlogCard.js'
import Adapter from 'enzyme-adapter-react-16';
configure({adapter: new Adapter()});


describe('BlogCard component', () => {

  it('should render as expected', () => {
    const component = shallow(<BlogCard />)
	 	expect(component.exists()).toBe(true);
  })
})
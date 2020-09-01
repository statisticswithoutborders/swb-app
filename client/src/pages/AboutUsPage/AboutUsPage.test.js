import React from 'react'
import { shallow, mount, configure } from 'enzyme'
import AboutUsPage from './AboutUsPage.js'
import Adapter from 'enzyme-adapter-react-16';
configure({adapter: new Adapter()});


describe('AboutUsPage component', () => {

  it('should render as expected', () => {
    const component = shallow(<AboutUsPage />)
	 	expect(component.exists()).toBe(true);
  })
})
import React from 'react'
import { shallow, mount, configure } from 'enzyme'
import OurServicesPage from './OurServicesPage.js'
import Adapter from 'enzyme-adapter-react-16';
configure({adapter: new Adapter()});


describe('OurServicesPage component', () => {

  it('should render as expected', () => {
    const component = shallow(<OurServicesPage />)
	 	expect(component.exists()).toBe(true);
  })
})
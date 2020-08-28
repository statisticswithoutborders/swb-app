import React from 'react'
import { shallow, mount, configure } from 'enzyme'
import VolunteersPage from './VolunteersPage.js'
import Adapter from 'enzyme-adapter-react-16';
configure({adapter: new Adapter()});


describe('VolunteersPage component', () => {

  it('should render as expected', () => {
    const component = shallow(<VolunteersPage />)
	 	expect(component.exists()).toBe(true);
  })
})
import React from 'react'
import { shallow, mount, configure } from 'enzyme'
import FundingFact from './FundingFact.js'
import Adapter from 'enzyme-adapter-react-16';
configure({adapter: new Adapter()});


describe('FundingFact component', () => {

  it('should render as expected', () => {
    const component = shallow(<FundingFact />)
	 	expect(component.exists()).toBe(true);
  })
})
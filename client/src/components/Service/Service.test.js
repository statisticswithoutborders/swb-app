import React from 'react'
import { shallow, mount, configure } from 'enzyme'
<<<<<<< HEAD:client/src/components/Service/Service.test.js
import Service from './Service.js'
=======
import FundingFact from './FundingFact.js'
>>>>>>> ed745d7500ec38357d97d54ab25efbfed001eec6:client/src/components/FundingFact/FundingFact.test.js
import Adapter from 'enzyme-adapter-react-16';
configure({adapter: new Adapter()});


<<<<<<< HEAD:client/src/components/Service/Service.test.js
describe('Service component', () => {

  it('should render as expected', () => {
    const component = shallow(<Service />)
=======
describe('FundingFact component', () => {

  it('should render as expected', () => {
    const component = shallow(<FundingFact />)
>>>>>>> ed745d7500ec38357d97d54ab25efbfed001eec6:client/src/components/FundingFact/FundingFact.test.js
	 	expect(component.exists()).toBe(true);
  })
})
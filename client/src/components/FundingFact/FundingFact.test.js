import React from 'react'
import { shallow, mount, configure } from 'enzyme'
<<<<<<< HEAD
<<<<<<< HEAD:client/src/components/IconNumber/IconNumber.test.js
import IconNumber from './IconNumber.js'
=======
<<<<<<< HEAD:client/src/components/Service/Service.test.js
import Service from './Service.js'
>>>>>>> 680132c8968bc10c74a7e74aa5f5ff77b271d0bb
=======
import FundingFact from './FundingFact.js'
>>>>>>> ed745d7500ec38357d97d54ab25efbfed001eec6:client/src/components/FundingFact/FundingFact.test.js
import Adapter from 'enzyme-adapter-react-16';
configure({adapter: new Adapter()});


<<<<<<< HEAD
<<<<<<< HEAD:client/src/components/IconNumber/IconNumber.test.js
describe('IconNumber component', () => {

  it('should render as expected', () => {
    const component = shallow(<IconNumber />)
=======
<<<<<<< HEAD:client/src/components/Service/Service.test.js
describe('Service component', () => {

  it('should render as expected', () => {
    const component = shallow(<Service />)
>>>>>>> 680132c8968bc10c74a7e74aa5f5ff77b271d0bb
=======
describe('FundingFact component', () => {

  it('should render as expected', () => {
    const component = shallow(<FundingFact />)
>>>>>>> ed745d7500ec38357d97d54ab25efbfed001eec6:client/src/components/FundingFact/FundingFact.test.js
	 	expect(component.exists()).toBe(true);
  })
})
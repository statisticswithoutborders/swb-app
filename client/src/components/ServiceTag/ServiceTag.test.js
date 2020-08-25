import React from 'react'
import { shallow, mount, configure } from 'enzyme'
<<<<<<< HEAD:client/src/components/Video/Video.test.js
import Video from './Video.js'
=======
import FundingFact from './FundingFact.js'
>>>>>>> 680132c8968bc10c74a7e74aa5f5ff77b271d0bb:client/src/components/ServiceTag/ServiceTag.test.js
import Adapter from 'enzyme-adapter-react-16';
configure({adapter: new Adapter()});


<<<<<<< HEAD:client/src/components/Video/Video.test.js
describe('Video component', () => {

  it('should render as expected', () => {
    const component = shallow(<Video />)
=======
describe('FundingFact component', () => {

  it('should render as expected', () => {
    const component = shallow(<FundingFact />)
>>>>>>> 680132c8968bc10c74a7e74aa5f5ff77b271d0bb:client/src/components/ServiceTag/ServiceTag.test.js
	 	expect(component.exists()).toBe(true);
  })
})
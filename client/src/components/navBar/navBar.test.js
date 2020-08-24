import React from 'react'
import { shallow, mount, configure } from 'enzyme'
<<<<<<< HEAD:client/src/components/navBar/navBar.test.js
import navBar from './navBar.js'
=======
import Input from './Input.js'
>>>>>>> 680132c8968bc10c74a7e74aa5f5ff77b271d0bb:client/src/components/Input/Input.test.js
import Adapter from 'enzyme-adapter-react-16';
configure({adapter: new Adapter()});


<<<<<<< HEAD:client/src/components/navBar/navBar.test.js
describe('navBar component', () => {

  it('should render as expected', () => {
    const component = shallow(<navBar />)
=======
describe('Input component', () => {

  it('should render as expected', () => {
    const component = shallow(<Input />)
>>>>>>> 680132c8968bc10c74a7e74aa5f5ff77b271d0bb:client/src/components/Input/Input.test.js
	 	expect(component.exists()).toBe(true);
  })
})
import React from 'react'
import { shallow, mount, configure } from 'enzyme'
import ProjectImageGalleryAsante from './ProjectImageGalleryAsante.js'
import Adapter from 'enzyme-adapter-react-16';
configure({adapter: new Adapter()});


describe('ProjectImageGallery component', () => {

  it('should render as expected', () => {
    const wrapper = shallow(<ProjectImageGalleryAsante />)
	 	expect(wrapper.exists()).toBe(true);
  })
})

describe('Test Image clicks', () => {

  it('should render as expected', () => {
    const wrapper = shallow(<ProjectImageGalleryAsante />)
     wrapper.find('.gBTwo').simulate('click', {
       preventDefault: () => {}
     
     });
     expect(wrapper.find('.asanteOne')).toHaveLength(1)
     expect(wrapper.find('.asanteTwo')).toHaveLength(0)
     expect(wrapper.find('.asanteThree')).toHaveLength(0)
  })
})
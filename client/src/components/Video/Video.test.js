import React from 'react'
import { shallow, mount, configure } from 'enzyme'
import Video from './Video.js'
import Adapter from 'enzyme-adapter-react-16';
import ReactPlayer from 'react-player';
configure({adapter: new Adapter()});


describe('Video component', () => {

  it('should render as expected', () => {
    const component = shallow(<Video />)
	 	expect(component.exists()).toBe(true);
  })

  it("should render <ReactPlayer> element", () => {
    const wrapper = shallow(<Video />);
    expect(wrapper.find("ReactPlayer")).toHaveLength(1);
  });
  
})
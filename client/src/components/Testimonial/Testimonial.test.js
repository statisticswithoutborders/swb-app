import React from 'react'
import { shallow, mount, configure } from 'enzyme'
import Testimonial from './Testimonial.js'
import Adapter from 'enzyme-adapter-react-16';
configure({adapter: new Adapter()});


describe('Testimonial component', () => {

  it('should render as expected', () => {
    const component = shallow(<Testimonial />)
	 	expect(component.exists()).toBe(true);
  })

  it("should render <div> element", () => {
    const wrapper = shallow(<div />);
    expect(wrapper.find("div")).toHaveLength(1);
  });

  it("should render <p> element", () => {
    const wrapper = shallow(<p />);
    expect(wrapper.find("p")).toHaveLength(1);
  });


  it("should render description", () => {
    const description_text = 'Being an SWB volunteer is probably one of the best things I did. The experience helped me change my career track.';
    const wrapper = shallow(<Testimonial description={description_text} />);
    console.log(wrapper.find('p').text());
    expect(wrapper.find('p').text()).toBe('Being an SWB volunteer is probably one of the best things I did. The experience helped me change my career track.');
  });  
})
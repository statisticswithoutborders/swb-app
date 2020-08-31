import React from 'react'
import { shallow, mount, configure } from 'enzyme'
import IconImage from './IconImage.js'
import Adapter from 'enzyme-adapter-react-16';
configure({adapter: new Adapter()});

let imageProp = "var(--logo-facebook)"
let heightProp = "50px"

describe('IconImage component', () => {

  it('should render as expected', () => {
    const wrapper = shallow(<IconImage />)
	 	expect(wrapper.exists()).toBe(true);
  })
})

describe('Icon props rendering', () => {
  const wrapper = shallow(<IconImage image={imageProp} height={heightProp} />)
  const imgElem = wrapper.find('.IconImage-image')
  
  it('image prop renders', () => {  
	 	expect(imgElem.prop('style')).toEqual(expect.objectContaining({backgroundImage: `${imageProp}`}));
  })
  
  it('height prop renders', () => {  
	 	expect(imgElem.prop('style')).toEqual(expect.objectContaining({height: `${heightProp}`}));
  })

  it('width renders with height prop', () => {  
    expect(imgElem.prop('style')).toEqual(expect.objectContaining({width: `${heightProp}`}));
 })
})
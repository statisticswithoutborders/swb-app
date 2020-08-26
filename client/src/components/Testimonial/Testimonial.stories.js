import React from 'react';
import { storiesOf } from '@storybook/react';

import Testimonial from './Testimonial';
import '../../index.css'
import './Testimonial.css'

let content = 'Being an SWB volunteer is probably one of the best things I did. The experience helped me change my career track. Volunteering for SWB gave me experience that helped me move into the area of global health. I had the opportunity to learn from an expert(Gary Shapiro) about conducting surveys in a resource-poor country. We produced 6 publications and presentations and I wrote a chapter on Developing Leadership Skills through Volunteering for the book "Leadership and Women in statistics."'

let content2 = "Statistics Without Borders is an incredible way to give back to others. To be able to leverage the knowledge you've gained is an immensely rewarding experience. That being said, it is a commitment! We're using a huge network of volunteers to work with organizations around the world. It's important to be responsive and to communicate well with others, because we all rely on each other. If you're eager to get your hands into some volunteer work, SWB is a great place to look!"


storiesOf('Testimonial', module)
    .add('Testimonial', () =>{
      return <Testimonial description ={content} name="Eugene" 
      imgSrc="var(--home-india)" imgPostion="right"/>
    }
)

storiesOf('Testimonial', module)
    .add('Testimonial2', () =>{
      return <Testimonial description ={content2} name="Ester" 
      imgSrc="var(--home-yoel)" imgPostion="left"/>
    }
)
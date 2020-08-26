import React from 'react';
import { storiesOf } from '@storybook/react';
import './BlogCard.css'
import BlogCard from './BlogCard.js';
import "../../index.css"


storiesOf('BlogCard', module)
    .add('BlogCard1', () =>{
      return <BlogCard BlogCard title="Title: Blog Post 1" date="Date: May 20, 2020" hr label="Officia quis cupidatat sunt nostrud pariatur. Lorem laborum do dolore amet mollit velit est duis minim ipsum dolore officia adipisicing. Cillum culpa est ut ad adipisicing. Nostrud tempor et voluptate mollit duis deserunt minim ea exercitation minim mollit duis sunt."/>
    }
)
.add('BlogCard2', () =>{
  return <BlogCard BlogCard title="Title: Blog Post 2" date="Date: March 9, 2020" hr label="Sint elit commodo ea eu. Exercitation commodo qui quis ex. Cupidatat ullamco incididunt laboris velit commodo officia dolore magna eiusmod qui duis incididunt qui. Est aliquip non deserunt excepteur elit sit et adipisicing reprehenderit deserunt esse exercitation."/>
}
)
   .add('BlogCard3', () =>{
  return <BlogCard BlogCard title="Title: Blog Post 3" date="Date: February 23, 2020" hr label=""/>
}
)
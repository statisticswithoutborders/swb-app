import React from 'react';
import { storiesOf } from '@storybook/react';
import './BlogCard.css'
import BlogCard from './BlogCard.js';
import "../../index.css"


storiesOf('BlogCard', module)
    .add('BlogCard', () =>{
      return <BlogCard blog-card title="Title: Blog Post 1" date="Date: May 20, 2020" hr label="Officia quis cupidatat sunt nostrud pariatur. Lorem laborum do dolore amet mollit velit est duis minim ipsum dolore officia adipisicing. Cillum culpa est ut ad adipisicing. Nostrud tempor et voluptate mollit duis deserunt minim ea exercitation minim mollit duis sunt."/>
    }
)
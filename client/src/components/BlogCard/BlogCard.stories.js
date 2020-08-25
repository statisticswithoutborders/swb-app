import React from 'react';
import { storiesOf } from '@storybook/react';
import BlogCard from './BlogCard.css'
import BlogCard from './BlogCard.js';
import "../../index.css"


storiesOf('BlogCard', module)
    .add('BlogCard', () =>{
      return <BlogCard />
    }
)
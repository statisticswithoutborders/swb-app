import React from 'react';
import { storiesOf } from '@storybook/react';

import Testimonial from './Testimonial';
import '../../index.css'

storiesOf('Testimonial', module)
    .add('Testimonial', () =>{
      return <Testimonial />
    }
)
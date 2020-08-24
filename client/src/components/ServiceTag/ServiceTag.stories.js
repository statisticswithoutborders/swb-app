import React from 'react';
import { storiesOf } from '@storybook/react';

import ServiceTag from './ServiceTag';


storiesOf('ServiceTag', module)
    .add('ServiceTag', () =>{
      return <ServiceTag />
    }
)
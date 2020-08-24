import React from 'react';
import { storiesOf } from '@storybook/react';

import Service from './Service';


storiesOf('Service', module)
    .add('Service', () =>{
      return <Service />
    }
)
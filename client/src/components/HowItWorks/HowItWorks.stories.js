import React from 'react';
import { storiesOf } from '@storybook/react';

import HowItWorks from './HowItWorks';


storiesOf('HowItWorks', module)
    .add('HowItWorks', () =>{
      return <HowItWorks />
    }
)
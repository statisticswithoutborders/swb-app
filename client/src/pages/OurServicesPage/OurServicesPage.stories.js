import React from 'react';
import { storiesOf } from '@storybook/react';

import OurServicesPage from './OurServicesPage';


storiesOf('OurServicesPage', module)
    .add('OurServicesPage', () =>{
      return <OurServicesPage />
    }
)
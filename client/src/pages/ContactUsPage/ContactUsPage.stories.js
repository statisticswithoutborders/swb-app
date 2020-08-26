import React from 'react';
import { storiesOf } from '@storybook/react';

import ContactUsPage from './ContactUsPage';


storiesOf('ContactUsPage', module)
    .add('ContactUsPage', () =>{
      return <ContactUsPage />
    }
)
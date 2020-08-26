import React from 'react';
import { storiesOf } from '@storybook/react';
import StoryRouter from 'storybook-react-router'
import ContactUsPage from './ContactUsPage';


storiesOf('ContactUsPage', module)
    .addDecorator(StoryRouter())
    .add('ContactUsPage', () =>{
      return <ContactUsPage />
    }
)
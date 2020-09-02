import React from 'react';
import { storiesOf } from '@storybook/react';
import StoryRouter from 'storybook-react-router'
import HamburgerMenu from './HamburgerMenu';


storiesOf('HamburgerMenu', module)
  .addDecorator(StoryRouter())
    .add('HamburgerMenu', () =>{
      return <HamburgerMenu />
    }
)
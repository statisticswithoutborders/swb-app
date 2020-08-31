import React from 'react';
import { storiesOf } from '@storybook/react';
import StoryRouter from "storybook-react-router";
import Home from './Home';


storiesOf('Home', module)
  .addDecorator(StoryRouter())
    .add('Home', () => {  return <Home /> })
import React from 'react';
import { storiesOf } from '@storybook/react';
import StoryRouter from "storybook-react-router";
import ProjectSummary from './ProjectSummary';


storiesOf('ProjectSummary', module)
  .addDecorator(StoryRouter())
    .add('ProjectSummary', () =>{
      return <ProjectSummary />
    }
)
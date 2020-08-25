import React from 'react';
import { storiesOf } from '@storybook/react';

import ProjectCard from './ProjectCard';


storiesOf('ProjectCard', module)
    .add('ProjectCard', () =>{
      return <ProjectCard />
    }
)
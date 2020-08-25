import React from 'react';
import { storiesOf } from '@storybook/react';

import ProjectCard from './ProjectCard';


storiesOf('ProjectCard', module)
    .add('Without Project Details', () =>{
      return <ProjectCard projectTitle="Asante Africa Foundation" 
                          image="var(--home-asante)" 
              />
    })

    .add('With Project Details', () =>{
      return <ProjectCard projectTitle="Asante Africa Foundation" 
                          image="var(--home-asante)" 
                          projectDescription="Use Monitoring & Evaluation to assess impact of work that empowers East African youth with programs in Girls' Advancement, Accelerated Classroom Learning, and Youth Leadership and Entrepreneurship"
              />
    }
)
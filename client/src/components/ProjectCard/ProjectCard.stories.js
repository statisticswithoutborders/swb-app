import React from 'react';
import { storiesOf } from '@storybook/react';
import StoryRouter from 'storybook-react-router'
import ProjectCard from './ProjectCard';


storiesOf('ProjectCard', module)
    .addDecorator(StoryRouter())
    .add('Without Project Details', () =>{
      return <div style={{width: "350px"}}>
      <ProjectCard projectTitle="Asante Africa Foundation" 
                    image="var(--home-asante)" 
                    link="/"
              />
            </div>
    })

    .add('With Project Details', () =>{
      return <div style={{width: "350px"}}>
      <ProjectCard projectTitle="Asante Africa Foundation" 
                    image="var(--home-asante)" 
                    projectDescription="Use Monitoring & Evaluation to assess impact of work that empowers East African youth with programs in Girls' Advancement, Accelerated Classroom Learning, and Youth Leadership and Entrepreneurship"
                    link="/"

              />
            </div>
    }
)
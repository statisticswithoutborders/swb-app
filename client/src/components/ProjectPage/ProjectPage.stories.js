import React from 'react';
import { storiesOf } from '@storybook/react';
import "../../index.css";
import ProjectPage from './ProjectPage';


storiesOf('ProjectPage', module)
    .add('ProjectPageOne', () =>{
      return <ProjectPage projectTitle="Save the Children - Ethiopia" projectPageImage={'var(--project1-asante)'}/>
    }
)
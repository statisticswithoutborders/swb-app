import React from 'react';
import { storiesOf } from '@storybook/react';
import "../../index.css"
import Objective from './Objective';


storiesOf('Objective', module)
  .add('Objective', () => {
    return <Objective year="2008" text="It was the excitement around topic-contributed
     panel at the 2008 Joint Statistical Meetings in Denver, Colorado that sparked the
     conversation between Gary Shapiro and Fritz Scheuren, which eventually resulted in the
     formation of Statistics Without Borders (SWB) the same year." />
  }
  )
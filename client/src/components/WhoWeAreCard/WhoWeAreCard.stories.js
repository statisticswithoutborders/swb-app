import React from 'react';
import { storiesOf } from '@storybook/react';
import StoryRouter from 'storybook-react-router'
import WhoWeAreCard from './WhoWeAreCard';


storiesOf('WhoWeAreCard', module)
    .addDecorator(StoryRouter())
    .add('Members', () =>{
      return <WhoWeAreCard title="Members" buttonLabel="Our Team" image="var(--home-members)" link="/" />
    })

    .add('Volunteers', () =>{
      return <WhoWeAreCard title="Volunteers" buttonLabel="Join Us" image="var(--home-volunteers)" link="/" />
    })

    .add('Clients', () =>{
      return <WhoWeAreCard title="Clients" buttonLabel="Work With Us" image="var(--home-clients)" link="/" />
    })
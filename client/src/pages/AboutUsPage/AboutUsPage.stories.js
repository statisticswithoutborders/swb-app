import React from 'react';
import { storiesOf } from '@storybook/react';
import "../../index.css"
import AboutUsPage from './AboutUsPage';


storiesOf('AboutUsPage', module)
  .add('AboutUsPage', () => {
    return <AboutUsPage />
  }
  )
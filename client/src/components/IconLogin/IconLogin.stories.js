import React from 'react';
import { storiesOf } from '@storybook/react';
import "../../index.css"
import IconLogin from './IconLogin';



storiesOf('IconLogin', module)
  .add('IconLogin', () => {
    return <IconLogin image="var(--nav-user-login)" />
  }
  )
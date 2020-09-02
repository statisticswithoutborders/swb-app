import React from 'react';
import { storiesOf } from '@storybook/react';

import HamburgerMenu from './HamburgerMenu';


storiesOf('HamburgerMenu', module)
    .add('HamburgerMenu', () =>{
      return <HamburgerMenu />
    }
)
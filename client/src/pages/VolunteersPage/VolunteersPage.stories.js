import React from 'react';
import { storiesOf } from '@storybook/react';

import VolunteersPage from './VolunteersPage';


storiesOf('VolunteersPage', module)
    .add('VolunteersPage', () =>{
      return <VolunteersPage />
    }
)
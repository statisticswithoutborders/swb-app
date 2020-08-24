import React from 'react';
import { storiesOf } from '@storybook/react';

import Video from './Video';


storiesOf('Video', module)
    .add('Video', () =>{
      return <Video />
    }
)
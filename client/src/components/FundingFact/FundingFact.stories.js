import React from 'react';
import { storiesOf } from '@storybook/react';

import FundingFact from './FundingFact';


storiesOf('FundingFact', module)
    .add('FundingFact', () =>{
      return <FundingFact />
    }
)
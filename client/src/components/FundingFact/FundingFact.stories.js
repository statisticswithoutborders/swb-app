import React from 'react';
import { storiesOf } from '@storybook/react';
import '../../index.css'
import FundingFact from './FundingFact';

let leftDescription = "All donations are used 100% for SWB projects and are never used for payments or reimbursements."
let rightDescription = "SWB does not accept payments or remunerations of any kind."

storiesOf('FundingFact', module)
    .add('Image Left', () =>{
      return <FundingFact image="var(--about-donate)" description={leftDescription} />
    })
    .add('Image Right', () =>{
      return <FundingFact image="var(--about-give-heart)" description={rightDescription} imgPositionRight />
    }
)
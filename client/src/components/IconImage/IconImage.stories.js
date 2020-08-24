import React from 'react';
import { storiesOf } from '@storybook/react';
import "../../index.css"
import IconImage from './IconImage';


storiesOf('IconImage', module)
  .add('IconFacebook', () => <IconImage image="var(--logo-facebook)" url="https://www.facebook.com/statisticswithoutborders/" />)
  .add('IconLinkedIn', () => <IconImage image="var(--logo-linkedin)" url="https://www.linkedin.com/company/statistics-without-border" />)
  .add('IconTwitter', () => <IconImage image="var(--logo-twitter)" url="https://twitter.com/swbprobono" />)
  .add('IconYoutube', () => <IconImage image="var(--logo-youtube)" url="" />)
  .add('IconEmail', () => <IconImage image="var(--logo-email)" url="" />)
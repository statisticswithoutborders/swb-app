import React from 'react';
import { storiesOf } from '@storybook/react';
// import "../../index.css"
import "./IconNumber.js"
import './IconNumber.css';


storiesOf('IconNumber', module)
    .add('IconNumber', () =>{
      return <IconNumber  />
    }
)
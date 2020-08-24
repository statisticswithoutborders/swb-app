import React from 'react';
import { storiesOf } from '@storybook/react';
// import "../../index.css"
import IconNumber from "./IconNumber.js" 
import './IconNumber.css';


storiesOf('IconNumber', module)
    .add('IconNumber', () =>{
      return <IconNumber  label="1"/>
    }
)
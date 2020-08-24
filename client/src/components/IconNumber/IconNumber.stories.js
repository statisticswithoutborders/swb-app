import React from 'react';
import { storiesOf } from '@storybook/react';
import "../../index.css"
import IconNumber from "./IconNumber.js" 
import './IconNumber.css';


// let numberLabel = props.label

storiesOf('IconNumber', module)
    .add('IconNumber', () =>{
      return <IconNumber type="digit" IconNumber box label="01"/>
    }
)
import React from 'react';
import { storiesOf } from '@storybook/react';
import "../../index.css"
import IconNumber from "./IconNumber.js" 
import './IconNumber.css';


storiesOf('IconNumber', module)
    .add('IconNumber', () =>{
      return <IconNumber type="digit" icon-number box label="01"/>
    }
)



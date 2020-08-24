<<<<<<< HEAD
import React from "react";
import { storiesOf } from "@storybook/react";
import Input from "./Input";
import "./Input.css";
// import "../../index.css";

storiesOf("Input", module).add("Input", () => (
  <Input type="regular" placeholder="Name" />
));
storiesOf("Input", module).add("Input", () => (
  <Input type="large" placeholder="Name" />
));
=======
import React from 'react';
import { storiesOf } from '@storybook/react';

import Input from './Input';


storiesOf('Input', module)
    .add('Input', () =>{
      return <Input />
    }
)
>>>>>>> ed745d7500ec38357d97d54ab25efbfed001eec6

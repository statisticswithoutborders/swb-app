import React from "react";
import { storiesOf } from "@storybook/react";
import Button from "./Button";


storiesOf("Button", module)
.add('Primary', () => <Button type = 'primary' small label="READ MORE" />)
.add('Primary Medium', () => <Button type = 'primary' medium label="LEARN MORE" />)

.add('Primary Large', () => <Button type = 'primary' large label="LEARN MORE" />)





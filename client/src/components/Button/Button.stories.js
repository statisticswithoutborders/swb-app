import React from "react";
import { storiesOf } from "@storybook/react";
import Button from "./Button";


storiesOf("Button", module)
.add('Primary', () => <Button type = 'primary' small callback label="READ MORE" />)
.add('Primary Medium', () => <Button type = 'primary' medium  callback label="LEARN MORE" />)

.add('Primary Large', () => <Button type = 'primary' large callback label="LEARN MORE" />)

.add('Primary Wide', () => <Button type = 'primary' wide callback label = "LEARN MORE ABOUT OUR SERVICES"/>)





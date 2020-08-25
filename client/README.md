# Statistics Without Borders App
This app is built using Django (backend), and React (frontend). 

## How to Use Hygen Templates

### Install Hygen

Run the following command to install Hygen globally:
```
$ npm i -g hygen
```
### Create components with Hygen

Creating a component is done from the command line using a 'generator'. There are four generators in hygen that will create components for this project.

* functionalComponent - Creates a functional component and adds it to the src/components directory
* classComponent - Creates a class component and adds it to the src/components directory
* functionalComponentPage - Creates a functional page component and adds it to the src/pages directory
* classComponentPage - Creates a class component and adds it to the src/pages directory

To create a new component, __cd into the **client** directory__ and enter the following command in your terminal:
```
$ hygen generatorName new componentName
```
### What Just Happened?

* The generator created a new directory in either the src/components or src/pages directory.
* Inside this new directory are four files:
    * componentName.js - The main component file.
    * css.js - The css that will correspond to the Component. It comes preloaded with one css class of the same name as the component.
    * stories.js - Storybook file for the component.
    * test.js - Test file for the component. 

Now you've got everything you need to create components. Happy coding!

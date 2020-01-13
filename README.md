# React Scaffolding
Tired of duplicating that old base component for creating a new one? React Scaffolding helps you to Scaffold various types of React Components quickly

Just run

```bash
npx react-scaffolding --name=yourComponentName --template=[function|class|pure]
```

Or

### Install
```
npm install -g react-scaffolding
```

With React Scaffolding you can create the following types of React Components:

- Function
- Class extending PureComponent
- Class extending Component

### Example
```bash
$ react-scaffolding --name=my-component --path=my-folder --template=function --css my-stylesheet
```

Will create a folder named **my-folder** with the following files:

*my-component.js*
```jsx harmony
import React from 'react';
import './mycomponent.css';

const MyComponent = (props) => (
  <div></div>
);

export default MyComponent;
```

*my-stylesheet.css*

```css
.my-component { }
```

### Options

--name: string (required)
Your component name

--path: string (optional)
The path where the component will be placed.

--template: class (default) | function | pureComponent (optional)
The template that will be used for create your component

--templatePath: string (optional)
The path where to read the templates files from.

--css: \<no value\> (optional)
Allows the creation of a default css file. If no filename is passed,
then the same name as the --name option will be used.

--css: my_css_filename (optional)
Allows the creation of a default css file with a given name.

### Making changes and testing
1. Clone the repository `git clone https://github.com/gabrielbs/react-scaffolding.git`
2. Install the dependencies `npm install`
3. Implement your changes
4. Create a link on your machine to your repository changes `npm link`
5. Create a new directory where you will test the changes or go to the project directory where you want to use the tool
6. Import the linked repository `npm link react-scaffolding`
7. Use the module via it's command `react-scaffolding --help`

## License
[MIT](http://opensource.org/licenses/MIT) ©

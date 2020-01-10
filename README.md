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

--template: class (default) | function | pureComponent (optional)
The template that will be used for create your component

--templatePath: string (optional)
The path where to read the templates files from.

--path: string (optional)
The path that the component will be placed.

--css: \<no value\> (optional)
Allows the creation of a default css file. If no filename is passed,
then the same name as the --name option will be used.

--css: my_css_filename (optional)
Allows the creation of a default css file with a given name.

## License
[MIT](http://opensource.org/licenses/MIT) ©

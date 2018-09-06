# React Scaffolding
Tired of duplicating that old base component for creating a new one? React Scaffolding helps you to Scaffold various types of React Components quickly

Just run

```bash
npx react-scaffolding --name=teste --option=function
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
$ react-scaffolding --name=my-component --option=function
```

Will create a folder named **my-component** with the following files:

*my-component.js*
```javascript
import React from 'react'
import './mycomponent.css'

const MyComponent = (props) => (
  <div></div>
)

export default MyComponent
```

*my-component.css*

```css
.my-component { }
```

### Options

--name: string (required)
Your component name

--option: function | class | pureComponent (required)
The template that will be used for create your component

--path: string (optional)
The path that  the component will be placed.

## License
[MIT](http://opensource.org/licenses/MIT) ©

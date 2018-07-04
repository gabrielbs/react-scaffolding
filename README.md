# React Scaffolding
Create React components without a thousands of CTRL+C & CTRL+V

### Install
```
npm install -g react-scaffolding
```

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

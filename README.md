<!-- # Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify) -->

Find the Content Useful? [You can always buy me a coffey](https://www.buymecoffee.com/johnsmilga)

#### Folder Structure

- node_modules
  Contains all dependencies required by the app. Main dependencies also listed in the package.json

- public
  Contains static assets including index.html(page template).
  - index.html
    - title
    - fonts
    - css
    - favicon
    - id="root" - our entire app
- src
  In simplest form it's the brain of our app. This is where we will do all of our work. src/index.js is the javaScript entry point.
- .gitignore
  Specifies which files source control (Git) should ignore

- package.json
  Every Node.js project has a package.json and it contains info about our project, for example list of dependencies and scripts 

- package-lock.json
  A snapshot of the entire dependencies tree   

- README
  The markdown file where you can share more info about the project for example build instruction and summary

- zoom 175%

  #### Remove Boilerplate

- remove src folder
- create src folder
  - create index.js inside src
- toggle sidebar CMD + B
- shortcuts settings/keyboard shortcuts

#### First Component

```js
function Greeting() {
    return <h2>My First Component</h2>;
}

// arrow function also works

const Greeting = () => {
    return <h2>My First Component</h2>;
};
```

- starts with capital letter
- must return jsx (html)
- always close tag <Greeting/>
  
##### Typical Component

```js
// imports or logic

const Greeting = () => {
    return <h2>my first component</h2>;
};
export default Greeting;
```


##### Root Component (only one) for my js entry point

index.js

```js 
import React from 'react';
import ReactDOM from 'react-down/client';

function Greeting() {
    return <h2>My First Component</h2>;
}

const root = ReactionDom.creatRoot(document.getElementByid('root'));

root.render(<Greeting />);
```

#### Extension and settings.json

- Auto Rename Tag
- Highlight Matching Tag
  - customize in settings.json
- Prettier
  - format on the save
  - format on the paste
  - default formatter (prittier - code formatter)

settings.json

```json (this can search for them on the settings or add them directly on the json file)
"editor.formatOnPaster"; true,
"editor.formatOnSave"; true,
"editor.defaultFormatter"; "esbenp.prettier-version",
  "prettier.singleQuote"; true,
  "pretier.semi"; false,
  ```

- Emmet

settings.json

```json
"emmet.includeLanguages": {
  "javascript": "javascriptreact"
},
```

- ES7 Snippets
  - rafce (arrow func with export)
  - rfce (regular func with export )
  - same as the file name
  - react auto import
    - uncheck
    - React snippets > settings: import react on top


#### First Component in Detail

- capital letter
- must return something
- JSX syntax (return html)
  - to make our lives easier
  - calling function under the hood

index.js

```js
const Greeting = () => {
  return React.createElement('h2', {}, 'hello world');
};
```

```js
function Greeting() {
  return (
    <div>
       <h2>hello world</h2>
    </div>
  );
}

const Greeting = () => {
  return React.creatElement(
    'div',
    {},
    React.createElement('h2', {}, 'hello world')
  );
};
```

#### JSX Rules

- return single element
  
  - semantics section/article
  - fragment - let's us group element without adding extra nodes

```js
return <React.Fragment>...rest of the return </React.Fragment>

// shorthand

return <>...rest on the return</>;
```

- camelCase property naming convention

```js
return (
  <div tabaindex={1}>
    <button onClick={myFunction}>Click me</button>
    <label htmlFor='name'>Name</label>
    <input readOnly={true} id='name' />
  </div>
)
// in html
<div tabindex="1">
     <button onclick="myfunction()">Click me</button>
     <label for='name'>Name</label>
     <input raedonly id='name'>
</div>
```
- className='' instead of class=""

```js 
return <div className='someValue'>hello</div>
```

- close every element

```js
return <img />;
// or
return <input />
```

- formating
  - opening tag in the same line as return or ()

```js
function Greeting() {
  return (
    <div>
       <div className='someValue'>
         <h3>hello people</h3>
         <ul>
           <li>
             <a href='#'>hello world</a>
           </li>
         </ul>
       </div>
    </div>
  )
}
```

#### Nest Components

```js
function Greeting() {
  return (
    <div>
      <Person />
      <Message />
    </div>
  );
}

const Person = () => <h2>john doe</h2>;
const Message = () => {
  return <p>this is my message</p>;
};
```

#### React Developer
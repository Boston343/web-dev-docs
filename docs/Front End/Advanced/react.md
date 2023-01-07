---
sidebar_position: 1
---

# React

**[React](https://reactjs.org/)** is a popular JavaScript library for building user interfaces.

It is the "most loved and popular front-end framework". It breaks down everything into component trees.

Ex.

    App -> Nav Bar / ToDoList

    ToDoList -> ListItem

    ListItem -> Checkbox / ItemText

It's kind of like creating your own HTML elements (component), so it's really easy to view and has good modularity.

## VSCode Setup

Follow **[this](https://github.com/facebook/create-react-app)** for first time setup.

1. First time, install React with `npm i react`.
2. Open your terminal (I use [Hyper](https://hyper.is/) configured for [git bash](https://gist.github.com/coco-napky/404220405435b3d0373e37ec43e54a23)) in the folder which you want to create your project folder.
3. Run `npx create-react-app [name-of-your-new-app-folder]`

## Commands

`npm start` starts the dev server.

`npm run build` bundles the app into static files for production.

`npm test` starts the test runner.

`npm run eject` removes this tool and copies build dependencies, configuration files, and scripts into the app directory. If you do this, you can't go back!

## Console Logging

In react apps, when you use `console.log("thingToLog");` it will log to the browser console, not the VSCode console.

## React Basics

### Rendering

React places JS and HTML on webpage using a `render` function.

This function can only render one HTML object, so just wrap everything in a `<div>`.

### JS in HTML in JS

**We need to go deeper!**

Wrap expressions (including vars) in curly braces like `{var}`

```js
import React from "react";
import ReactDOM from "react-dom/client";
const name = "Reap3r";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<h1>Hello {name}!</h1>);
```

### Classes (CSS)

You can add css classes inside react.

```js
// in css have a ".heading"
root.render(<h1 className="heading">Hello {name}!</h1>;
```

### HTML Attributes

Use camel case for attributes, This is _NOT_ like normal HTML where it is all lowercase.

```js
// normal HTML uses "contenteditable", react is different
root.render(<h1 contentEditable="true">Hello {name}!</h1>;
```

### Inline CSS Styling

This is useful to update styling based on changes (user input, etc) within react.

```js
const customStyle = {
  color: "red",
  fontSize: "20px",
};

if (someUserInput) {
  customStyle.color = "blue"; // can change on the fly in React and it will update
}
root.render(<h1 style={customStyle}>Hello World!</h1>);
```

## Components

Each component has small bits of HTML, CSS, and JS. Each component can talk to the server individually, so each can load separately (you don't need to reload the entire page).

Every component (and its file) should start with a capital letter. Ex. component `ToDoItem` in file `ToDoItem.jsx`.

### Creating Components

Before hooks, they were setup like:

```js
// ClassName is a "React component class" or "React component type"
class ClassName extends React.Component { render() {details here} }
```

Functional components with hooks can be setup like:

```js
import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>My First Functional Component</h1>
    </div>
  );
}

export default App;
```

### Properties (Props)

Components can take parameters, called "props" (short for "properties"), and return a hierarchy of view to display via the `render` method.

These "props" are how you can pass properties to components.

```js
// copmponent with "name" and "email" props
function Card(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <p>{props.email}</p>
    </div>
  );
}

//this is how you pass them, must be the same name
<Card name="Beyonce" email="b@beyonce.com" />;
```

### JSX

Most react devs use a special syntax called _JSX_ which makes these structures easier to write.

Example of component in a separate file. It can be imported with line `import List from "./components/List";`

```js title="List.jsx"
import React from "react";

function List() {
  return (
    <div>
      <ul>
        <li>Bacon</li>
        <li>Cheese</li>
        <li>Avocado</li>
      </ul>
    </div>
  );
}

export default List;
```

### Controlled Components

In HTML, form elements such as `<input>` and `<textarea>` typically maintain their own state and update it based on user input. In react, mutable state is typically kept in the state property of components, and only updated with `setState()` or your specific state setting function with hooks.

We combine the two by making the react state the "single source of truth".

```js
function App() {
  const [name, setName] = React.useState("");

  function handleChange(event) {
    console.log(event.target.value);
    setName(event.target.value);
  }

  return (
    <div className="container">
      <h1>Hello {name}</h1>
      <input
        onChange={handleChange}
        type="text"
        placeholder="What's your name?"
        value={name}
      />
      <button>Submit</button>
    </div>
  );
}
```

## States

React has hooks to use states, and it has classes for states. While react is moving to using hooks, you can still use classes.

Advantages of using hooks: [link1](https://stackoverflow.com/questions/53062732/react-function-components-with-hooks-vs-class-components), [link2](https://blog.techfabric.com/what-is-the-advantage-of-using-react-hooks-over-react-classes/)

### Hook State

Using `React.useState()` you can generate a state and setter function.

Setup like `const [stateKey, setStateKeyFunction] = React.useState('');`

In the above, `stateKey` is used to access the state variable. Then `setStateKeyFunction( newValue )` sets the "stateKey" to "newValue".

```js
import React from "react";

function App() {
  const [name, setName] = React.useState("");

  function handleChange(event) {
    const newName = event.target.value;
    setName(newName);
  }

  return (
    <div className="container">
      <h1>Hello {name}</h1>>
      <input
        onChange={handleChange}
        type="text"
        placeholder="What's your name?"
        value={name}
      />
      <button>Submit</button>
    </div>
  );
}
```

### Class State

:::caution

This is not recommended. It is recommended to use hooks for state.

:::

React components can have a state by setting `this.state` in their constructors.

`this.state` should be considered private to a react component that it's defined in.

All React components with a constructor should start with a `super(props)` call.

```js
class Square extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null,
    };
  }

  render() {
    return (
      <button
        className="square"
        onClick={() => {
          console.log("click");
        }}
      >
        {this.props.value}
      </button>
    );
  }
}
```

How [setState](https://stackoverflow.com/questions/43638938/updating-an-object-with-setstate-in-react) works.

### Complex State

Rather than a state with only one value, you can have a state be a JS object.

:::warning

You cannot access event.target.name (or anything 'event') from within a stateful setter. So access it _before_ the setter.

:::

```js
function App() {
  const [fullName, setFullName] = React.useState({
    fName: "",
    lName: "",
  });

  function handleChange(event) {
    const { value, name } = event.target;

    setNewNote((prevValue) => {
      // if (name === "title") {
      //   return {
      //     title: value,
      //     content: prevValue.content,
      //   };
      // } else if (name === "content") {
      //   return {
      //     title: prevValue.title,
      //     content: value,
      //   };
      // }

      // This is a shorter version of the above
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {fullName.fName} {fullName.lName}
      </h1>
      <form>
        <input
          onChange={handleChange}
          name="fName"
          placeholder="First Name"
          value={fullName.fName}
        />
        <input
          onChange={handleChange}
          name="lName"
          placeholder="Last Name"
          value={fullName.lName}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}
```

## Effects

Another hook in react is the `useEffect` hook. It allows you to perform side effects in components, such as: fetching data, directly updating the DOM, and timers.

**[w3schools documentation on useEffect](https://www.w3schools.com/react/react_useeffect.asp)**

:::tip

I have gotten an error before which I solved using the `useEffect` hook. It was related to this [StackOverflow post](https://stackoverflow.com/questions/62336340/cannot-update-a-component-while-rendering-a-different-component-warning). My solution is below. The error was related to `setMode(colorMode === "dark" ? "dark" : "light");` and said that a component cannot be updated while rendering a different component.

```js
function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();

  // colorMode holds the Docusaurus theme
  const { colorMode } = useColorMode();

  // MUI color mode setting
  const { setMode } = useColorScheme();

  // set Material UI theme based on Docusaurus theme
  useEffect(() => {
    // useEffect: https://www.w3schools.com/react/react_useeffect.asp
    // added useEffect because I was getting an error https://stackoverflow.com/questions/62336340/cannot-update-a-component-while-rendering-a-different-component-warning
    setMode(colorMode === "dark" ? "dark" : "light");
  }, [colorMode]);

  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Button
            // className={clsx("button", styles.btnSecondaryCustom)}
            className="button"
            size="large"
            variant="contained"
            href="/docs/intro"
            color="secondary"
          >
            Docs
          </Button>
        </div>
      </div>
    </header>
  );
}
```

:::

## Conditional Rendering

You can conditionally render within React using Ternary Operator & _AND_ Operator.

### Ternary Operator

Ternary is useful for doing conditional checks for rendering elements.

```js
function App() {
  return (
    <div className="container">{isLoggedIn ? <h1>Hello</h1> : <Login />}</div>
  );
}
```

### AND Operator

_AND_ is useful for doing conditional checks for rendering elements, if the false case is a `null`. This works because JS only evaluates the second part of an `&&` expression if the first part is true. Otherwise it is ignored to save time.

```js
// instead of  {currentTime > 12 ? <h1>Why are you still working?</h1> : null}
// you can use {currentTime > 12 && <h1>Why are you still working?</h1>}
const currentTime = new Date().getHours();
function App() {
  return (
    <div className="container">
      {currentTime > 12 && <h1>Why are you still working?</h1>}
    </div>
  );
}
```

## Forms

Forms are used very often. These are some useful things you can do.

### Using "event"

Getting info from an input in real time, use `event`. In the below example, we have an input which you can add `onChange={handleChangeFunction}`

```js
function handleChangeFunction(event) {
  // event is passed automatically
  console.log(event.target.value); // gives you the value of what is inside the input every time a change is made
  console.log(event.target.placeholder); // tells you what the input placeholder is
  console.log(event.target.type); // gives you the type that the input is. ex. "text"
}
```

### Overriding Default Form Behavior

When you submit a form, by default it refreshes the page. If you want to stop this you can use `event.preventDefault()`.

```js
function App() {
  const [name, setName] = React.useState("");
  const [submittedName, setSubmittedName] = React.useState("");

  function handleChange(event) {
    // console.log(event.target.value);
    setName(event.target.value);
  }

  function handleBtnClick(event) {
    setSubmittedName(name);
    event.preventDefault(); //prevents the default event behavior.
  }

  return (
    <div className="container">
      <h1>Hello {submittedName}</h1>
      <form onSubmit={handleBtnClick}>
        <input
          onChange={handleChange}
          type="text"
          placeholder="What's your name?"
          value={name}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
```

## Managing Component Tree

If you have a child component, but you want a change within it to affect something in the parent, how do you do it?

You can pass functions to the child, and you can use those functions as the child and pass back details (like props).

[Example 1](https://codesandbox.io/s/managing-a-component-tree-forked-cuxus7?file=/src/components/ToDoItem.jsx)

[Example 2](https://codesandbox.io/s/managing-a-component-tree-practice-forked-sj60k8?file=/src/components/InputArea.jsx)

```js title="ToDoItem.jsx"
import React from "react";

function ToDoItem(props) {
  return (
    <li
      onClick={() => {
        // here is where you call the function passed from parent
        props.onChecked(props.id);
      }}
    >
      {props.item}
    </li>
  );
}

export default ToDoItem;
```

## React Framework

Next.js is the most popular. It is better for SEO. It pre-loads info for fast user experience on loading into page. It can optimize static sites as well. [Why should you use Next.js?](https://pagepro.co/blog/what-is-nextjs/)

## State Mangement

A newer popular choice is **[Recoil](https://recoiljs.org/)**.

Battle tested choice is **[Redux](https://redux.js.org/)**. Recommended to use **[Redux Toolkit](https://redux-toolkit.js.org/)** for this.

## UI Kits

These are for styling your react app.

Most popular is **[Material UI](https://mui.com/material-ui/getting-started/overview/)**.

Other options include "Onsen UI", "Chakra UI", and "React Boostrap".

## Mobile Development

React Native - leverage react to build apps for both Android and iOS.

- React based
- Code reusability
- Large commmunity

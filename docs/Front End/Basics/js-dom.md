---
sidebar_position: 5
---

# Javascript DOM

DOM stands for **Document Object Model**. Everything on the website is an object and can be manipulated using the DOM.

## Getters and Setters

There are getter and setter properties / methods.

### Properties

```js
h1.color; //gets color of the h1 in question
h1.color = red; //sets color of the h1 in question
```

### Methods

Some examples of methods include `click();`, `appendChild();`, and `setAttribute();`

```js
h1.click(); //runs the "click" method of h1
```

## Getting Objects on Webpage

Common ways include the below. Most often you'll see people use `.querySelector()` and `.querySelectorAll()` in websites.

```js
// get h1 elements.
// you could put in ID's, classes, elements, etc
document.querySelector("h1");

// class example
document.querySelector(".className");

// id example
document.querySelector("#idName");

// you can also combine selectors like in css
document.querySelector("li a"); // gets "a" tag inside a list item

// gets h1 element inner HTML (text)
document.querySelector("h1").innterHTML;

// gets an array of all items in the HTML that match your query
// the same rules as above apply
document.querySelectorAll("");

// gets element by its elements
// this gets ALL elements of that type (in an array)
// instead of just 1 like the querySelector method
document.getElementsByTagName("");

// changes third list item color to purple
document.getElementsByTagName("li")[2].style.color = "purple";

// gets array of elements with the chosen class name
document.getElementsByClassName("");

// get back the single item that has this ID. NOT an array
document.getElementById("");
```

## CSS styles in JS DOM

Everything is camelCase, so instead of `background-color` like in CSS, for JS DOM we use `backgroundColor`. Values are always represented as strings, held within quotes like `"10rem";`

## HTML DOM style object

The Style object represents an individual style statement. Documentation [here](https://www.w3schools.com/jsref/dom_obj_style.asp).

## CSS Class Manipulation

This is probably the best way to make CSS changes using javascript. You can alter object classes, adding or removing them using JS.

```js
// add class
classList.add("classToAdd");

// remove class
classList.remove("classToRemove");

// adds if it doesn't exist, removes if it does exist
classList.toggle("classToToggle");
```

Examples:

```js
// this would add a class called "invisible" to anything that is a "button"
document.querySelector("button").classList.add("invisible");

// this would remove the class "invisible" from anything that is a "button"
document.querySelector("button").classList.remove("invisible");
```

## textContent vs innerHTML

`textContent` only gives you the text within a thing.

`innerHTML` takes literally everything within the HTML. This allows you to do things like:

```js
// adds emphasis too
document.querySelector("h1").innerHTML = "<em>Good Bye</em>";
```

## Changing attributes within JS

Use can use the `.attributes` or `getAttribute("attribName")` to get attributes.

```js
// Getting array of attributes
// gives you an array of all attributes of the "a"
document.querySelector("a").attributes;

// Getting single attribute
// gives you the value of the "href" attribute of the "a"
document.querySelector("a").getAttribute("href");

// Setting single attribute
document.querySelector("a").setAttribute("href", "https://www.bing.com");
```

## Event Listeners

Add an event listener to set a function to be called whenever the specified event happens.

How events work: [MDN addEventListener](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener).

List of events: [MDN Events](https://developer.mozilla.org/en-US/docs/Web/Events).

```js
// here "handleClick" is a function to call when the "click" event happens
document.querySelector("button").addEventListener("click", handleClick);

// commonly these are done using anonymous functions
document.querySelector("button").addEventListener("click", function () {
  alert("I got clicked");
  // whatever else you want the function to do
});
```

Adding event listeners to multiple elements: [Flaviscopes Post](https://flaviocopes.com/how-to-add-event-listener-multiple-elements-javascript/).

---
sidebar_position: 4
---

# Javascript

Javascript allows you to change the look of the website based on user or other input. An example is dropdown menus.

To use javascript in a website, in html file you can use:

```html
<script type="text/javascript">
  //javascript code
</script>
```

## Variables

Variables in JS can be defined using `var`, `let`, or `const`. Main types are string, number, and boolean. They are defined like:

```js
var variableName1 = 10; // global scope (even if defined in function)
let variableName2 = 10; // local block scope
const variableName3 = 10; // constants
```

Further info [here](https://www.w3schools.com/js/js_variables.asp)

## Useful Functions

### .length

`stringVarName.length;` gets you the length of a string.

### prompt

`prompt("your text here");` prompts the user for input.

### alert

`alert("your text here");` shows user a message of "your text here".

### .slice

`StringVarName.slice(start, end);` gets a "slice" of a string including the first _start_ number, up to (not including) the second _end_ number.

### .toUpperCase

`StringVarName.toUpperCase();` converts the string to upper case.

### .toLowerCase

`StringVarName.toLowerCase();` converts the string to lower case.

### console.log

`console.log("message to log");` sends a message in parenthesis to the console log (useful for testing and debugging).

## Functions

```js
// take in "bottles" and returns value at the end
function getMilk(bottles) {
  return bottles * 2;
}

getMilk(2); // would return 4
```

## Random Number

`Math.random();` generates a number between 0 and 1. Best way to use is:

```js
Math.floor(x * Math.random()); // generates interger "val" where 0 <= val < x
```

## if

```js
if (track === "clear") {
  goStraight();
} else {
  turnRight();
}
```

## Checking Equality

[MDN Docs on Equality comparisons and sameness](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness)

## Array

```js
var eggs = [egg0, egg1, egg2, egg3, egg4, egg5];
var myEgg = eggs[1]; // egg1

eggs.includes(egg3); // would be true because egg3 exists in array eggs
eggs.push("egg6"); // adds new element "egg6" at the END of the array
eggs.pop(); // returns "egg6", whatever is at the END of the array
```

### map

Create a new array by doing something with each item in the array.

```js
arrayName.map(someFunction);
// "maps" over each json object in "arrayName"
// and runs function "someFunction" on it.

// Equivalent code is:
for (i = 0; i < arrayName.length; i++) {
  someFunction(arrayName[i]);
}
// OR
arrayName.forEach(function (x) {
  someFunction(x);
});
```

### filter

Create a new array by keeping the items that return true.

```js
var numbers = [3, 12, 2, 50, 5];
// inside newNumbers only have the numbers from "numbers" that are greater than 10
const newNumbers = numbers.filter(function (num) {
  return num > 10;
});
// newNumbers is now [12, 50];
```

### reduce

Accumulate a value by doing something to each item in an array.

```js
var numbers = [3, 12, 2, 50, 5];
const newNumber = numbers.reduce(function (accumulator, currentNumber) {
  return accumulator + currentNumber;
});
// newNumber is now  72 (3 + 12 + 2 + 50 + 5 = 72)
```

### find

Find the first item that matches from an array.

```js
var numbers = [3, 12, 2, 50, 5];
const newNumber = numbers.find(function (num) {
  return num > 10; // returns 12
});
// newNumber = 12
```

### findIndex

Finds the index of the first item that matches.

```js
var numbers = [3, 12, 2, 50, 5];
const newNumber = numbers.findIndex(function (num) {
  return num > 10; // returns 12
});
// newNumber = 1
```

## Loops

### While Loops

```js
while (something is true) {
	// do something
}
```

### For Loops

```js
for (i = 0; i < 2; i++) {
  // do something
}
```

## Audio

```js
var audio = new Audio("sounds/tom-1.mp3");
audio.play();
```

## Constructor Functions

Rather than camelCase, constructor function must start with a capital letter. Ex.

```js
function BellBoy(name, age) {
  this.name = name;
  this.age = age;
}

// then use with
var bellboy1 = new BellBoy("Timmy", 19);
```

## Delay function

`setTimeout();` function. Delays execution of a function which is first argument to `setTimeout();`. The time is in milliseconds.

Further details [here](https://www.tutorialspoint.com/How-to-delay-a-JavaScript-function-call-using-JavaScript)

```js
setTimeout(functionToCall, timeInMs);
```

## Modules

Useful for separating logic into different files.

```js title="math.js"
const pi = 3.14159;

function doublePi() {
  return pi * 2;
}

function triplePi() {
  return pi * 3;
}
s;
export default pi;
// imported with [import pi from "./math.js"]
// note that you can name 'pi' here whatever you want

export { doublePi, triplePi };
// imported with [import { doublePi, triplePi } from "./math.js"]
// note that the names need to match here

// can also use [import * as pi from "./math.js"]
// note that this is discouraged in style guides
// this allows you to use pi.default, pi.doublePi(), pi.triplePi()
```

## Advanced Feature to Learn

- Callback Functions
- Promises
- async/await
- Generator Functions
- ES6 features
- Object Oriented Programming in JS / Classes
- "this" keyword
- Closures
- Regular Expressions

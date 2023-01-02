---
sidebar_position: 6
---

# jQuery

Simpler libary for HTML document traversal and manipulation, event handling, animation, and Ajax.

## querySelector but using jQuery

Using jQuery, we can get elements like `$("h1");` which selects ALL the h1's, not just the first.

```js
document.querySelector("h1"); // is same as
jQuery("h1"); // is same as
$("h1"); // best and shortest method
```

## Using jQuery in Website

Good method is to use a CDN. **[Google](https://developers.google.com/speed/libraries#jquery)** is the most popular host.

From **[here](https://developers.google.com/speed/libraries#jquery)** you just copy the `<script>` section and place it in the html just before you include your own js file (just before the closing body tag).

You _can_ have the scripts in the header, but then you need the following in your js file to make sure loaded in correct order. Like:

```js
$(document).ready(function () {
  $("h1").css("color", "red");
});
```

## Manipulating DOM using jQuery

### Change CSS

```js
// changes h1 color to green
$("h1").css("color", "green");
```

### Get Current Property Value

```js
// returns the color of the h1
$("h1").css("color");
```

### Classes

Adding, removing, and checking.

```js
// add a class
$("h1").addClass("big-title");

// can add multiple classes separated by spaces
$("h1").addClass("big-title margin-50");

// remove class
$("h1").removeClass("big-title");

// check if item has the class "big-title", returns a bool
$("h1").hasClass("big-title");
```

### Text

```js
// changes h1 text to "Bye"
$("h1").text("Bye");

// editing HTML
$("h1").html("<em>Hey</em>");
```

### Attributes

```js
// returns the "src" attribute of "img"
$("img").attr("src");

// changes href attribute of the anchor tags on page
$("a").attr("href", "https://www.yahoo.com");
```

### Event Listeners

**[jQuery events](https://api.jquery.com/category/events/)**

```js
// click example
$("h1").click(function () {
  // do something on click
  // this does that for ALL h1's
});

// you can also use ".on();"
$("h1").on("mouseover", function () {
  // do something on mouseover over h1
});
```

### Add Elements

Use `.before()`, `.after()`, `.prepend()`, and `.append()`.

```js
// adds a button before any h1's
$("h1").before("<button>New</button>");

// can also use ".after()"

// adds something inside the h1, but before the other content in the h1
$("h1").prepend();

// adds something inside the h1, but after the other content in the h1
$("h1").append();
```

### Remove Elements

```js
$("button").remove(); // removes all buttons from website
```

### Effects

**[Effect documentation](https://api.jquery.com/category/effects/)**

- .show()
- .hide()
- .toggle() // shows or hides
- .fadeOut() // slowly hides
- .fadeIn()
- .fadeToggle()
- .slideUp()
- .slideDown()
- .slideToggle() // great for drop down menus
- .animate() // slowly changes a css rule. Can only use numerical value css rules
  - Ex. `$("h1").animate({margin: "10px"});`

You can chain these and they will happen one after another.

```js
// will slide up, then down, then animate
$("h1").slideUp.slideDown.animate({ margin: "10px" });
```

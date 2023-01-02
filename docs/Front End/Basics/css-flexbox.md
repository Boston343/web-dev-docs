---
sidebar_position: 3
---

# CSS-Flexbox

Flexbox is a layout method for arranging items in rows or columns. Items _flex_ (expand) to fill additional space or shrink to fit into smaller spaces.

:::note

Here is a [crash course](https://www.youtube.com/watch?v=3YW65K6LcIA) I followed to learn Flexbox basics.

:::

## Using Flexbox

Start with a class to make flexbox. Ex `class="flex-container"`. In CSS:

```css
.flex-container {
  display: flex; /* this makes it a flex entity */
}
```

## justify-content

`justify-content` changes how the boxes are spaced along the main axis (default is horizontally). Ex. `center, end, space-around, space-between`

## align-items

`align-items` changes how the boxes are aligned in the cross axis (default is vertically). Ex. `end, center`

## flex-direction

`flex-direction` changes the direction. Default is `row`, other main option is `column`. Ex. `row, column, row-reverse, column-reverse`

## order

`order` allows you to change the order of elements in a flex box, without changing the ordering in the HTML.

## Flexbox Growing and Shrinking

### flex-basis

`flex-basis` is the same as width for normal elements.

### flex-grow

`flex-grow` is a factor of flex item main size. This is specified as a number. It's basically a growth rate.

### flex-shrink

`flex-shrink` is the shrink rate. Will only go smaller than your `flex-basis`. Opposite of `flex-grow`

```css
/* flex: {grow} {shrink} {basis}; */

/* sets grow rate to 1, shrink rate of 0, and basis of 100px */
flex: 1 0 100px;

/* this is what happens a lot of the time, just take up the space necessary */
flex: 1 0 0;

/* shorthand of the above */
flex: 1;
```

## gap

`gap` functions like margin except it is only between flexbox elements. Good demonstration **[here](https://coryrylan.com/blog/css-gap-space-with-flexbox)**

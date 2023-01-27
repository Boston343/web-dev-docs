---
sidebar_position: 1
---

# HTML

All websites need HTML, it's the basic elements of a site. Normally, there is a start tag, content, and an end tag. However some are considered **self closing tags** where they don't require a specific closing tag. These files have the extension `.html`

:::info

Good documentation on HTML can be found here: [HTML MDN Docs](https://developer.mozilla.org/en-US/docs/Web/HTML).

:::

## HTML Cheatsheet

import HTMLCheatsheet from './img/html_cheatsheet.jpg';

<img src={HTMLCheatsheet} alt="HTML Cheetsheet" style={{width:800}}/>

## Some Basic Elements

### Header

There are 6 types of headers. H1 through H6. Generally H1 is the largest (highest level) with H6 being the smallest.

```html
<h1>This is a header. There is also h1-h6</h1>
```

### Line Break

This is a self closing tag.

```html
<br />
```

### Horizontal Line

```html
<hr />
```

### Italics

```html
<i> is italics </i>

<em>
  is also italics formatting, but also emphasizes that it's providing, well,
  emphasis. This is better.
</em>
```

### Bold

```html
<b> is bold </b>

<strong>
  is also bold formatting, but emphasizes that it is strong. This is better.
</strong>
```

### Lists

```html
<ul>
  <li>This is an unordered list</li>
  <li>as in bullet points</li>
</ul>

<ol>
  <li>This is an ordered list</li>
  <li>as in numbering</li>
</ol>
```

### Images

```html
<img src="img_source.png" alt="text that shows up if link is broken" />
```

### Hyperlink

```html
<a href="https://somewebsite.com">Link text to display</a>
```

## Modifying HTML Elements

You can modify HTML elements. Ex. `<hr size="3">`. Here `size="3"` is the HTML Attribute

[MDN HTML Attribute Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes)

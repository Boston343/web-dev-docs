---
sidebar_position: 3
---

# UI Libraries

Three of the most popular UI libraries are Material UI (MUI), Bootstrap, and Tailwind CSS. They can speed up the development of your UI by using various classes and components.

This page also has a few other useful libraries.

## Material UI

**[Material UI](https://mui.com/material-ui/getting-started/overview/)** is an open-source React component library that implements Google's Material Design.

### MUI Installation

#### MUI Core

```bash
npm install @mui/material @emotion/react @emotion/styled
```

#### MUI Icons

```bash
npm install @mui/icons-material
```

### MUI Colors

You can set the colors that Material UI can use in components. See the **[documentation](https://mui.com/material-ui/customization/color/)**.

Color picker tool **[here](https://m2.material.io/resources/color/#!/?view.left=0&view.right=0)**.

### MUI Theme

**[Documentation](https://mui.com/material-ui/customization/theming/)** on how to use themes. You create a theme and define whatever you want to change from the Material UI default theme.

```js
// changes only the default primary color
// dark and light colors can be set individually
// or Material UI will auto calculate appropriate values
const theme = createTheme({
  palette: {
    primary: {
      light: "#f7c742",
      main: "#f5ba13",
    },
  },
});
```

You then wrap your application (or the specific components desired) with a `<ThemeProvider theme={theme}>` component.

### Material Icons Usage

Search for the icons you want **[here](https://mui.com/material-ui/material-icons/)**.

Import the specific icons you want like:

```js
import DeleteIcon from "@mui/icons-material/Delete";
```

Then you use it as a react component:

```html
<DeleteIcon />
```

## Bootstrap

**[Bootstrap](https://getbootstrap.com/)** is a frontend toolkit. Build and customize with Sass, utilize prebuild grid system and components, and bring projects to life with powerful JavaScript plugins.

### Bootstrap Installation

You can either download the source files for Bootstrap, or you can use a CDN to include it into your HTML. The sources files can be found on their website. For CDN, in your HTML `<head>` put the line from their [website](https://getbootstrap.com/docs/5.3/getting-started/introduction/). It will look like:

```html
<link
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css"
  rel="stylesheet"
  integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD"
  crossorigin="anonymous"
/>
<script
  src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"
  integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN"
  crossorigin="anonymous"
></script>
```

## Tailwind CSS

**[Tailwind CSS](https://tailwindcss.com/)** is a utility-first CSS framework packed with classes like `flex`, `pt-4`, `text-center`, and `rotate-90` that can be composed to build any design, directly in your markup.

It is highly customizable. You can style each component on your website as the Tailwind UI demands from it.

Unlike bootstrap, there are no ready-made components. However, it is highly flexible for transforming the look and feel of elements on the website.

### Tailwind vs Bootstrap

- Bootstrap requires about 300kb, while Tailwind only takes about 30kb

  - Tailwind will load faster

- Bootstrap has been around longer
- Bootstrap is easier to get going, but is less customizable

:::note

IMHO - Tailwind is probably better for front-end dev specifically, while Bootstrap is probably better for full-stack since you have more to worry about.

:::

## React Icons

Arguably better icons than MUI icons. They are also imported as React components.

Search for icons using the searchbar **[here](https://react-icons.github.io/react-icons/)**.

### React Icons Installation

```bash
npm install react-icons --save
```

### React Icons Usage

```js
import { FaBeer } from "react-icons/fa";

class Question extends React.Component {
  render() {
    return (
      <h3>
        {" "}
        Lets go for a <FaBeer />?{" "}
      </h3>
    );
  }
}
```

## Font Awesome

Font Awesome is a collection of a ton of icons for free use (and more paid). Search through the icons **[here](https://fontawesome.com/search)**.

To use in your website, create a kit on their page **[here](https://fontawesome.com/kits)**, then open the kit and put the _Kit Code_ into the `<head>` of your HTML.

It will look something like:

```html
<script
  src="https://kit.fontawesome.com/somethingHere.js"
  crossorigin="anonymous"
></script>
```

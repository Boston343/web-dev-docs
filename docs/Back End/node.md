---
sidebar_position: 1
---

# Node

[Node](https://nodejs.org/en/) is an open-source, cross-platform JavaScript runtime environment.

## Installation

First, either install Node.js from their [website](https://nodejs.org/en/), or use a Node version manager like [nvm](https://www.geeksforgeeks.org/how-to-install-and-use-nvm-on-windows/) to install Node.js and npm.

:::tip

I recommend following [these instructions](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) for installation of Node and npm.

For using Node and npm, I use [Hyper](https://hyper.is/) configured for [git bash](https://gist.github.com/coco-napky/404220405435b3d0373e37ec43e54a23)

:::

## Commands

### mkdir

Creates a new directory. Ex. `mkdir new-folder` makes folder named "new-folder".

### touch

Creates a file. Ex. `touch new-file.txt` creates a file named "new-file.txt".

### node

Uses node to do something. Ex. `node index.js` runs the "index.js" file on your computer.

## REPL

REPL stands for **R**ead **E**valuation **P**rint **L**oop. It runs js commands from within the node REPL terminal.

From your terminal, you can access the REPL by running the command `node`.

:::info

Can press "tab" twice to see all possibilities. Ex. type "console" then tab twice to see all options for that command.

To exit, hit CTRL+C twice.

:::

## Node.js API

The [Node.js API Docs](https://nodejs.org/api/) describe what you can do.

You can import packages as CommonJS (CJS) or ES Module (ESM). ESM is newer and more people are using it although you will still find CJS all over the place.

:::note

To use ESM version, in "package.json" you need the line `"type": "module",`

:::

### FileSystem

One popular package is the [FileSystem](https://nodejs.org/api/fs.html) package.

You use it (ESM) with:

```js
import * as fs from "node:fs";

// example of usage
// copies file1.txt and names it file2.txt"
fs.copyFileSynce("file1.txt", "file2.txt");
```

## NPM

NPM stands for **N**ode **P**ackage **M**anager. You will likely use it to startup your projects.

### npm init

Inside your new project folder run `npm init`. This creates the "package.json" file in your project.

### npm package installation

If you want to install a package to use in your project, run `npm install package-name`. Ex. `npm install superheroes` installes the [superheroes](https://www.npmjs.com/package/superheroes) package, creating the "node_modules" folder and putting the package and any dependencies inside.

## ESLint

[ESLint](https://eslint.org/docs/latest/user-guide/getting-started) is a tool for identifying and reporting on patterns found in ECMAScript/JavaScript code, with the goal of making code more consistent and avoiding bugs.

To use ESLint in your project, after initializing with `npm init`, run:

1. `npm init @eslint/config`
2. Select NPM (not browser)
3. You will likely still have to edit your eslint config file after the fact, otherwise "process" will throw an error

### ESLint Config File

This file is `.eslintrc.json`.

If you are using node, add line `"node": true,` and remove line `"browser": true,`.

:::tip

I like to add a rule of `"no-unused-vars": "warn"`

:::

Below is an example config file (what I use):

```json
{
  "env": {
    "node": true,
    // "browser": true,
    "es2021": true
  },
  "extends": "eslint:recommended",
  "overrides": [],
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "rules": {
    "no-unused-vars": "warn"
  }
}
```

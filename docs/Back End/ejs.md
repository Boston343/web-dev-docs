---
sidebar_position: 3
---

# EJS

**[EJS](https://ejs.co/)** is a templating system for node which allows you to create HTML templates that can be edited using the server. It allows for less duplication of work, so you don't have to send a completely different HTML file for every case.

EJS works using tags. These tags can be found under the _tags_ section of **[docs](https://ejs.co/#docs)**.

## Installing EJS

Inside your node project run:

```bash
npm install ejs
```

## Using EJS with Express

You will need a `views` folder, which will be where your `.ejs` templates go.

:::info

Good documentation of setup and usage of EJS with Express can be found [here](https://github.com/mde/ejs/wiki/Using-EJS-with-Express).

:::

## Sending Variables with EJS

You need a `.ejs` file, which is like HTML but with added features for this templating purpose.

In the EJS file you use:

```html title="test.ejs"
<%=varName %>
```

In the server you use:

```js title="app.js"
res.render("test.ejs", { varName: "dataToPut" });
```

Most people will use the same name in both spots, like:

```js
var day = "Monday";
res.render("ejsFileName", { day: day });
```

## Running Code Inside EJS Template

You can use _scriplet_ tags in your HTML inside `.ejs` files. They need to be used on EVERY line with javascript.

```js title="example.ejs"
<% if ( day==="Saturday" || day==="Sunday" ) { %>
  <h1 style="color: purple"><%= day %> Todo List</h1>
<% } %>
```

:::note

Scriplet tags only work for control flow purposes.

:::

## Using EJS Templates

For repetitive elements on pages (with headers and footers being a good example), you can create an EJS template for them and include them on every other page.

Lets say we have a `header.ejs` and a `footer.ejs` for the below example.

```html title="page.ejs"
<%- include('header'); -%>
<h1>Title</h1>
<p>My page</p>
<%- include('footer'); -%>
```

## Example Project

For an example project, see TodoList **[code](https://github.com/Boston343/TodoList)**.

```html title="TodoList: list.ejs"
<%- include('header'); -%>

<div class="box" id="heading">
  <h1><%= listName %></h1>
</div>
<div class="box">
  <!-- add li for every item in our 'items' array -->
  <% items.forEach((item) => { %>
  <form class="item" action="/deleteItem" method="post">
    <input
      onChange="this.form.submit()"
      name="checkbox"
      value="<%=item._id%>"
      type="checkbox"
    />
    <input type="hidden" name="listName" value="<%= listName %>" />
    <p><%= item.name %></p>
  </form>
  <% }); %>
  <form class="item newItem" action="/newItem" method="post">
    <input
      type="text"
      name="newItem"
      placeholder="New Item"
      autocomplete="off"
    />
    <button type="submit" name="list" value="<%= listName %>">+</button>
  </form>
</div>

<%- include('footer'); -%>
```

```js title="TodoList: app.js"
// npm and express includes
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import _ from "lodash";
// import https from "https"; // for forming external get requests

// local includes
import * as date from "./src/date.js";

dotenv.config(); // gets the .env data for use with process.env.
const app = express();
app.set("view engine", "ejs"); // using EJS
const port = process.env.PORT || 3000;
app.use(express.urlencoded({ extended: true })); // this is for parsing data from html form

// __dirname is only available with CJS. Since I am using ESM I need to get it another way
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// static items like other js or css files will not load unless you define where the server should
//      start looking for those files.
app.use(express.static(path.join(__dirname, "/public")));

// -----------------------------------------------------------------------------------
// ------------------------------- Mongoose Setup ------------------------------------
// -----------------------------------------------------------------------------------
// connect to MongoDB - local connection
// mongoose.connect("mongodb://localhost:27017/todolistDB", {
//     useNewUrlParser: true,
// });
// connect to MongoDB Atlas (the cloud)
mongoose.connect(
  "mongodb+srv://" +
    process.env.MONGODB_USER +
    ":" +
    process.env.MONGODB_PASS +
    "@cluster0.ovomich.mongodb.net/todolistDB?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
  }
);

// schema
const itemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please type something in for your item name."],
  },
});

const listSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  items: [itemSchema],
});

// model: mongoose will auto make it plural "items"
const Item = mongoose.model("Item", itemSchema);

const List = mongoose.model("List", listSchema);

// -----------------------------------------------------------------------------------
// testing

// remove all items
// synchronous version
// const deleted = await Item.deleteMany({});
// if (deleted.deletedCount >= 1) {
//     console.log("Deleted " + deleted.deletedCount + " items.");
// } else {
//     console.log("ERROR in deleting items. No items deleted.");
// }

// async version
// Item.deleteMany({}, (err, ret) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("Deleted " + ret.deletedCount + " items.");
//     }
// });

const item1 = new Item({
  name: "Welcome to your todo list!",
});

const item2 = new Item({
  name: "Hit the + button to add a new item.",
});

const item3 = new Item({
  name: "<-- Hit this to delete an item.",
});

const defaultItems = [item1, item2, item3];

// insert test items into db
// synchronous version
// const inserted = await Item.insertMany(defaultItems);
// console.log(inserted);

// async version
// Item.insertMany(defaultItems, (err, items) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("Inserted: " + items);
//     }
// });

// -----------------------------------------------------------------------------------
// ---------------------------------- Listening --------------------------------------
// -----------------------------------------------------------------------------------
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

// -----------------------------------------------------------------------------------
// --------------------------------- Get Requests ------------------------------------
// -----------------------------------------------------------------------------------
// normal page for the day
app.get("/", (req, res) => {
  // let day = date.getDate();
  let day = "Today";
  Item.find((err, items) => {
    if (err) {
      console.log(err);
    } else {
      if (items.length === 0) {
        // if nothing currently in collection, populate with starting items
        Item.insertMany(defaultItems, (err, insertedItems) => {
          if (err) {
            console.log(err);
          } else {
            console.log("Inserted: " + insertedItems);
            res.redirect("/"); // reload so we get the items we just inserted
          }
        });
      } else {
        // if already items in collection, just show them
        res.render("list", { listName: day, items: items });
      }
    }
  });
});

// -----------------------------------------------------------------------------------
// about me page
app.get("/about", (req, res) => {
  res.render("about", {});
});

// -----------------------------------------------------------------------------------
// pages for any other list you want to create
app.get("/:listName", (req, res) => {
  const listName = _.lowerCase(req.params.listName);

  // determine if list already exists
  List.findOne({ name: listName }, (err, foundList) => {
    if (err) {
      console.log(err);
    } else {
      if (!foundList) {
        // list doesn't exists, so create it and then display
        const list = new List({
          name: listName,
          items: defaultItems,
        });

        list.save();

        res.redirect("/" + listName);
      } else {
        // list exists, so just display it
        res.render("list", {
          listName: _.capitalize(foundList.name),
          items: foundList.items,
        });
      }
    }
  });
});

// -----------------------------------------------------------------------------------
// -------------------------------- Post Requests ------------------------------------
// -----------------------------------------------------------------------------------
//  add new item to Todo List
app.post("/newItem", (req, res) => {
  const listName = _.lowerCase(req.body.list);
  const itemName = req.body.newItem;

  const newItem = new Item({
    name: itemName,
  });

  if (req.body.list === "Today") {
    console.log("new item: " + itemName);

    // add new item into items collection
    newItem.save();

    // reload
    res.redirect("/");
  } else {
    console.log("new item: " + itemName);

    List.findOne({ name: listName }, (err, foundList) => {
      if (err) {
        console.log(err);
      } else {
        foundList.items.push(newItem);
        foundList.save();

        // reload
        res.redirect("/" + listName);
      }
    });
  }
});

// -----------------------------------------------------------------------------------
//  delete an item from Todo List
app.post("/deleteItem", (req, res) => {
  const checkedItemId = req.body.checkbox;
  const listName = _.lowerCase(req.body.listName);

  if (listName === "today") {
    // delete the item is question. Could also use .findByIdAndRemove()
    Item.deleteOne({ _id: checkedItemId })
      .then(() => {
        console.log("Deleted item with _id: " + checkedItemId); // success
        res.redirect("/");
      })
      .catch((err) => {
        console.log(err); // failure
      });
  } else {
    // find list, and delete from list array the specifc item
    List.findOneAndUpdate(
      { name: listName },
      { $pull: { items: { _id: checkedItemId } } },
      (err, foundList) => {
        if (err) {
          console.log(err);
        } else {
          res.redirect("/" + listName);
        }
      }
    );
  }
});
```

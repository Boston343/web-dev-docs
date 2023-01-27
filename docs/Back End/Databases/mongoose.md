---
sidebar_position: 4
---

# Mongoose

Popular node library for using MongoDB.

## Mongoose Installation

After creating your project, use `npm i mongoose` to install it for the project.

## Connecting to Local MongoDB

```js
// this will connect to the db "fruitsDB", and will create it if it doesn't already exist
mongoose.connect("mongodb://localhost:27017/fruitsDB", {
  useNewUrlParser: true,
});
```

## Mongoose CRUD

`insertMany()` and other model function [here](https://mongoosejs.com/docs/api/model.html).

### CREATE

```js
import mongoose from "mongoose";

// this will connect to the db "fruitsDB", and will create it if it doesn't already exist
mongoose.connect("mongodb://localhost:27017/fruitsDB", {
  useNewUrlParser: true,
});

const fruitSchema = new mongoose.Schema({
  name: String,
  rating: Number,
  review: String,
});

// mongoose will auto make it plural "fruits"
const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit({
  name: "Apple",
  rating: 7,
  review: "Pretty solid fruit.",
});

// save your new fruit into the database
fruit.save();
```

### READ

```js
// display all in collection "fruits"
Fruit.find((err, fruits) => {
  if (err) {
    console.log(err);
  } else {
    mongoose.connection.close(); // this is how you close the db connection

    fruits.forEach((fruit) => {
      console.log(fruit.name);
    });
  }
});
```

### DATA VALIDATION

[link](https://mongoosejs.com/docs/validation.html)

```js
const fruitSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    // could have [true, "this is message for when validation fails"]
  },
  rating: {
    type: Number,
    min: 1,
    max: 10,
  },
  review: String,
});
```

### UPDATE

[link](https://mongoosejs.com/docs/api/model.html#model_Model-update)

```js
// update the rating of "banana" to 9
Fruit.updateOne({ name: "banana" }, { rating: 9 }, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Successfully updated the document");
  }
});
```

### DELETE

[link](https://mongoosejs.com/docs/api/model.html#model_Model-deleteOne)

`Model.deleteOne()` or `deleteMany()`

```js
// deleteOne() example. This is synchronous and uses "await" rather than a callback function
const deleted = await Fruit.deleteOne({ name: "Apple" });
if (deleted.deletedCount === 1) {
  console.log("Apple was deleted.");
} else {
  console.log("There was an error and Apple was not deleted.");
}
```

```js
// deleteMany() example
const deletedPeople = await Person.deleteMany({ name: "John" });
if (deletedPeople.deletedCount >= 1) {
  console.log(deletedPeople.deletedCount + " Johns were deleted.");
} else {
  console.log("There was an error and Johns were not deleted.");
}
```

## Mongoose Relationships

Easiest option is to add as a sub-document. If you add the fruit and the person in the same run, the ObjectId will be the same.

```js
const peopleSchema = new mongoose.Schema({
  name: String,
  age: Number,
  favoriteFruit: fruitSchema,
});
const amy = new Person({
  name: "Amy",
  age: 12,
  favoriteFruit: banana,
});
```

## Example Project

For an example project, see TodoList [code](https://github.com/Boston343/TodoList).

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

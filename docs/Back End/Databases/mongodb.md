---
sidebar_position: 3
---

# MongoDB

How to perform CRUD operations and use relationships with MongoDB.

## MongoDB Installation

You can install the free community server **[here](https://www.mongodb.com/try/download/community)**.

Older **[instructions](https://medium.com/@LondonAppBrewery/how-to-download-install-mongodb-on-windows-4ee4b3493514)** on how to download and install MongoDB.

:::tip

When installing MongoDB, note where the `data` and `log` directory are located. Then add both `bin` folders to the "PATH" environment variable.

:::

Download the shell separately **[here](https://www.mongodb.com/try/download/shell)**.

## MongoDB CRUD

**[MongoDB CRUD Docs](https://www.mongodb.com/docs/manual/crud/)**

To start, open the mongo shell and start mongosh.

`show dbs` shows all databases and their storage.

`use [newDBname]` creates newDBname. Then inside databases you can create collections.

### CREATE

`db.collection.insertOne()` or `.insertMany()`, where you then pass the JS object with data. Note that "collection" is the database name.

### READ

`show collections` shows all collections in the database.

Queries look like `db.collection.find(query, projection, options)`. Reference is **[here](https://www.mongodb.com/docs/manual/reference/method/db.collection.find/#mongodb-method-db.collection.find)**.

:::info

Operator details like query, projection, and update operators can be found [here](https://www.mongodb.com/docs/manual/reference/operator/).

:::

Examples:

```js
// finds everything in "products" collection
db.products.find();
```

```js
// finds everything where name filed matches "Pencil"
db.products.find({ name: "Pencil" });
```

```js
// finds everything where the price is greater than 1
db.products.find({ price: { $gt: 1 } });
```

```js
// finds product with _id of 1, and only returns the "name" field
db.products.find({ _id: 1 }, { name: 1 });
```

### UPDATE

Reference **[here](https://www.mongodb.com/docs/manual/tutorial/update-documents/)**.

`db.collection.updateOne(filter, update, options)` updates one, can also use `.updateMany()`.

- filter: same as read operations "query" - what you are searching for
  - can have modifiers
- update: what you want to do on the item you fine
- options: additional options

Example:

```js
// adds "stock" field to item with _id of 1, and sets the value to 32
db.products.updateOne({ _id: 1 }, { $set: { stock: 32 } });
```

### DELETE

`db.collection.deleteOne(filter)` deletes one item with filter. There is also `.deleteMany()`.

Examples:

```js
// deletes all items in "products" collection
db.products.deleteMany();
```

```js
// deletes the row with a name of "Pencil"
db.products.deleteOne({ name: "Pencil" });
```

```js
// delete database as a whole
db.dropDatabase();
```

```js
// delete collection in database
db.collection.drop();
```

## MongoDB Relationships

First type of relationship is pretty obvious - you just include documents within the document. Like if you had reviews for a product, each review is a document.

Documents are anything in curly braces `{}`.

Example:

```js
db.products.insertOne({
  _id: 2,
  name: "Pencil",
  price: 0.8,
  stock: 12,
  reviews: [
    {
      authorName: "Bob",
      rating: 5,
      review: "Wow!",
    },
    {
      authorName: "Joe",
      rating: 1,
      review: "I can't believe you've done this.",
    },
  ],
});
```

You can also have another type of relationship that goes into a separate collection, using the `_id` field for instance.

## MongoDB REGEX

**[MongoDB and REGEX](https://data-flair.training/blogs/mongodb-regular-expression-regex/)**

**[REGEX details](https://learn.microsoft.com/en-us/dotnet/standard/base-types/regular-expression-options)**

## MongoDB with Node.js

There's a native driver, and a DOM model called "Mongoose". Mongoose is much more popular.

**[Native version docs](https://www.mongodb.com/docs/drivers/node/current/quick-start/)**

## MongoDB GUI - Studio 3T

**[Studio 3T](https://studio3t.com/)** is the most popular and up-to-date GUI for MongoDB.

I use it (free) personally and it's great.s

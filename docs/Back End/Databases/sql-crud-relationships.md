---
sidebar_position: 2
---

# SQL Details

How to perform CRUD operations and use relationships with SQL.

## SQL CRUD

### CREATE TABLE

Used to create a new table in a database.

[w3schools docs on CREATE TABLE](https://www.w3schools.com/sql/sql_create_table.asp)

`PRIMARY KEY` is a unique identifier for table.

`NOT NULL` means it is required to have a value or you can't create a row.

Example:

```sql
CREATE TABLE products (
  id INT NOT NULL,
  name STRING,
  price MONEY,
  PRIMARY KEY  (ID)
);
```

### INSERT INTO

Used to insert new records in a table.

[w3schools docs on INSERT INTO](https://www.w3schools.com/sql/sql_insert.asp)

Examples:

```sql
INSERT INTO products
VALUES (1, "Pen", 1.20);
```

```sql
INSERT INTO products (id, name)
VALUES (2, "Pencil");
```

### SELECT

Used to select data from a database. The data returned is stored in a result table, called the result-set.

[w3schools docs on SELECT](https://www.w3schools.com/sql/sql_select.asp)

Get specific columns with `SELECT * FROM products` or `SELECT name, price FROM products`.

Get rows using `WHERE` condition.

Example:

```sql
SELECT name, price FROM products WHERE name="Pen";
```

### UPDATE

Used to modify the existing records in a table.

[w3schools docs on UPDATE](https://www.w3schools.com/sql/sql_update.asp)

:::danger

Make sure to use `WHERE` otherwise all records will be updated!

:::

Example:

```sql
UPDATE products SET price = 1.3 WHERE name = "Pen";
```

### ALTER TABLE

Used to add, delete, or modify columns in an existing table. Also used to add and drop various constraints on an existing table.

[w3schools docs on ALTER TABLE](https://www.w3schools.com/sql/sql_alter.asp)

Example:

```sql
ALTER TABLE products ADD stock INT;
```

### DELETE FROM

Used to delete existing records in a table.

[w3schools docs on DELETE](https://www.w3schools.com/sql/sql_delete.asp)

:::danger

Make sure to use `WHERE` otherwise all records will be deleted!

:::

Example:

```sql
DELETE FROM products WHERE id = 2;
```

## SQL Relationships

### FOREIGN KEY

_FOREIGN KEY_ allows you to create links to other tables.

[w3schools docs on FOREIGN KEY](https://www.w3schools.com/sql/sql_foreignkey.asp)

Example:

```sql
CREATE TABLE orders (
  id INT NOT NULL,
  order_number INT,
  customer_id INT,
  product_id INT,
  PRIMARY KEY (id),
  FOREIGN KEY (customer_id) REFERENCES customers(id),
  FOREIGN KEY (product_id) REFERENCES products(id)
);
```

### INNER JOIN

_INNER JOIN_ keyword selects records that have matching values in both tables.

[w3schools docs on INNER JOIN](https://www.w3schools.com/sql/sql_join_inner.asp)

Example:

```sql
SELECT orders.order_number, customers.first_name, customers.last_name, customers.address
FROM orders
INNER JOIN customers ON orders.customer_id = customers.id;
```

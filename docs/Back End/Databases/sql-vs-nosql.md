---
sidebar_position: 1
---

# SQL vs NoSQL

The two main types of databases.

## SQL

SQL - **S**tructured **Q**uery **L**anguage

- SQL groups data into tables, which is good for things like names or addresses
- It is very good at relationships between data tables
  - ex. Can link `customers` table to `orders` table by `customer id`, and link `products` table to `orders` table by `product id`
- Not very flexible - doesn't like having gaps
  - Inserts a `null` if something isn't there, like if someone ops not to submit and email address

## NoSQL

NoSQL - **N**ot **O**nly **SQL**

- Can function like JSON objects. Things don't have to have all the same fields or same structure
- Non-relational - won't be as fast as SQL database for searching relational data
- More flexible, newer
- Better for scaling

## Popular Databases with Node

:::note

There are many database options out there. These are just a few.

:::

### Popular SQL Databases

- **[MySQL](https://www.mysql.com/)**
- **[PostgreSQL](https://www.postgresql.org/)**

### Popular NoSQL Databases

- **[MongoDB](https://www.mongodb.com/)**
- **[Redis](https://redis.io/)**

### MySQL vs MongoDB

|          MySQL           |               MongoDB                |
| :----------------------: | :----------------------------------: |
|           SQL            |                NoSQL                 |
|       More Mature        |            Shiny and New             |
|     Table Structure      |          Document Structure          |
|    Requires a Schema     |       More Flexible to Changes       |
| Great with Relationships | Not Great with Complex Relationships |
|    Scales Vertically     |         Scales Horizontally          |

## Create, Read, Update, Destroy

Otherwise known as _CRUD_ - these are the most important things you'll do with any database.

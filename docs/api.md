---
sidebar_position: 4
---

# APIs

API stands for **Application Programming Interface**. It allows applications to talk to each other.

## API Examples

### Joke API

**[Joke API](https://jokeapi.dev/)**

This has "/category" for different types of jokes.

Can also have parameters which append `?contains=debugging` as an example to search for the word "debugging". Susequent queries are separated by "&"

Ex. (https://sv443.net/jokeapi/v2/joke/Programming?blacklistFlags=nsfw&contains=debugging)

### OpenWeather API

**[OpenWeather API](https://openweathermap.org/current#name)**

To test this you need an api key. An example below will require you to put in your api key after "appid=". If you click on the link now you can see the result of an invalid API key.

Ex. (https://api.openweathermap.org/data/2.5/weather?q=Miami&units=imperial&appid=yourkeyhere)

## API Useful Tools

### Postman

**[Postman](https://www.postman.com/downloads/)** is a tool for testing APIs. It allows you to setup and save APIs nicely. It is a software you can install on your PC.

### JSON Viewer Pro

This is a browser extension. It allows displaying of JSON files nicely within your browser. It is an alternative to Postman for viewing (although Postman is still great for saving queries).

To find specific data, you can run your API call in web browser and use extension "JSON Viewer Pro" to copy path for data you want.

For the OpenWeather API, you will find that to get the Temperature you use `data.main.temp`.

## API Keys

:::danger

**DO NOT** upload your API keys to github!

:::

Set your keys in a file that is ignored using the .gitignore file. This is commonly done in a `.env` file.

## API Calls in JS

You can use the **[https node module](https://nodejs.org/docs/latest/api/https.html#httpsgetoptions-callback)** for get requests to external server APIs.

## JSON Functions

When you make an API call, the data is returned in JSON objects in a long string form. To get the actual data use `JSON.parse(string)`.

`JSON.stringify(object)` does the opposite and turns a JSON object into a string.

```js
res.on('data', (d) => {
  var received = JSON.parse(d); // converts to JSON objects
}
// Note: the opposite (turn JSON object into string) is "JSON.stringify(object);"
```

## Example Projects that Access APIs

### WeatherProject

This uses the OpenWeather API.

**https://github.com/Boston343/WeatherProject**

### Newsletter-Signup

This uses the Mailchimp API.

**https://github.com/Boston343/Newsletter-Signup**

Docs on Mailchimp:

- https://mailchimp.com/developer/marketing/docs/fundamentals/#the-basics
- https://mailchimp.com/developer/marketing/api/
- https://mailchimp.com/developer/marketing/api/lists/

## API Architecture

### REST API

REST is an architectural style for APIs. It stands for **RE**presentational **S**tate **T**ransfer.

Rules:

- GET is like READ from CRUD
- POST is like CREATE from CRUD
- PUT and PATCH are both like UPDATE from CRUD
  - PUT send entire block of data
  - PATCH sends only the specific piece of data requested
- DELETE is DELETE (duh)

Use specific pattern of routes / endpoint URLs.

#### Example Project with REST API

**https://github.com/Boston343/Wiki-REST-API**

Routes Available:

| HTTP Verbs |        /articles         |      /articles/:articleTitle      |
| :--------: | :----------------------: | :-------------------------------: |
|  **GET**   | Fetches ALL the articles | Fetches THE article :articleTitle |
|  **POST**  | Creates ONE new article  |                 -                 |
|  **PUT**   |            -             | Updates THE article :articleTitle |
| **PATCH**  |            -             | Updates THE article :articleTitle |
| **DELETE** | Deletes ALL the articles | Deletes THE article :articleTitle |

### GraphQL

From the **[GraphQL website](https://graphql.org/)**: GraphQL is a query language for APIs and a runtime for fulfilling those queries with your existing data. GraphQL provides a complete and understandable description of the data in your API, gives clients the power to ask for exactly what they need and nothing more, makes it easier to evolve APIs over time, and enables powerful developer tools.

I have not learned or used this yet :(

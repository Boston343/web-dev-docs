---
sidebar_position: 2
---

# Express

**[Express](https://expressjs.com/)** is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.

:::caution

This requires **[Node](node)** installed and setup.

:::

## Setup

In Hyper, create a new project, create file `index.js` or `app.js` and run `npm init` to generate "package.json" file.

Now in the folder run `npm install express`

## Express Routing

**[Routing](https://expressjs.com/en/starter/basic-routing.html)** refers to how an application’s endpoints (URIs) respond to client requests.

:::info

Express documentation on routing can be found [here](https://expressjs.com/en/guide/routing.html).

:::

### Request Methods

Express routing is modeled off of the **[HTTP request methods](https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol#Request_methods)**.

You define routing using methods of the Express `app` object that correspond to HTTP methods.

### Simple Routes

```js title="Respond with Hello World! on the homepage"
app.get("/", (req, res) => {
  res.send("Hello World!");
});
```

```js title="Respond to POST request on the root route (/), the application’s home page"
app.post("/", (req, res) => {
  res.send("Got a POST request");
});
```

```js title="Respond to a PUT request to the /user route"
app.put("/user", (req, res) => {
  res.send("Got a PUT request at /user");
});
```

```js title="Respond to a DELETE request to the /user route"
app.delete("/user", (req, res) => {
  res.send("Got a DELETE request at /user");
});
```

### app.route()

If you have multiple things (like GET, PUT, DELETE) that all have the same route, you can combine them like:

```js
// put the get, put, and delete functions are separate lines
// and treat them like app.get("/theRoute"), etc
app
  .route("/theRoute")

  .get()

  .put()

  .delete();
```

## Nodemon

**[Nodemon](https://nodemon.io/)** enables the server to auto-restart on changes. This is very useful for development / testing.

Install with `npm install -g nodemon`.

Then in your project run `nodemon app.js` (or whatever your server js file is).

Now, when you save changes, the server is automatically restarted with the new changes.

## Express Starter Code

If using CSM you can follow **[this](https://expressjs.com/en/starter/hello-world.html)**.

If using ESM (_do itttttt_) don't forget to add the line in "package.json" of `"type": "module",`. Then:

```js title="app.js"
import express from "express"; // npm install express
import dotenv from "dotenv"; // npm install dotenv
import path from "path";
import { fileURLToPath } from "url";

// __dirname is only available with CJS. Since I am using ESM I need to get it another way
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// static items like other js or css files will not load unless you define where the server should
//      start looking for those files.
app.use(express.static(path.join(__dirname, "/public")));

// setup express
const app = express();
const port = process.env.PORT || 3000;

// this is for parsing data from html form
app.use(express.urlencoded({ extended: true }));

app.listen(port, () => {
  console.log(`Server is listening on port ${port} at \"localhost:${port}\"`);
});

app.get("/", (req, res) => {
  console.log("Server is up and running.");
  // This tells server what to do when someone goes to '/' which is the website root.
  // 'req' is the request - has a ton of browser information of requester
  // 'res' is the response - what server sends back to user
});
```

## Example Project

For a fairly basic example project, see Newsletter-Signup **[code](https://github.com/Boston343/Newsletter-Signup)** and **[website](https://fast-bald-mammal.glitch.me/)**

:::note

This is hosted for free on Glitch.com, and will likely take a few seconds to wake up.

:::

```js
import express from "express"; // npm install express
import dotenv from "dotenv"; // npm install dotenv
import path from "path";
import https from "https"; // for forming external get requests
import { fileURLToPath } from "url";

dotenv.config(); // gets the .env data for use with process.env.
const app = express();
const port = process.env.PORT || 3000;
app.use(express.urlencoded({ extended: true })); // this is for parsing data from html form

// __dirname is only available with CJS. Since I am using ESM I need to get it another way
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// static items like other js or css files will not load unless you define where the server should
//      start looking for those files.
app.use(express.static(path.join(__dirname, "/public")));

// -------------------------------------------------------------
// ---------------------- Listening ----------------------------
// -------------------------------------------------------------
app.listen(port, () => {
  console.log(`Server is listening on port ${port} at \"localhost:${port}\"`);
});

// -------------------------------------------------------------
// --------------------- Get Requests --------------------------
// -------------------------------------------------------------
app.get("/", (req, res) => {
  console.log("Server is up and running.");

  const fileName = "signup.html";
  res.sendFile(path.join(__dirname, "/src/" + fileName));
  console.log("Sent:", __dirname + "/src/" + fileName);
});

// -------------------------------------------------------------
// -------------------- Post Requests --------------------------
// -------------------------------------------------------------
//  main functionality
app.post("/", (req, res) => {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const email = req.body.email;

  // console.log("First Name: " + firstName);
  // console.log("Last Name: " + lastName);
  // console.log("Email: " + email);

  // create mailchimp data JSON to batch subscribe or unsubscribe users
  // https://mailchimp.com/developer/marketing/api/list-member-events/
  const newData = {
    members: [
      {
        email_address: email,
        status: "subscribed",
        merge_fields: {
          FNAME: firstName,
          LNAME: lastName,
        },
      },
    ],
  };

  // turn the JSON object into one long string for sending
  const jsonData = JSON.stringify(newData);

  // setup mailchimp post request
  const mailchimpURL =
    "https://" +
    process.env.MAILCHIMP_SERVER +
    ".api.mailchimp.com/3.0/lists/" +
    process.env.MAILCHIMP_LISTID;
  const options = {
    method: "POST",
    auth: "Reap3r:" + process.env.MAILCHIMP_KEY,
  };

  // create mailchimp post request
  const mailchimpRequest = https.request(mailchimpURL, options, (response) => {
    console.log(
      "status: " + response.statusMessage + " (" + response.statusCode + ")"
    );
    response.on("data", (data) => {
      console.log(JSON.parse(data));
      var mailchimpResponse = JSON.parse(data);

      var htmlResponsePage;
      if (response.statusCode === 200) {
        if (mailchimpResponse.error_count === 0) {
          // send success feedback to user
          htmlResponsePage = "success.html";
        } else {
          htmlResponsePage = "failure.html";
          var error_code = mailchimpResponse.errors[0].error_code;
          var error = mailchimpResponse.errors[0].error;
          // mailchimp has identified an error, log it
          // res.send("<h3>" + error_code + ": " + error + "</h3>");
          console.log("Mailchimp error: " + error_code + ": " + error);
        }
      } else {
        // send failure feedback to user
        htmlResponsePage = "failure.html";
      }

      res.sendFile(path.join(__dirname, "/src/" + htmlResponsePage));
      console.log("Sent: " + __dirname + "/src/" + htmlResponsePage);
    });
  });

  // make mailchimp post request with our data to add a person to email list
  mailchimpRequest.write(jsonData);
  mailchimpRequest.end();
});

// -------------------------------------------------------------
//  failure page functionality for button to try again
app.post("/failure", (req, res) => {
  res.redirect("/");
});
```

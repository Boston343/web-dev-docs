---
sidebar_position: 5
---

# Security and Authentication

Examples of encryption, hashing, salting, cookies, sessions, 0Auth, and more.

## Secrets Needed in Code

A lot of times you will need access to secrets in your code. These could be things like your encryption key, and API keys.

:::warning

If someone gets access to your keys it is very bad news.

:::

Good news is, there are ways to protect them.

### Environment Variables

Environment variables allow you to keep track of secrets. You should _never_ upload these to github.

You put them in a file `.env`. You can access them in your code using [dotenv](https://www.npmjs.com/package/dotenv).

```js
import dotenv from "dotenv";

// gets the .env data for use with process.env.
dotenv.config();

// now it is used like this. The name of environment varialbe in .env is "ENC_KEY" in this case
const secret = process.env.ENC_KEY;
```

### .gitignore

You can use the `.gitignore` file to keep various files or folders from being uploaded to github. Always set this up! An example file is below.

```bat title=".gitignore"
# See https://help.github.com/articles/ignoring-files/ for more about ignoring files.

# dependencies
/node_modules
/.pnp
.pnp.js

# testing
/coverage

# production
/build

# misc
.DS_Store
.env
.env.local
.env.development.local
.env.test.local
.env.production.local

npm-debug.log*
yarn-debug.log*
yarn-error.log*

```

## Security Levels

1. Username and Password Only
2. Encryption
3. Hashing (with md5)
4. Hashing and Salting (with bcrypt)
5. Cookies and Sessions
6. OAuth Authentication

### 1. Username and Password Only

This is the most basic - simply storing username and password in plaintext in a database.

If the database is hacked then all user and password combinations are visible - **bad!**

### 2. Encryption

We can encrypt the password field as the next level of security. The password is obviously the most important thing to encrypt.

Downside of this is it doesn't protect against someone with admin access to the website from finding out user passwords, because they can get the encryption key.

With MongoDB and Mongoose, we can use a package [mongoose-encryption](https://www.npmjs.com/package/mongoose-encryption).

```js title="app.js - relevant code"
import encrypt from "mongoose-encryption";

// schema
const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "ERROR: You need a username."],
  },
  password: {
    type: String,
    required: [true, "ERROR: You need a password."],
  },
});

// setup database encryption
const secret = process.env.ENC_KEY;
userSchema.plugin(encrypt, { secret: secret, encryptedFields: ["password"] });

// model: mongoose will auto make it plural "users"
const User = mongoose.model("User", userSchema);
```

### 3. Hashing with md5

Passwords can still be hacked form level 2. So what about another method. Here, we don't store the password or encrypted password on DB, but instead store a _hash_ off the password.

When a user inputs a password, you hash it, and compare that hash to the hash in the DB. If they match then the password is correct.

We can use package [md5](https://www.npmjs.com/package/md5) for this.

```js
import md5 from "md5";

// this runs the md5 hash function on password. This value is what you should store in the DB
md5(password);
```

### 4. Hashing and Salting with bcrypt

[bcrypt](https://www.npmjs.com/package/bcrypt) is a slower hashing algorithm than md5 (much slower) so it's more secure. This is because it would take an attacker much longer to brute force the passwords.

_Salting_ is appending a random string to the end of the password, before hashing. This makes it so that even if two users have the same password, the hash will be different.

Notes:

- You store the salt in the DB
- You can increase security by increasing the number of _salt rounds_
  - Each increase in salt rounds increases the time it takes to has by 2

```js
import bcrypt from "bcrypt";
const saltRounds = 10;

bcrypt.hash(myPlaintextPassword, saltRounds, function (err, hash) {
  // Store hash in your password DB.
});

// Load hash from your password DB.
bcrypt.compare(myPlaintextPassword, hash, function (err, result) {
  // result == true
});
```

### 5. Cookies and Sessions

For this you can use [passport](https://www.npmjs.com/package/passport), [passport-local](https://www.npmjs.com/package/passport-local), [express-session](https://www.npmjs.com/package/express-session), and with MongoDB / mongoose use [passport-local-mongoose](https://www.npmjs.com/package/passport-local-mongoose).

:::info

For an usage example, see `Secrets` on branch `passport-cookies-sessions` [here](https://github.com/Boston343/Secrets/tree/passport-cookies-sessions). This includes authentication, registration, logon, and logoff.

:::

further documentation on passport.js usage details [here](https://www.passportjs.org/concepts/authentication/strategies/) and [here](https://mherman.org/blog/user-authentication-with-passport-dot-js/).

### 6. OAuth Authentication

OAuth is short for "Open Authentication" and allows us to add the capability for users to log on with trusted platforms, such as Google, Twitter, Facebook, etc. Users are redirected to login with the service in question, and an _Auth Code_ is sent back to our website (like a one time access). We can also get an _Access Token_ which is valid for a lot longer than an _Auth Code_ (like a year pass).

The _Access Token_ is what we can use to access data from people on that application (to which they have granted us access).

Passport requires a `findorcreate` function to work with your DB. With MongoDB and Mongoose this is a useful package [mongoose-findorcreate](https://www.npmjs.com/package/mongoose-findorcreate).

#### 6a. Google OAuth 2.0 Authentication

For this, use Passport strategy [passport-google-oauth20](https://www.passportjs.org/packages/passport-google-oauth20/).

#### 6b. Facebook OAuth 2.0 Authentication

For this, use Passport strategy [passport-facebook](https://www.passportjs.org/packages/passport-facebook/).

:::note

While implementing this I ran into issues testing. It seems like you _MUST_ have your website setup as HTTPS. Useful links [here](https://programmerblog.net/nodejs-https-server/) and [here](https://stackoverflow.com/questions/43416880/setting-node-server-https).

:::

## Authentication Example Project

[This](https://reap3r-secrets.glitch.me/) is an example project I made using salting, hashing, and OAuth. You can test out the registration and login, although the 0Auth is limited to test accounts.

Code can be found [here](https://github.com/Boston343/Secrets).

Below is what the database entries look like for the app:

import secretsDB from './img/secrets_db.jpg';

<img src={secretsDB} alt="Secrets DB Entries" style={{width:900}}/>

## Other Authentication Resources

Node.js passport login system tutorial (36 min) [link](https://www.youtube.com/watch?v=-RCnNyD0L-s).

Local authentication using passport in Node.js (docs) [link](https://www.sitepoint.com/local-authentication-using-passport-node-js/).

User authentication in web apps with passport, node, express (6 hours) [link](https://www.youtube.com/watch?v=F-sFp_AvHc8).

User authentication with passport and express 4 (docs) [link](https://mherman.org/blog/local-authentication-with-passport-and-express-4/).

Permissions / access control in web apps (docs) [link](https://wasp-lang.dev/blog/2022/11/29/permissions-in-web-apps).

---
sidebar_position: 2
---

# Backend as a Service

Backend as a Service, or BaaS, is a key piece to simplifying your deployment of backend services, without managing the infrastructure yourself.

## Headless CMS

CMS stands for Content Management System. Headless CMS' are back-end-only CMS that separate the content management from the presentation layer (website front-end). This means that the content can be managed in one place, but it can be displayed on any device or platform, using any technology.

These are different from traditional CMS, which include both content management and presentation, but don't allow for data to be displayed on any other platform other than what the CMS was originally designed for.

Headless CMS allow you to have more flexibility in how you display your content, as you can use whatever you want.

:::tip

For it to be a _real_ headless CMS, it should completely manage the security and infrastructure of the CMS. This means you only need to focus on the content, and not on keeping the CMS up-to-date patching any issues or vulnerabilities.

:::

links:

- https://jamstack.org/headless-cms/
- https://www.oberlo.com/blog/markdown-editors
- https://seedium.io/blog/netlify-vs-strapi/
- https://www.cmswire.com/digital-experience/9-challenges-of-scaling-a-headless-cms/

### Headless CMS Types

There are API based, and Git based CMS. Most are API based where you access the content through API. Git based ones manage it in a git repository, either theirs or your own.

### Sanity

Free to start out but will quickly start billing you by usage - only 10GB/mo bandwidth for free. This is a popular headless CMS.

- Free for 3 non-admin users and unlimited free admin users
- [Netlify Integration](https://www.netlify.com/integrations/sanity/) for site rebuilds from within Sanity
- [Pricing Info](https://www.sanity.io/pricing)
- [Astro and Sanity Blog](https://www.sanity.io/guides/sanity-astro-blog)
- [Next.js and Sanity Starter](https://github.com/sanity-io/nextjs-blog-cms-sanity-v3/)
- [Astro and Sanity Starter](https://github.com/littlesticks/astro-sanity-minimal-starter)
  - And a [Youtube guide](https://www.youtube.com/watch?v=-jAWLTfsSQw)

### Storyblok

- Free option with 1 user
- [Netlify Integration](https://www.netlify.com/integrations/storyblok/) for site rebuilds from Storyblok
- [Astro Integration](https://github.com/storyblok/storyblok-astro) `@storyblok/astro`
  - `npm install @storyblok/astro`
- https://www.storyblok.com/tp/add-a-headless-cms-to-astro-in-5-minutes
- https://www.smashingmagazine.com/2023/02/building-future-proof-high-performance-websites-astro-islands-headless-cms-storyblok/
- https://dev.to/jgierer12/astro-storyblok-ssr-preview-for-instant-visual-editing-3g9m

### Sanity vs Storyblok

This is my comparison of their free plans (monthly). Their plans can change over time so best to double check on their websites.

|           Sanity            |               Storyblok               |
| :-------------------------: | :-----------------------------------: |
|      500k CDN Requests      |                                       |
| 10 GB Bandwidth (+$1 / 5GB) |            250GB Bandwidth            |
|      3 non-admin seats      |          1 seat (+$9 / seat)          |
|    Unlimited admin seats    | No distinction between user and admin |
|         2 datasets          |               1 project               |
|   5 GB assets (+$1 / 2GB)   |     2500 assets, up to 15MB each      |
|        10k documents        |              25k stories              |
| custom preview environment  |        2 preview environments         |

### Tina

[Tina](https://tina.io/) is a git based CMS which edits the contents of your git repository. It has a decent free option with 2 users.

- Great support with Next.js, Docusaurus, but can integrate into any SSG (including Astro)
  - [Tina info on Astro](https://tina.io/docs/frameworks/astro/)
    - Add to astro [guide](https://tina.io/guides/tinacms/non-react-based-ssg/guide/)
  - [Astro docs on Tina](https://docs.astro.build/en/guides/cms/tina-cms/)
- [Tina docs](https://tina.io/blog/using-graphql-with-the-filesystem/) on how to use graphql with the filesystem
- [How media works](https://tina.io/docs/reference/media/overview/) with Tina CMS
- [Contextual editing](https://tina.io/docs/contextual-editing/overview/) with Tina
- Tina [Github repo](https://github.com/tinacms/tinacms)

## Forms

[Article](https://matt-spence.com/medium/developers-you-dont-always-need-a-coded-backend-for-your-forms) on forms without backend.

    		Prismic - headless CMS
    			Free option for 1 user and pretty cheap for a few users
    			https://prismic.io/pricing

    		Netlify CMS -  git based CMS
    			https://docs.astro.build/en/guides/cms/netlify-cms/
    			https://www.netlifycms.org/
    			https://jamstack.org/headless-cms/netlify-cms/
    			https://www.netlifycms.org/docs/add-to-your-site/
    			https://aalam.vercel.app/blog/astro-and-git-cms-netlify

    		Stackbit? - CMS or something that automates using Netlify CMS or something???
    			https://www.stackbit.com/
    			https://app.stackbit.com/login?redirect=%2Fdashboard

    		Wordpress
    			https://developers.wpengine.com/
    			GraphQL Plugin: https://www.wpgraphql.com/
    			https://www.netlify.com/blog/2020/03/23/migrate-your-wordpress-site-to-the-jamstack/
    			https://css-tricks.com/wordpress-and-jamstack/
    			https://pagepro.co/blog/migration-from-wordpress-to-jamstack/
    			Astro theme:
    				https://astro.build/themes/details/astro-wordpress-starter/

    	Netlify Forms
    		https://www.netlify.com/products/forms/
    		https://blog.logrocket.com/how-to-send-emails-react-app-netlify-functions/

    	SendGrid - email sending service
    		https://sendgrid.com/
    		Integrates nicely with Netlify forms
    		https://slawinski.dev/blog/start-sending-emails-using-netlify-lambda-functions-and-sendgrid/
    		*pretty good free plan*

    	MailChimp - email and marketing tool
    		https://mailchimp.com/
    		https://carouth.com/articles/netlify-function-mailchimp/
    		*better for more integrated full business solution (paid)*

    	SendGrid v Mailchimp: https://www.fool.com/the-ascent/small-business/email-marketing/sendgrid-vs-mailchimp/

    	Email JS - send email directly from your js code
    		https://www.emailjs.com/
    		Guide: https://www.youtube.com/watch?v=G-Cr00UYokU @ 2:58:00
    		To use:
    			Login
    			Under "Email Services", link to an email service you wish to use (like gmail)
    				It will use this email to send messages to whatever email you desire
    			Under "Email Templates" create a new template
    				For your website forms, whatever you "name" them like `name="email"`, you can use {{email}} in EmailJS to get that data
    					https://www.emailjs.com/docs/user-guide/dynamic-variables-templates/
    		React:
    			https://www.emailjs.com/docs/examples/reactjs/
    			Install: `npm install @emailjs/browser --save`

    	Algolia DocSearch - Search Provider
    		https://www.algolia.com/
    		Searchbar provider that uses keyword search. Pretty cheap at $1/month/1000 requests and storage. Pay as you go
    		Free with Netlify I believe
    		They provide you the information you need to put in your code for it to work.
    			Integrates super nice with Docusaurus

    	DataStax - database as service?
    		https://www.datastax.com/

    	Peek - Booking software, advertised for experiences
    		https://www.peek.com/

    	Backend As A Service
    		https://www.youtube.com/watch?v=SXmYUalHyYk

    		Firebase
    			Nice to implement, but hard if you want to change providers in the future
    			Probably the easiest to get started
    			It basically locks you into Google
    			Cloud Firestore - the DB this uses
    				NoSQL

    		AWS	Amplify
    			Lambda - server side functions
    				https://docs.aws.amazon.com/lambda/latest/dg/welcome.html
    			DynamoDB - the DB this uses
    				Auto creates GraphQL API
    				Has no-code solution for setting up data relationships
    				Can make searchable with elastic search
    					This is a missing feature in Firebase
    			Cognito - Authentication. Feels more mature than Firebase offering
    				Can create user groups to control who has access to what
    			This also suffers from vendor lock-in

    		Supabase
    			https://www.youtube.com/watch?v=9CuTxeioKF4
    			https://www.youtube.com/watch?v=n7M_4Kc8DGc
    			Has main things like Database, Authentication, Storage, and Edge Functions (serverless)
    			Open source!
    			No hosting, so you'll have to host yourself on something like Netlify or Vercel
    			Has free tier, limited to only 2 projects
    				Free projects are paused after 1 week of inactivity
    			Paid starts at $25/mo. Can have up to 100,000 users
    			Postgres - the DB this uses
    				flexible and standard way to monitor data
    				no vendor-lock in as Postgres is standard and you could host it anywhere
    				Relational databases are easy to work with
    				Works nicely with Auth for row level authentication
    				Has fulltext search

    		NHost
    			Open source Firebase alternative with GraphQL
    			Similar pricing to Supabase
    			First class support for React
    				Provides hooks to perform authentication with single line of code
    			Postgres - the DB this uses
    				Best feature - the Postgres DB is also a GraphQL API. This uses Hasura
    				Sometimes you'll need to go to Hasura directly to perform actions
    					Security rules
    				To access DB in app, you'll be working with Apollo (library) and GraphQL
    					This has a learning curve

    		Appwrite
    			Same infrastructure pieces as NHost and Supabase
    			SDKs for both web and mobile
    			Not a commercial product yet, so you self-host using one line docker deploy to DigitalOcean
    			Database is SQL as NoSQL, based on MariaDB
    				NoSQL API to work with traditional SQL DB
    				Doesn't support GraphQL yet

    		MongoDB Realm
    			Syncs data from MongoDB Atlas to any web or mobile platform
    			Mostly focused on Mobile development
    			More advanced from a dev perspective, but it makes sense to use if you're already using MongoDB
    				Can generate GraphQL api for DB
    			Has authentication but it is more limited than other platforms

    Examples
    	Astro framework w/ Netlify w/ Supabase (and PolyScale)
    		https://www.netlify.com/blog/querying-supabase-from-the-edge-with-polyscale/
    	Netlify + Supabase
    		https://www.youtube.com/watch?v=n7M_4Kc8DGc

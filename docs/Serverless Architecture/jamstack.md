---
sidebar_position: 1
---

# Jamstack

Jamstack stands for Javascript, APIs, and Markup (stack). It is a newer serverless web architecture, where you decouple the front and backend of a website. So instead of rolling your own back-end, you make use of other services through APIs to add back-end features, where you do not have to manage the infrastructure. These can include authentication, shopping carts, emails, and more.

## Serverless Functions

Serverless functions are a key piece of serverless architecture. They allow you to add backend functionality to your website, without having to manage provisioning of servers, or scaling our application. This allows devs to ship faster and easier since they only have to focus on the code. Use cases include authentication, processing media, database changes / events, SMS or Email events, payment processing, and more.

### Providers that Support Serverless Functions

- Netlify has "Netlify Functions"
- Cloudflare Pages has "Pages Functions" which are their "Workers"
- Vercel has "Serverless Functions"

The above all have generous free tiers, and have slightly different capabilities and limitations.

Under the hood, Netlify and Vercel both use AWS "Lambda Functions", so you could go directly to the source and use Lambdas. Other cloud providers have similar offerings, such as Google "Cloud Functions" for Firebase, and Microsoft "Azure Functions".

## Jamstack Website Hosting

Popular jamstack website hosting providers include Netlify, Vercel, and Cloudflare Pages. They can also be deployed on various cloud service providers. The below information is on Netlify as that is what I have been using and am most familiar with, although other providers have similar capabilities.

### Netlify

#### Netlify Site Deploys

Multiple ways to deploy on Netlify. The easiest way is to link to your github repo. Docs [here](https://docs.netlify.com/site-deploys/create-deploys/).

- [Deploy Button](https://docs.netlify.com/site-deploys/create-deploys/#deploy-to-netlify-button)
- [API](https://docs.netlify.com/api/get-started/#deploy-with-the-api)
- [Build Hooks](https://docs.netlify.com/configure-builds/build-hooks/)
- [Zapier Integration](https://docs.netlify.com/site-deploys/create-deploys/#zapier-integrations)
  - Ex. rebuild daily, or on tweet
  - Could also likely use IFTTT with Build Hooks

#### Netlify Edge Functions

These are serverless functions that **run at the edge**. That's fancy speak for they run on the closest servers to where a user is located. This makes them quicker than normal serverless functions.

Edge functions allow you to serve content from the CDN server closest to the user. This allows for localized content, and reduced latency because it's on the _edge_.

:::tip

Use cases include:

- Conditional routing (based on cookies, request headers, geolocation, etc)
  - Present relevant ads
  - Personalizing by geolocation
- authenticate visitors
- setting a cookie value in user's browser
- A/B test content

:::

:::note

Netlify edge functions are limited to 50ms; so they are better suited for shorter, performance-critical operations running at beginning of request chain.

:::

##### Further Netlify Edge Resources

- [Netlify Edge Function Docs](https://docs.netlify.com/edge-functions/overview/)
- [Edge Functions Explained](https://www.netlify.com/blog/edge-functions-explained/)
- [Examples](https://edge-functions-examples.netlify.app/)
  - [Astro site edge rendered](https://www.netlify.com/blog/how-to-deploy-astro/#astro-as-an-edge-rendered-site)

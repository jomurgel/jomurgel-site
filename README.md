
# jomurgel

This is my personal website build on [Next.js](https://nextjs.org/) and bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) with a few extras.

## The Journey
As of 2021 [jomurgel.com](https://jomurgel.com) was built on [WordPress](https://wordpress.org). I build website at my day job on WordPress and can still honestly say that for most people and most applications it's a pretty decent choice. Checks all the boxes, as it were, for ease of setup, out-of-the-box features, etc.

For me, however, it was overkill. I work with WordPress daily and there are a lot of things about the WordPress CMS that I feel are either not needed, overkill, or clunky. It's also very hard for me to want maintain and didn't lend itself well toward my writing process and feels a little out of date. I started down a path of building a custom React-based PWA and then worked toward the idea of using React and [Next.js](https://nextjs.org/) to build the site to handle a lot of the SSR and resource management that I would have to otherwise build out manually. It was a no-brainer.

This change to [Next.js](https://nextjs.org/) ends up improving my process for creating content, provided me an opportunity to really hone my dev process, and removed a lot of the frustration with website management. Specifically I'd ditch the CMS in favor of self-managed markdown files using [IA Writer](https://ia.net/writer).

Simultanously I'd give the site a slight refresh, though generally speaking I really still like the design I came up with back in 2018, fix some security issues, and move away from WordPress entirely which is the right move for me.

## Development
### Getting Started
First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

### Learn More
To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Support
This site adds additional support for a few things to make things a little easier for development and better for web use.
- [next/seo](https://github.com/garmeeh/next-seo)
- [Google Analytics](https://github.com/vercel/next.js/tree/canary/examples/with-google-analytics)
- [ESLint](https://github.com/vercel/next.js/tree/canary/examples/with-eslint) + Typescript support
- [Jest](https://github.com/vercel/next.js/tree/canary/examples/with-jest) testing
- [Github Pages](https://github.com/vercel/next.js/tree/canary/examples/gh-pages) deployment support
This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.jsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.


Here page.jsx is mostly rendered in required components
Layout => wrap all the pages
helps in wrapping all components with a default layout described here in RootLayout
Layout is used to have same layout for entire app while importiing children components too

In next js -> all compnents are rendfered on the server side thats why it takes too low loading up time and provides fast usage reliabilty 

Now In next.js callback functions and events can only be used in client side components
-> "use client"  -> this string can make a component act as client component to server 

-> we make a component to render as client side when we want to use callback fucntions or onclick action
OR Sign useState or useEffect
Recommended -> TO fetch data always use server side compoennts as its easier for SSR

In NEXT 12 TO fetch from API_KEy we need to use getstaticprops() not in Next13 => use fetch

Map through each results in form of res.results as objects

To addd fucntionalties like onClick or any fucntions to button related to results, we will need client side components=>
make a client side separately

In a client component we can use Link component to link to a different location

Whenever you try to fetch data from external site 
update next.config.js
Here as images:{
    domains:[image.tmdb.org],
}
 images:{
    domains: ["image.tmdb.org"],
    remotePatterns:[
      {
        protocol:'https',
        hostname:"image.tmdb.org",
        port:'',
        
      }
    ]
  },

  To add a grid look to page
 Add gridTemplateColumns and define css accordingly in tailwind.coinfig.css and call by classname = 'grid-cols-fluid' here name = fluid in classname

  theme: {
    extend: {
      fontFamily:{
        montserrat:["var(--font-montserrat)"]
      },
      gridTemplateColumns:{
        fluid:"repeat(auto-fit,minmax(15rem,1fr))"
      }
    },
  },
  plugins: [],

For padding and margins for overallpages or css for overall add css ClassName to Layout

NEXT STEP
Aftere rendering front page we need to send user to each movie;s specific page for the popularity and other features of movie
So, Create a dynamic folder by writing name of folder under []
Ex - [movie] under there make a page.jsx and define structure for each movie page

Now display all feature  in specific pages and revalidate the fetch api with revalidate: key set to a timer

Now to server the data statically without fetching from api each time

generateStaticParams()
export async function generateStaticParams(){
   
     return res.results.map((movie)=> ({
        movie:toString(movie.id),
     }))
}
To make the deatils available as a static page rendering
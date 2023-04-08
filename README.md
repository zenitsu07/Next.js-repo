This project involves implementing the API requests anf fetching data from API and rendering the data from TMDB Api to build a Next.js Movie Application which involves using Tailwind.css for CSS part of site and utilising  Postman Platform to check the validation of API requests made through the server.

Here page.jsx is mostly rendered in required components
Layout => wrap all the pages
helps in wrapping all components with a default layout described here in RootLayout
Layout is used to have same layout for entire app while importiing children components too

In next js -> all compnents are rendfered on the server side thats why it takes too low loading up time and provides fast usage reliabilty 

Now In next.js callback functions and events can only be used in client side components
-> "use client"  -> this string can make a component act as client component to server 


Recommended -> TO fetch data always use server side compoennts as its easier for SSR

In NEXT 12 TO fetch from API_KEy we need to use getstaticprops() not in Next13 => use fetch

To addd fucntionalties like onClick or any fucntions to button related to results, we will need client side components=>
make a client side separately

Whenever you try to fetch data from external site Update next.config.js in order to render the Image data fetched to our app
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

NEXT STEP
Aftere rendering front page we need to send user to each movie;s specific page for the popularity and other features of movie
So, Create a dynamic folder by writing name of folder under []
Ex - [movie] under there make a page.jsx and define structure for each movie page

Now display all feature  in specific pages and revalidate the fetch api with revalidate: key set to a timer

Now to serve the data statically without fetching from api every time,We use  generateStaticParams()

export async function generateStaticParams(){
   
     return res.results.map((movie)=> ({
        movie:toString(movie.id),
     }))
} in main page.jsx 
To make the details available as a static page rendering

import './globals.css'

//impiort gin font from google
import {Montserrat} from "@next/font/google"

const montserrat = Montserrat({
  weight: ["400","700"],
  subsets:["latin"],
  variable:"--font-montserrat",
})
//now we can save it in taileind.config.css to use everywhere
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.jsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      
        helps in wrapping all components with a default layout described here in RootLayout
      */}

      <head />
      
      <body className ={`${montserrat.className} mx-36 my-20`}>
        {/* <nav>
          
        </nav> */}
        {children}
      </body>
      
    </html>
  )
}

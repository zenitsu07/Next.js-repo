import Image from "next/image"
export async function generateStaticParams(){
    const data = await fetch(
        `https://api.themoviedb.org/3/movie/${params.params.id}?api_key=8c1cb32789967e8af995cab029ae128a`,
        {next:{revalidate:0} }        
    )
     const res = await data.json();

     return res.results.map((movie)=> ({
        movie:toString(movie.id),
     }))
}
//this funtion when pushed to production return a mapped array of movie idsd => It stores all movie Id's and now using below function sevre can render them out.
//Now every movies are pre-rendered static details and dont need them to fetch each time

export default async function MovieDetail(params){
    
    //params here as prop stores value of id as we have directed user to the movie;id url
    console.log(params.params, params.params.id)
    const data = await fetch(
        `https://api.themoviedb.org/3/movie/${params.params.id}?api_key=8c1cb32789967e8af995cab029ae128a`,
        {next:{revalidate:0} }        
    )
        //revalidate key sets the timer for when the server will start fething data frmo api again
        //whne set to 0, It always fetches data
        //Here initially the fetch api is fetching data when first clicked on film but after that next clicks will load up the cached data instantly
    
        
        const res = await data.json();
    console.log(res)

    const imagePath ="https://image.tmdb.org/t/p/original";
    

    return (
        <div>
            <div className="mx-0">

                <h2 className="text-2xl">{res.title}</h2> 
                <h4>{res.tagline}</h4>
                <h2 className="text-s"> Runtime: {res.runtime} minutes</h2> 
                <h2 className="text-lg">Released_date:{res.release_date}</h2> 

                <h2 className="text-sm bg-blue-700 inline-block my-2 py-2 px-2 rounded">{res.status}</h2>
                
                <Image 
                    className=" my-12 w-full"
                    src={imagePath + res.backdrop_path} 
                    width= {1000}
                    height ={1000}
                    alt={res.title}
                    priority
                />
                <h2></h2>
                <p className="bg-blue-900 px-10 py-5" >{res.overview}</p>
            </div>
            
        </div>
    )

}
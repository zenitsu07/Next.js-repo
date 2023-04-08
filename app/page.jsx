import Movie from "./Movie"
export default  async function Home() {

  const data = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=8c1cb32789967e8af995cab029ae128a`)
  
  // const data = await fetch(`https://api.themoviedb.org/3/movie/550?api_key=8c1cb32789967e8af995cab029ae128a`)
    // throw new Error("failed to load data")
    const res = await data.json()
    console.log(res)
  
  return (
    
    <main>
      
        <div className="grid gap-12 grid-cols-fluid">
          {res.results.map(movie=>(
            
            <Movie 
                key = {movie.id}
                id = {movie.id}
                title = {movie.title}
                release_date = {movie.release_date}
                poster_path={movie.poster_path}

            />

          ))
          }
        </div>
    </main>
    
  )

}


export default  async function Home() {

  const data = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`)
  
  // const data = await fetch(`https://api.themoviedb.org/3/movie/550?api_key=8c1cb32789967e8af995cab029ae128a`)
    // throw new Error("failed to load data")
    const res = await data.json()
    console.log(res)
  
  return (
    
    <main>
      <h3 className='text-3xl font-bold underline'>  Hello next13</h3>
    </main>
    
  )

}

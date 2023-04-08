import Link from "next/link"
import Image from "next/image"

export default function Movie({title,release_date,id,poster_path}){

    const imagePath ="https://image.tmdb.org/t/p/original"
    return(
        <div>
            <h5>
                {title}
            </h5>
            <h2>
                realease data: {release_date}
            </h2>
            <Link href={`/${id}`}>
                <Image 
                src={imagePath + poster_path} 
                width= {800}
                height ={800}
                alt={title}
                 />
            </Link>
           
        </div>
    )

}
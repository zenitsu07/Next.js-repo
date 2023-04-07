"use client"

export default function Error({error, reset}){
    return(
        <div>
            This isn't working out!! {error.message}
            {/* error has message to show */}
            <button onCLick = {()=> reset()}>Reload</button>
        </div>
    )
}
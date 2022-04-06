import React from 'react'
import Moviethumbnail from './Moviethumbnail'

function MoviesCollection({results, title}) {
    return (
        <div className="relative flex flex-col space-y-2 my-10 px-8 max-w-[1400px] mx-auto">
            <h2 className="font-semibold">{title}</h2>
            <div className="flex">
            {results.map((res) => {
                <Moviethumbnail key={res.id} result={res} />
            })
            }
            </div>
        </div>
    )
}

export default MoviesCollection;

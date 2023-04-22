// image card with progressive image component

import React from 'react'
import ProgressiveImg from './progressiveimage'

export default function Imagecard({ poster }) {
    const placeholderSrc = "slices/placeholder_for_missing_posters.png";
    return (<>
        <div className="max-w-sm column">
            <ProgressiveImg
                src={"Slices/" + poster['poster-image']}
                placeholderSrc={placeholderSrc}
            />
            <div className="p-1">
                <h6 className="text-grey">{poster.name}</h6>
            </div>
        </div>
    </>

    )
}

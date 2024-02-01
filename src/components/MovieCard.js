import "./MovieCard.css";

import React from 'react'
import RentIcon from "./RentIcon";

export default function MovieCard({movie}) {
    console.log(movie)
    return (
        <div className='movieCard'>
            <RentIcon />
            <img src={movie.img}/>
        </div>
    )
}

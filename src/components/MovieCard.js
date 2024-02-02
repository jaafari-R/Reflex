import "./MovieCard.css";
import { Link } from 'react-router-dom'

import React from 'react'
import RentIcon from "./RentIcon";

export default function MovieCard({movie, toggleRentMovie}) {
    return (
        <div className='movieCard'>
            <RentIcon movie={movie} toggleRentMovie={toggleRentMovie} />
            <Link to={`/movies/${movie.id}`}>
                <img src={movie.img}/>
            </Link>
        </div>
    )
}

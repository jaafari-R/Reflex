import "./Movie.css";

import React from 'react';
import { useParams } from 'react-router-dom';

import RentIcon from './RentIcon';


export default function Movie({ catalog, toggleRentMovie }) {
    const { movieId } = useParams();
    const movie = catalog[movieId];

    return (
        <div className='movie'>
            <h3>{movie.title} {movie.year}</h3>
            <div className="image">
                <RentIcon movie={movie} toggleRentMovie={toggleRentMovie} />
                <img src={movie.img} />
            </div>
            <p>{movie.descrShort}</p>
        </div>
    )
}

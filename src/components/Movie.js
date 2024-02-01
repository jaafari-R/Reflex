import "./Movie.css";

import React from 'react';
import { useParams } from 'react-router-dom';

import ControlPointIcon from '@mui/icons-material/ControlPoint';
import RentIcon from './RentIcon';


export default function Movie({ catalog }) {
    const { movieId } = useParams();
    const movie = catalog[movieId];

    return (
        <div className='movie'>
            <h3>{movie.title} {movie.year}</h3>
            <div className="image">
                <RentIcon />
                <img src={movie.img}/>
            </div>
            <p>{movie.descrShort}</p>
        </div>
    )
}

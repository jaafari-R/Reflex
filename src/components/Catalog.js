import "./Catalog.css";

import React from 'react'
import { Navigate } from 'react-router-dom'
import MovieCard from './MovieCard'

export default function Catalog({ user, catalog, toggleRentMovie }) {
    return (
        user !== null ? 
            <div className="catalog">
                {catalog.map(movie => 
                    <MovieCard key={movie.id} movie={movie} toggleRentMovie={toggleRentMovie} />
                )}
            </div>
            :
            <Navigate to="/"/>
    )
}

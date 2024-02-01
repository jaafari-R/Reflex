import "./Catalog.css";

import React, { useEffect } from 'react'
import { Link, Navigate } from 'react-router-dom'
import MovieCard from './MovieCard'

export default function Catalog({ user, catalog }) {
    return (
            user ? 
            <div className="catalog">
                {catalog.map(movie => 
                    <Link to={`/movies/${movie.id}`}>
                        <MovieCard movie={movie}/>
                    </Link>
                )}
            </div>
            :
            <Navigate to="/"/>
    )
}

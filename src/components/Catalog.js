import "./Catalog.css";

import React, { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'

import SearchIcon from '@mui/icons-material/Search';

import MovieCard from './MovieCard'

export default function Catalog({ user, catalog, toggleRentMovie }) {
    const [search, setSearch] = useState("");
    const [showMovies, setShowMovies] = useState(catalog);

    useEffect(() => {
        const searchRegexText = search.split("").map(letter => 
            ".*" + letter
        ).join("") + ".*";
        const searchRegex = new RegExp(searchRegexText, "i");
        setShowMovies(catalog.filter(movie => 
            movie.title.search(searchRegex) !== -1
        ));
    }, [search, catalog])

    const handleChange = (setState) => (e) => {
        setState(e.target.value);
    }

    return (
        user !== null ? 
            <div>
                <div className="search">
                    <input onChange={handleChange(setSearch)} placeholder="Search Movie" />
                    <SearchIcon className="icon"/>
                </div>
                <h4>Rented:</h4>
                <div className="catalog">
                    {showMovies.filter(movie => user.rentedMovies.has(movie.id)).map(movie => 
                        <MovieCard key={movie.id} movie={movie} toggleRentMovie={toggleRentMovie} />
                    )}
                </div>
                
                <h4>Catalog:</h4>
                <div className="catalog">
                    {showMovies.map(movie => 
                        <MovieCard key={movie.id} movie={movie} toggleRentMovie={toggleRentMovie} />
                    )}
                </div>
            </div>
        :
        <Navigate to="/"/>
    )
}

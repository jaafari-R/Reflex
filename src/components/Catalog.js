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

        const rentedMovies =  showMovies.filter(movie => user.rentedMovies.has(movie.id));

    return (
        user !== null ? 
            <div className="rentMovies">
                <div className="search">
                    <input onChange={handleChange(setSearch)} placeholder="Search Movie" />
                    <SearchIcon className="icon"/>
                </div>
                
                { rentedMovies.length > 0 &&
                    <>
                    <h2>Rented Movies</h2>
                    <div className="catalog">
                        {rentedMovies.map(movie => 
                            <MovieCard key={movie.id} movie={movie} toggleRentMovie={toggleRentMovie} />
                            )}
                    </div>
                    <hr />
                    </>
                }

                <h2>Catalog</h2>
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

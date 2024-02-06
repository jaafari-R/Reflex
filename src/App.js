import "./App.css";

import { useEffect, useState } from "react"
import { BrowserRouter, Routes, Route, json } from "react-router-dom";

import Home from './components/Home';
import Catalog from './components/Catalog';
import Movie from './components/Movie';
import Navbar from "./components/Navbar";
import { CATALOG, MOVIE_COST, USERS } from "./constants";



function App() {
    const [currentUserIndex, setCurrentUserIndex] = useState(null);
    const [users, setUsers] = useState([]);
    const [catalog, setCatalog] = useState([]);

    useEffect(() => {
        const initUsers = 
            (localStorage.users && JSON.parse(localStorage.users))
            || USERS;
        setUsers(initUsers.map(user => {
            return {...user, rentedMovies: new Set(user.rentedMovies)}
        }));

        if(localStorage.currentUserIndex) {
            setCurrentUserIndex(localStorage.currentUserIndex);
        }
    }, []);

    useEffect(() => {
        if(users.length) {
            localStorage.users = 
                JSON.stringify(users.map(
                    user => {
                        return {...user, rentedMovies: [...user.rentedMovies]};
                    }));
        }
    }, [users])

    function getCatalog() {
        if(currentUserIndex === null) {
            return [];
        }

        return CATALOG.map(movie => {
            return {
                ...movie, isRented: users[currentUserIndex].rentedMovies.has(movie.id)
            }
        })
    }
    
    useEffect(() => {
        if(currentUserIndex !== null) {
            setCatalog(getCatalog());
            localStorage.currentUserIndex = currentUserIndex;
        }
    }, [currentUserIndex])

    const selectUser = (userId) => {
        const newCurrentUserIndex = users.findIndex(user => user.id === userId);
        setCurrentUserIndex(newCurrentUserIndex);
    }

    const toggleRentMovie = (movieId) => {
        const newCatalog = [...catalog];
        const updatedUser = users[currentUserIndex];
        const newUsers = [...users];

        const movieIndex = newCatalog.findIndex(movie => movie.id === movieId);
        
        if(!newCatalog[movieIndex].isRented && (updatedUser.budget - MOVIE_COST < 0)) {
            alert("Insufficient funds!")
            return;
        }
        else if(newCatalog[movieIndex].isRented) {
            updatedUser.rentedMovies.delete(movieId);
            updatedUser.budget += MOVIE_COST;
        }
        else {
            updatedUser.rentedMovies.add(movieId);
            updatedUser.budget -= MOVIE_COST;
        }
        
        newCatalog[movieIndex].isRented = !newCatalog[movieIndex].isRented;
        
        newUsers[currentUserIndex] = updatedUser;
        setCatalog(newCatalog);
        setUsers(newUsers);
    }
    
    return (
        <BrowserRouter>
            <div className="app">
                <Navbar user={users[currentUserIndex]} />

                <Routes>
                    <Route path="/" element={<Home users={users} selectUser={selectUser} />}/>
                    {currentUserIndex !== null && <>
                        <Route path="/catalog" element={<Catalog user={users[currentUserIndex]} catalog={catalog} toggleRentMovie={toggleRentMovie} />}/>
                        <Route path="/movies/:movieId" element={<Movie catalog={catalog} toggleRentMovie={toggleRentMovie} />}/>
                    </>}
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;

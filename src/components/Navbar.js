import "./Navbar.css";

import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export default function Navbar({ user }) {
    const location = useLocation();
    const navigate = useNavigate();

    if(!user && location.pathname != "/") {
        navigate("/");
    }

    return (
        <div className="navbar">
            <div className="userName">
                {user &&
                    <h2>Hello {user.name}</h2>
                }
            </div>
            <div className="userBudget">
                {user &&
                    <h2>Budget: 
                        <span className="budget" 
                            style={user.budget < 3 ? { color: "red" } : {color: "rgb(26, 196, 26)"}}
                        >${user.budget}</span>
                    </h2>
                }
            </div>
            <div className="links">
                <Link to="/"><h2>Home</h2></Link>
                <Link to="/catalog"><h2>Catalog</h2></Link>
            </div>
            <div className="logo">
                <h2>Reflex</h2>
            </div>
        </div>
    )
}

import "./Navbar.css";

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar({ user }) {

    return (
        <div className="navbar">
            <div className="userName">
                {user &&
                    <h5>Hello {user.name}</h5>
                }
            </div>
            <div className="userBudget">
                {user &&
                    <h5>Budget: <span className="budget">{user.budget}</span></h5>
                }
            </div>
            <div className="links">
                <Link to="/"><h4>Home</h4></Link>
                <Link to="/catalog"><h4>Catalog</h4></Link>
            </div>
            <div className="logo">Reflex</div>
        </div>
    )
}

import "./User.css";

import React from 'react'

export default function User({user, selectUser}) {
    return (
        <div className="user" 
        style={{backgroundColor: user.bgColor}}
        onClick={() => selectUser(user.id)}>    
            <h4>{user.name}</h4>
        </div>
    )
}

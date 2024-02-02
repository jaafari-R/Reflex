import "./Users.css";

import React from 'react'
import User from './User'
import { Link } from "react-router-dom";

export default function Users({users, selectUser}) {
  return (
    <div className='users'>
        {users.map(user => 
            <Link key={user.id} to="/catalog">
                <User user={user} selectUser={selectUser} />
            </Link>
        )}
    </div>
  )
}

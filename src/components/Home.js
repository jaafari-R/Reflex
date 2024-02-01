import "./Home.css";

import React from 'react'
import Users from "./Users";

export default function Home({users, selectUser}) {
  return (
    <div className='home'>
        <Users users={users} selectUser={selectUser}/>
    </div>
  )
}

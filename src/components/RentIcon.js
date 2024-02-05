import "./RentIcon.css";

import React from 'react'
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';

export default function RentIcon({ movie, toggleRentMovie }) {
  return (
    <div className="rentIcon" onClick={() => toggleRentMovie(movie.id)}>
        {movie.isRented ?
          <RemoveCircleIcon className="remove" fontSize="large"/>
          :
          <ControlPointIcon className="add" fontSize="large"/>
        }
    </div>
  )
}

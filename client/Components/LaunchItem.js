import React from 'react'
import { Link } from 'react-router-dom'

const LaunchItem = props => {
  const { flight_number, mission_name, upcoming } = props
  return (
    <div className='launch-item'>
      <Link to={upcoming? `/upcoming-launch/${flight_number}` : `/launches/${flight_number}`}>
        <div className='launch-item-heading'>
          <h2>{mission_name}</h2>
        </div>
      </Link>
    </div>
  )
}

export default LaunchItem
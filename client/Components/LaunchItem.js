import React from 'react'
import { Link } from 'react-router-dom'

const LaunchItem = props => {
  const { flight_number, mission_name } = props
  return (
    <div>
      <Link to={`/launches/${flight_number}`}>
        <div>
          <h1>{mission_name}</h1>
        </div>
      </Link>
    </div>
  )
}

export default LaunchItem
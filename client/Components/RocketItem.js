import React from 'react'
import { Link } from 'react-router-dom'

const RocketItem = props => {
  const { rocketId, rocket_name } = props
  return (
    <div>
      <Link to={`/rockets/${rocketId}`}>
        <h1>{rocket_name}</h1>
      </Link>
    </div>
  )
}

export default RocketItem
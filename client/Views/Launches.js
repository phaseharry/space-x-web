import React from 'react'
import { connect } from 'react-redux'

import LaunchItem from '../Components/LaunchItem'

class Launches extends React.Component{
  render(){
    const { launches } = this.props 
    return (
      <div>
        {launches.map(launch => {
          return (
            <LaunchItem 
              key={launch.flight_number} 
              flight_number={launch.flight_number}
              mission_name={launch.mission_name}
            />
          )
        })}
      </div>
    )
  }
}

const mapStateToProps = ({ launches }) => {
  return {
    launches
  }
}

export default connect(mapStateToProps, null)(Launches)
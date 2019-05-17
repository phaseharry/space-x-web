import React from 'react'
import { connect } from 'react-redux'

import LaunchItem from '../Components/LaunchItem'

class UpcomingLaunch extends React.Component{
  render(){
    const { upcoming } = this.props
    return (
      <div id='launches-container'>
        {upcoming.map(launch => {
          return (
            <LaunchItem 
              key={launch.flight_number} 
              flight_number={launch.flight_number}
              mission_name={launch.mission_name}
              upcoming={launch.upcoming}
            />
          )
        })}
      </div>
    )
  }
}


const mapStateToProps = ({ upcoming }) => {
  return {
    upcoming
  }
}

export default connect(mapStateToProps)(UpcomingLaunch)
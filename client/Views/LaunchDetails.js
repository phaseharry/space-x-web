import React from 'react'
import { connect } from 'react-redux'

class LaunchDetails extends React.Component{
  render(){
    const { launchDetails } = this.props
    console.log(launchDetails)
    return (
      <h1>{launchDetails.flight_number}</h1>
    )
  }
}

const mapStateToProps = ({ launches }, { match }) => {
  const flightNum = match.params.flightNum
  console.log(match)
  return {
    launchDetails: launches.find(launch => launch.flight_number == flightNum) || {}
  }  
}

export default connect(mapStateToProps, null)(LaunchDetails)
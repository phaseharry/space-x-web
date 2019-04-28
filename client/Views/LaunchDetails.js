import React from 'react'
import { connect } from 'react-redux'

//disabling specific search atm
//import { detailedLaunch } from '../Store/reducers/Launches'

class LaunchDetails extends React.Component{
  // componentDidMount(){
  //   const { match,  getSpecificLaunch } = this.props 
  //   const flightNum = match.params.flightNum
  //   return getSpecificLaunch(flightNum)
  // }
  render(){
    const { details, 
      flight_number, 
      is_tentative, 
      launch_failure_details, 
      launch_year, 
      rocket, 
      launch_success, 
      mission_name, 
      telemetry, 
      launch_site, 
      launch_date_utc, 
      links 
    } = this.props.launchDetails
    return (
      <div>
        <h1>{mission_name}</h1>
        <h3>SpaceX Flight Number: {flight_number}</h3>
        <h5>{launch_year}</h5>
        <p>{details ? details: 'No details available'}</p>
      </div>
    )
  }
}

const mapStateToProps = ({ launches }, { match }) => {
  const flightNum = match.params.flightNum
  return {
    launchDetails: launches.find(launch => launch.flight_number == flightNum) || {}
  }  
}

// const mapDispatchToProps = dispatch => {
//   return {
//     getSpecificLaunch: (flightNum) => dispatch(detailedLaunch(flightNum))
//   }
// }

export default connect(mapStateToProps, null)(LaunchDetails)
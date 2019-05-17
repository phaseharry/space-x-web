import React from 'react'
import { connect } from 'react-redux'

class LaunchDetails extends React.Component{
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
      <div className='launch-details'>
        <h1>{mission_name}</h1>
        <h3>SpaceX Flight Number: {flight_number}</h3>
        <h5>{launch_year}</h5>
        <p>{details ? details: 'No details available'}</p>
        {
          launch_success? 
          <p>Launch was successful</p> : 
          <div className='failure-report'>
            <p>{`Time: ${launch_failure_details.time}`}</p>
            <p>{`Altitude: ${launch_failure_details.altitude}`}</p>
            <p>{`Reason: ${launch_failure_details.reason}`}</p>
          </div>
        }
        {links.flickr_images.map((imgLink, idx) => <img src={imgLink} alt={`${mission_name} launch`} key={idx}/>)}
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

export default connect(mapStateToProps, null)(LaunchDetails)
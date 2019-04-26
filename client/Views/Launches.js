import React from 'react'
import { connect } from 'react-redux'

class Launches extends React.Component{
  render(){
    const { launches } = this.props 
    return (
      <div>
        {launches.map(launch => {
          return (
            <div key={launch.flight_number}>
              <h2>{launch.mission_name}</h2>
            </div>
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
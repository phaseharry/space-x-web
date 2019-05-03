import React from 'react'
import { connect } from 'react-redux'

import RocketItem from '../Components/RocketItem'

class Rockets extends React.Component{
  render(){
    return (
      <div>
        {this.props.rockets.map(rocket => {
          return (
            <RocketItem 
              key={rocket.id} 
              rocketId={rocket.id} 
              rocket_name={rocket.rocket_name}
            />
          )
        })}
      </div>
    )
  }
}

const mapStateToProps = ({ rockets }) => {
  return {
    rockets
  }
}

export default connect(mapStateToProps, null)(Rockets)
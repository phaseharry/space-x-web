import React from 'react'
import { connect } from 'react-redux'

class Rockets extends React.Component{
  render(){
    return (
      <div>
        {this.props.rockets.map(rocket => {
          return <h1>{rocket.rocket_name}</h1>
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
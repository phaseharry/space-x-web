import React from 'react'
import { connect } from 'react-redux'

class UpcomingDetail extends React.Component{
  render(){
    return <h1>Upcoming detailed view</h1>
  }

}

const mapStateToProps = ({ upcoming }) => {
  return {
    upcoming
  }
}

export default connect(mapStateToProps, null)(UpcomingDetail)
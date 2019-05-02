import React from 'react'
import { withRouter, Link } from 'react-router-dom'

class Nav extends React.Component{
  renderLogo(){
    const { location } = this.props
    if(location.pathname !== '/'){
      return true
    }
  }
  render(){
    console.log(this.props)
    return (
      <div id='Nav'>
        <nav>
          {this.renderLogo()? <img id='nav-logo' src='https://www.spacex.com/sites/spacex/files/spacex_logo_white.png'/> : <span></span>}
          <ul>
            <li>
              <Link to='/launches'>Launches</Link>
            </li>
            <li>
              <Link to='/rockets'>Rockets</Link>
            </li>
            <li>
              <Link to='/roadster'>Roadster(not setup yet)</Link>
            </li>
          </ul>
        </nav>
      </div>
    )
  }
}

export default withRouter(Nav)

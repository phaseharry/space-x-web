import React from 'react'
import { withRouter, Link } from 'react-router-dom'

//src='https://www.spacex.com/sites/spacex/files/spacex_logo_white.png'

class Nav extends React.Component{
  render(){
    console.log(this.props)
    return (
      <div id='Nav'>
        <nav>
          <Link to='/'>
            <img id='nav-logo' alt='SpaceX Logo' src='/public/space-x-logo.png'/>
          </Link>
          <ul>
            <li>
              <Link to='/launches'>Launches</Link>
            </li>
            <li>
              <Link to='/upcoming'>Upcoming</Link>
            </li>
            <li>
              <Link to='/rockets'>Rockets</Link>
            </li>
            <li>
              <Link to='/roadster'>Roadster</Link>
            </li>
          </ul>
        </nav>
      </div>
    )
  }
}

export default withRouter(Nav)

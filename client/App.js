import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'

import Nav from './Components/Nav'

import HomeView from './Views/HomeView'
import LaunchDetails from './Views/LaunchDetails'
import Launches from './Views/Launches'
import Roadster from './Views/Roadster'
import Rockets from './Views/Rockets'

import { loadingLaunches } from './Store/reducers/Launches'
import { fetchRockets } from './Store/reducers/Rockets'

class App extends React.Component{
  componentDidMount(){
    return this.props.initLoad()
  }
  render(){
    return (
        <Router>
          <Nav />
            <Switch>
              <Route exact path='/' render={(props) => <HomeView {...props}/>} />
              <Route path='/roadster' render={(props) => <Roadster {...props}/>} />
              <Route path='/rockets' render={(props) => <Rockets {...props}/>} />
              <Route exact path='/launches' component={Launches} />
              <Route path='/launches/:flightNum' render={(props) => <LaunchDetails {...props}/>} />
            </Switch>
        </Router>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    initLoad: () => {
      return Promise.all([
        dispatch(loadingLaunches()), 
        dispatch(fetchRockets())
      ])
    }
  }
}

export default connect(null, mapDispatchToProps)(App)
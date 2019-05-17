import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'

import Nav from './Components/Nav'

import HomeView from './Views/HomeView'
import LaunchDetails from './Views/LaunchDetails'
import Launches from './Views/Launches'
import UpcomingLaunch from './Views/UpcomingLaunch'
import Roadster from './Views/Roadster'
import Rockets from './Views/Rockets'
import RocketDetails from './Views/RocketDetails'

import { loadingLaunches } from './Store/reducers/PastLaunches'
import { fetchUpcomingLaunches } from './Store/reducers/UpcomingLaunches'
import { fetchRockets } from './Store/reducers/Rockets'
import UpcomingDetails from './Views/UpcomingDetails';

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = { loading: true }
  }
  componentDidMount(){
    return this.props.initLoad()
    .then(() => this.setState({ loading: false }))
    .catch(err => console.error(err))
  }
  render(){
    return (
        <Router>
          <Nav/>
          {
            this.state.loading ? 
            <h3>Loading...</h3> :
            <Switch>
              <Route exact path='/' render={(props) => <HomeView {...props}/>} />
              <Route path='/roadster' render={(props) => <Roadster {...props}/>} />
              <Route path='/rockets' render={(props) => <Rockets {...props}/>} />
              <Route path='/rockets/:rocketId' render={(props) => <RocketDetails {...props}/>} />
              <Route path='/upcoming-launch/:id' render={(props) => <UpcomingDetails {...props}/>}/>
              <Route path='/upcoming' render={(props) => <UpcomingLaunch {...props}/>}/>
              <Route exact path='/launches' component={Launches} />
              <Route path='/launches/:flightNum' render={(props) => <LaunchDetails {...props}/>} />
            </Switch>
          }
        </Router>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    initLoad: () => {
      return Promise.all([
        dispatch(loadingLaunches()), 
        dispatch(fetchUpcomingLaunches()),
        dispatch(fetchRockets())
      ])
    }
  }
}

export default connect(null, mapDispatchToProps)(App)
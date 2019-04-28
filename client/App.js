import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'

import HomeView from './Views/HomeView'
import LaunchDetails from './Views/LaunchDetails'
import Launches from './Views/Launches'

import { loadingLaunches } from './Store/reducers/Launches'

class App extends React.Component{
  componentDidMount(){
    return this.props.initLoad()
  }
  render(){
    return (
      <Router>
        <Switch>
          <Route exact path='/' render={(props) => <HomeView {...props}/>}/>
          <Route exact path='/launches' component={Launches}/>
          <Route path='/launches/:flightNum' render={(props) => <LaunchDetails {...props}/>}/>
        </Switch>
      </Router>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    initLoad: () => {
      return dispatch(loadingLaunches())
    }
  }
}

export default connect(null, mapDispatchToProps)(App)
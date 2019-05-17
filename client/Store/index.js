import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

import launchReducer from './reducers/PastLaunches'
import upcomingReducer from './reducers/UpcomingLaunches'
import rocketReducer from './reducers/Rockets'
import roadsterReducer from './reducers/Roadster'

const reducers = combineReducers({
  launches: launchReducer,
  upcoming: upcomingReducer,
  roadster: roadsterReducer,
  rockets: rocketReducer
})

export default createStore(reducers, applyMiddleware(thunk, logger))
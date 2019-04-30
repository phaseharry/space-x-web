import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

import launchReducer from './reducers/Launches'
import rocketReducer from './reducers/Rockets'
import roadsterReducer from './reducers/Roadster'

const reducers = combineReducers({
  launches: launchReducer,
  roadster: roadsterReducer,
  rockets: rocketReducer
})

export default createStore(reducers, applyMiddleware(thunk, logger))
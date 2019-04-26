import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

import launchReducer from './reducers/Launches'

const reducers = combineReducers({
  launches: launchReducer
})

export default createStore(reducers, applyMiddleware(thunk, logger))
import axios from 'axios'

//action types
const LOAD_ROCKETS = 'LOAD_ROCKETS'

//action creators 
const loadRockets = rockets => ({
  type: LOAD_ROCKETS,
  rockets
})

//thunks
export const fetchRockets = () => {
  return dispatch => {
    return axios.get('/api/rockets/')
    .then(res => res.data)
    .then(rockets => dispatch(loadRockets(rockets)))
    .catch(err => console.error(err))
  }
}

const rocketsReducer = (state = [], action) => {
  switch(action.type){
    case LOAD_ROCKETS:
      return action.rockets 
    default:
      return state
  }
}

export default rocketsReducer
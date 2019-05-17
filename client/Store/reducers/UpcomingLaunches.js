import axios from 'axios'

//action types
const LOAD_UPCOMING = 'LOAD_UPCOMING'


//action creators 
const loadUpcoming = launches => {
  return {
    type: LOAD_UPCOMING,
    launches
  }
}

//thunks
export const fetchUpcomingLaunches = () => {
  return dispatch => axios.get('/api/launches/upcoming')
  .then(res => res.data)
  .then(launches => dispatch(loadUpcoming(launches)))
}

const upcomingReducer = (state = [], action) => {
  switch(action.type){
    case LOAD_UPCOMING:
      return action.launches
    default:
      return state
  }
}

export default upcomingReducer
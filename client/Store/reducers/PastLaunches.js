import axios from 'axios'

//action types
const LOAD_LAUNCHES = 'LOAD_LAUNCHES'
const GET_SPECIFIC_LAUNCH= 'GET_SPECIFIC_LAUNCH'

//action creators
const loadLaunches = launches => ({
  type: LOAD_LAUNCHES,
  launches
})

const getLaunchDetails = launch => ({
  type: GET_SPECIFIC_LAUNCH,
  launch
})

//thunks
export const loadingLaunches = () => {
  return async dispatch => {
    const launches = await axios.get('/api/launches/past')
    return dispatch(loadLaunches(launches.data))
  }  
}

export const detailedLaunch = flightNum => {
  return dispatch => {
    return axios.get(`/api/launches/${flightNum}`)
    .then(res => res.data)
    .then(launchDetails => dispatch(getLaunchDetails(launchDetails)))
  }
}

const launchReducer = (state = [], action) => {
  switch(action.type){
    case LOAD_LAUNCHES:
      return action.launches
    case GET_SPECIFIC_LAUNCH:
      return state.map(launch => { 
        if(launch.flight_number === action.launch.flight_number){ //replaces the simplified launch data with a more detailed one since it was requested
          console.log(action.launch)
          return action.launch
        } else {
          return launch
        }
      })
    default:
      return state
  }
}

export default launchReducer
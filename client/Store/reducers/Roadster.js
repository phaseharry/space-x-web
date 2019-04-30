import axios from 'axios'

/*
  Debating on whether I need a whole reducer for roadster (will only be useful if SpaceX launches more roadsters/misc items into Space)
*/

//action types
const GET_ROADSTER = 'GET_ROADSTER'

//action creators 
const getRoadster = roadster => ({
  type: GET_ROADSTER,
  roadster
})

//thunks
export const loadRoadster = () => {
  return dispatch => {
    return axios.get('/api/roadster')
    .then(res => res.data)
    .then(roadster => dispatch(getRoadster(roadster)))
    .catch(err => console.error(err))
  }
}

const roadsterReducer = (state = [], action) => {
  switch(action.type){
    case GET_ROADSTER:
      return [action.roadster]
    default:
      return state
  }
}

export default roadsterReducer
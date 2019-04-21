const axios = require('axios')
const router = require('express').Router()

//gets a specific launch's data
router.get('/:flightNumber', (req, res, next) => {
  const flightNum = req.params.flightNumber
  return axios.get(`https://api.spacexdata.com/v3/launches/${flightNum}`)
  .then(spacex => spacex.data)
  .then(launch => res.status(200).send(launch))  //defaults to a 200 status code, only manually writing it for learning's sake
  .catch(err => next(err))
})

//gets all launches data
router.get('/', (req, res, next) => {
  return axios.get('https://api.spacexdata.com/v3/launches')
  .then(spacex => spacex.data) //response obj with metadata from that api
  .then(launches => res.status(200).send(launches))
  .catch(err => next(err))
})


module.exports = router
const axios = require('axios')
const router = require('express').Router()

//gets all launches that has occurred
router.get('/pasts', (req, res, next) => {
  return axios
    .get('https://api.spacexdata.com/v3/launches/past')
    .then(spacex => spacex.data) //response obj with metadata from that api
    .then(launches => {
      launches.reverse() //reversed because the launch data comes in with the oldest launches at the front of the array
      res.status(200).json(launches)
    })
    .catch(err => next(err))
})

//launches that has not occurred yet
router.get('/upcoming', (req, res, next) => {
  return axios
    .get('https://api.spacexdata.com/v3/launches/upcoming')
    .then(spacex => spacex.data)
    .then(launches => res.json(launches))
    .catch(err => next(err))
})

//gets a specific launch's data
router.get('/:flightNumber', (req, res, next) => {
  const flightNum = req.params.flightNumber
  return axios
    .get(`https://api.spacexdata.com/v3/launches/${flightNum}`)
    .then(spacex => spacex.data)
    .then(launch => res.status(200).send(launch)) //defaults to a 200 status code, only manually writing it for learning's sake
    .catch(err => next(err))
})

module.exports = router

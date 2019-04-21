const axios = require('axios')
const router = require('express').Router()

router.get('/:rocketId', (req, res, next) => {
  const rocketId = req.params.rocketId  //rocketId is the actual name of the rocket (e.g: falcon9) (SpaceX's design, not regular numbers or UUIDs)
  return axios.get(`https://api.spacexdata.com/v3/rockets/${rocketId}`)
  .then(spacex => spacex.data)
  .then(rocket => res.status(200).send(rocket))
  .catch(err => next(err))
})

router.get('/', (req, res, next) => {
  return axios.get('https://api.spacexdata.com/v3/rockets/')
  .then(spacex => spacex.data)
  .then(rockets => res.status(200).send(rockets))
  .catch(err => next(err))
})

module.exports = router
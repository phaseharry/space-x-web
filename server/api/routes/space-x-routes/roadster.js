const axios = require('axios')
const router = require('express').Router()

router.get('/', (req, res, next) => {
  return axios
    .get('https://api.spacexdata.com/v3/roadster')
    .then(roadster => roadster.data)
    .then(roadster => res.status(200).send(roadster))
    .catch(err => next(err))
})

module.exports = router

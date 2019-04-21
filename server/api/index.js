const router = require('express').Router()

const launches = require('./routes/space-x-routes/launches')
const rockets = require('./routes/space-x-routes/rockets')
const roadster = require('./routes/space-x-routes/roadster')

//main api router that connects all other
router.use('/launches', launches)
router.use('/rockets', rockets)
router.use('/roadster', roadster)

module.exports = router
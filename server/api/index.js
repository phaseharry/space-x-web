const router = require('express').Router()

const launches = require('./routes/space-x-routes/launches')
const rockets = require('./routes/space-x-routes/rockets')
const roadster = require('./routes/space-x-routes/roadster')
const user = require('./routes/user-routes')

//main api router that connects all other
router.use('/launches', launches)
router.use('/rockets', rockets)
router.use('/roadster', roadster)
router.use('/user', user)

module.exports = router
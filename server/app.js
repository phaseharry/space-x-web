const express = require('express')

const apiRouter = require('./api/index')

const app = express()

//middlewares & api routes
app.use('/api', apiRouter)



//error handler goes here

module.exports = app
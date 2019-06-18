const express = require('express')
const path = require('path')

const apiRouter = require('./api/index')

const app = express()

//static files served
app.use('/public', express.static(path.join(__dirname, '../public')))

//middlewares & api routes
app.use('/api', apiRouter)

app.get('*', (req, res, next) => {
  res.sendFile(path.join(__dirname, '../public/index.html'))
})

//error-handler
app.use((err, req, res, next) => {
  const status = err.status || 500
  console.log(status)
  res.status(status).send(err.message)
})

module.exports = app

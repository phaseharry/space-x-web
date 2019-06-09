const Sequelize = require('sequelize')
/*
  This file represents our server connection to the postgres database we have installed on our machine. 
  Sequelize will wrap around our postgres database and let us communicate with it (CRUD operations) in a JS object oriented manner
*/
const databaseURL = process.env.DATABASE_URL || 'postgres://localhost/spacex'

const connection = new Sequelize(databaseURL, {
  logging: false
})
module.exports = connection
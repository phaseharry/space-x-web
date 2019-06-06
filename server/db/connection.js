const Sequelize = require('sequelize')
/*
  This file represents our server connection to the postgres database we have installed on our machine. 
  Sequelize will wrap around our postgres database and let us communicate with it (CRUD operations) in a JS object oriented manner
*/
const connection = new Sequelize(process.env.DATABASE_URL, {
  logging: true
})
module.exports = connection
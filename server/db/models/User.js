const conn = require('../connection') //use the connection to the spacex database to know that this will be a table in the database
const Sequelize = require('sequelize')

const User = conn.define('user', {
  firstName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isEmail: true
    }
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false
  },
  // id: {
  //   type: Sequelize.UUID,
  //   defaultValue: Sequelize.UUIDV4,
  //   primaryKey: true
  // }
})

module.exports = User
const conn = require('../connection')
const Sequelize = require('sequelize')

const Comments = conn.define('comment', {
  post: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  categoryName: { // ie. rocket, launch, or roadster to know which category the comment is from and uses the entity id to know which category item to put under
    type: Sequelize.TEXT,
    allowNull: false
  },
  itemId: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true
  }
})

module.exports = Comments
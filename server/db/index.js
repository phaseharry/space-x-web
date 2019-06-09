const conn = require('./connection')
const User = require('./models/User')
const Comment = require('./models/Comment')

User.hasMany(Comment)
Comment.belongsTo(User)

const sync = () => conn.sync({ force: true })

const seed = async () => {
  const [Elon, Jeff, Bill, Steve, Mark] = await Promise.all([
    User.create({
      firstName: 'Elon',
      lastName: 'Musk',
      email: 'emusk@spacex.com',
      password: 'RobotsAreEvil'
    }),
    User.create({
      firstName: 'Jeff',
      lastName: 'Bezos',
      email: 'jbezos@amazon.com',
      password: 'Relentless.com'
    }),
    User.create({
      firstName: 'Bill',
      lastName: 'Gates',
      email: 'bgates@microsoft.com',
      password: 'philanthropy'
    }),
    User.create({
      firstName: 'Steve',
      lastName: 'Jobs',
      email: 'sjobs@apple.com',
      password: 'crazyone'
    }),
    User.create({
      firstName: 'Mark',
      lastName: 'Zuckerberg',
      email: 'mzuckerberg@facebook.com',
      password: 'thefacebook'
    })
  ])
  const [c1, c2, c3, c4 ] = await Promise.all([
    Comment.create({
      post: "Hey look at SpaceX's launches @Jeff",
      categoryName: 'launches',
      itemId: 6,
      userId: Elon.id
    }),
    Comment.create({
      post: "HAHAHAHA :(",
      categoryName: 'launches',
      itemId: 6,
      userId: Jeff.id
    }),
    Comment.create({
      post: "Woah, is that an iPad on the dash?",
      categoryName: 'roadster',
      itemId: 1,
      userId: Steve.id
    }),
    Comment.create({
      post: "Times have changed, Steve",
      categoryName: 'roadster',
      itemId: 1,
      userId: Elon.id
    })
  ])
  return {
    users: [Elon, Jeff, Bill, Steve, Mark],
    comments: [c1, c2, c3, c4]
  }
}

module.exports = {
  sync, 
  seed, 
  models: {
    User,
    Comment
  }
}
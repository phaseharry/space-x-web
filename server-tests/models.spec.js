const expect = require('chai').expect
const { sync, seed } = require('../server/db') 
const { User, Comment } = require('../server/db').models

describe('Testing User and Comment models', () => {
  let data = {
    users: [],
    comments: []
  }
  let Elon

  beforeEach('sync and seeding our data', () => {
    return sync()
    .then(() => seed())
    .then((seededData) => {
      data = seededData
      Elon = data.users.find((person) => person.firstName === 'Elon')
    })
  })

  describe('Our seeded data is in our database', () => {
    it('has the seeded data', () => {
      //seeded the right amount of users and comments according to seed file
      expect(data.users.length).to.equal(5) 
      expect(data.comments.length).to.equal(4)
    })
    it('Elon exists', () => {
      expect(Elon).to.be.ok
      expect(Elon.firstName).to.equal('Elon')
      expect(Elon.lastName).to.equal('Musk')
    })
    it('his comments are there', () => {
      const comments = data.comments.filter((comment) => comment.userId === Elon.id)
      expect(comments.length).to.equal(2)
      expect(comments[0].post).to.be.a('string')
    })
  })

  describe('User and Comment models functionality works', () => {
    describe('User model', () => {  
      it('can create a new instance of data in our db', () => {
        return User.create({
          firstName: 'Larry',
          lastName: 'Page',
          email: 'lpage@google.com',
          password: 'dontbeevil'
        })
        .then((user) => {
          expect(user).to.be.ok //there's something that was returned instead of error
          expect(user.firstName).to.equal('Larry')
          expect(user.lastName).to.equal('Page')
        })
      })
      it('users can change their passwords/update their data', async () => {
        const Steve = await User.findOne({
          where: {
            firstName: 'Steve',
            lastName: 'Jobs'
          }
        })
        await Steve.update({
          password: 'DentInUni'
        })
        const updatedSteve = await User.findByPk(Steve.id)
        expect(updatedSteve.id).to.equal(Steve.id) //same instance in the database
        expect(updatedSteve.password).to.equal('DentInUni')
      })
      it('users can be removed from database', async () => {
        const Tessa = await User.create({
          firstName: 'Tessa',
          lastName: 'Beck',
          email: 'tbeck@gmail.com',
          password: 'randomPassword'
        })
        expect(Tessa).to.be.ok
        expect(Tessa.firstName).to.equal('Tessa')
        expect(Tessa.lastName).to.equal('Beck')
        expect(Tessa.email).to.equal('tbeck@gmail.com')
        
        await Tessa.destroy()
        const queriedInstance = await User.findByPk(Tessa.id)
        expect(queriedInstance).to.be.a('null') //null value since Tessa does not exist in our db anymore
      })
      it('users can find their comments', async () => {
        const Jeff = await User.findOne({
          where: {
            firstName: 'Jeff',
            lastName: 'Bezos'
          },
          include: { model: Comment }
        })
        expect(Jeff.comments.length).to.equal(1) //Jeff only has one comment seeded into our database
        expect(Jeff.comments[0].post).to.be.a('string')
      })
    })

    describe('Comments model', () => {
      let Scott
      let testComment
      const testContent = 'WOW, the rocket is resuable'

      beforeEach('creating a user that will be doing operations to comments model', () => {
        return User.create({
          firstName: 'Scott',
          lastName: 'Thunky',
          email: 'sthunky@gmail.com',
          password: 'asdf1234'
        })
        .then(user => {
          Scott = user
          return Comment.create({
            post: testContent,
            categoryName: 'launches',
            itemId: 7,
            userId: Scott.id
          })
        })
        .then(comment => {
          testComment = comment
        })
      })

      it('can create a new comment in our db', async () => {
        const postContent = "Hey, I can't believe that launch failed. Is there anywhere I can read more comprehensive data regarding the launch?"
        const newPost = await Comment.create({
          post: postContent,
          categoryName: 'launches',
          itemId: 7,
          userId: Scott.id
        })
        
        expect(newPost.post).to.deep.equal(postContent)
        expect(newPost.post).to.be.a('string')
      })
      it('can be updated', () => {
        return testComment.update({
          post: "Oh wow, the rocket is resuable. This will reduce the cost of space travel drastically"
        })
        .then(updatedPost => {
          expect(updatedPost.post).to.be.a('string')
          expect(updatedPost.post).to.not.equal(testContent)
        })
      })
      it('can be deleted from our database', async () => {  
        await testComment.destroy()
        const queriedComment = await Comment.findByPk(testComment.id)
        expect(queriedComment).to.be.a('null')
      })
    })
  })
})
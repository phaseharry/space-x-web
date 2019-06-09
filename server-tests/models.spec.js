const expect = require('chai').expect
const { sync, seed } = require('../server/db') 
const { User, Comment } = require('../server/db').models

describe('Testing User and Comment models', () => {
  describe('Our seeded data is in our database', () => {
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
      xit('users can be removed from database', () => {

      })
      xit('users can find their commets', () => {

      })
    })

    xdescribe('Comments model', () => {
      it('can create a new instance of data in our db', () => {

      })
      it('can be updated', () => {

      })
      it('can be deleted from our database', () => {

      })
      it('can be used to track the user who posted the comment', () => {

      })
    })
  })
})
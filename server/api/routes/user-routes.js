const router = require('express').Router()
const { User, Comment } = require('../../db').models

/*
  user/
*/

router.post('/signup', (req, res, next) => {
  const { firstName, lastName, email, password } = req.body //will be salted with jwt-tokens later on
  User.create({
    firstName,
    lastName,
    email,
    password
  })
  .then(user => res.status(201).json(user))
})

router.post('login', (req, res, next) => {
  const { email, password } = req.body // again, will be salted with jwt-tokens later on
  User.findOne({
    where: {
      email,
      password
    }
  })
  .then(user => res.json(user))
  .catch(err => {
    res.sendStatus(404) //assuming the error is an invalid password or email and not the database not working for now
  })
})

router.put('/update-info/:userId', (req, res, next) => {
  User.findByPk(req.params.userId)
  .then(user => user.update(req.body))  // assuming any info that's being updated is inside of the req.body for now
})

module.exports = router
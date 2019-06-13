const router = require('express').Router
const { User, Comment } = require('../../db').models

/*
  comments/
*/

router.put('/', (req, res, next) => {
  const { id, post } = req.params //id is the primaryKey of the comment
  Comment.findByPk(id)
    .then(instance => instance.update({ post })) //instance basically represents the comment instance (running out of names)
    .then(updatedPost => res.status(201).send(updatedPost))
    .catch(err => next(err))
})

router.post('/:category/:itemId', (req, res, next) => {
  const { category, itemId } = req.params
  const { post, userId } = req.body //maybe get userId from auth header when that's set up
  Comment.create({
    category,
    itemId,
    post,
    userId
  })
    .then(comment => res.status(201).send(comment))
    .catch(err => next(err))
})

router.get('/:category/:itemId', (req, res, next) => {
  const { category, itemId } = req.params
  Comment.findAll({
    category,
    itemId
  })
    .then(comments => {
      //sort them by time of posting (will do later)
      res.json(comments)
    })
    .catch(err => next(err))
})

module.exports = router

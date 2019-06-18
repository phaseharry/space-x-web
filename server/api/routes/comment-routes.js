const router = require('express').Router()
const { User, Comment } = require('../../db').models

/*
  path: /api/comments/
  currently there should only be 3 categories: rockets, launches, and roadster
  if a request comes in with a category that's not one of those 3 we throw a 404 error back
*/
const categories = ['rockets', 'launches', 'roadster']

router.param('category', (req, res, next, value) => {
  const category = categories.find(category => category === value)
  if (category) {
    req.category = category
    next()
  } else {
    const err = new Error(`${value} is not a category`)
    err.status = 404
    next(err)
  }
})

router.put('/:category/:itemId/:postId', (req, res, next) => {
  const category = req.category
  const { itemId, postId } = req.params
})

router.post('/:category/:itemId', (req, res, next) => {
  const category = req.category
  const itemId = req.params.itemId
})

router.get('/:category/:itemId', (req, res, next) => {
  const category = req.category
  const itemId = req.params.itemId

  Comment.findAll({
    where: {
      category,
      itemId
    }
  })
    .then(comments => {
      //sort them by time of posting (will do later)
      res.json(comments)
    })
    .catch(err => next(err))
})

module.exports = router

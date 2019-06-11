const router = require('express').Router
const { User, Comment } = require('../../db').models

/*
  comments/
*/
router.post('/', (req, res, next) => {
  
})

router.put('/', (req, res, next) => {
  
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
})

module.exports = router
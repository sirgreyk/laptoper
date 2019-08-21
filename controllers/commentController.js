const Comment = require('../models/comment')

exports.comment_product_get = async (req, res, next) => {
  try {
      const comments = await Comment.find({ productId: req.body.productId})
      await res.json(comments)
  } catch(e) {
      await res.status(400).json(e)
      await next(e)
  } 
}

exports.comment_new = async (req, res, next) => {
  try {
    const user = await req.user
    const body = await req.body
    const comment = await new Comment({
      date: Date.now(),
      productId: body.productId,
      author: {
          id: user._id,
          firstName: user.firstName,
          secondeName: user.secondeName
      },
      text: body.text,
    })
    await body.advantages ? comment.advantages = body.advantages : null
    await body.disadvantages ? comment.disadvantages = body.disadvantages :null
    await body.images ? comment.images = [ ...body.images ] : null
    await comment.save()
    await res.sendStatus(200)
  } catch(e) {
    await res.status(400).json(e)
    await next(e)
  }
}
exports.comment_del = async (req, res, next) => {
  try {
    await Comment.deleteOne({_id: req.body.id})
    await res.sendStatus(200)
  } catch(e) {
    await res.status(400).json(e)
    await next(e)
  }
}

exports.comment_answers_push = async (req, res, next) => {
  try {
    const user = await req.user
    const comment = await Comment.findOne({ _id: req.body.id})
    await comment.answers.push({
      date: Date.now(),
      author: {
          id: user._id,
          firstName: user.firstName,
          secondeName: user.secondeName
      },
      text: req.body.text,
    })
    await comment.save()
    await res.sendStatus(200)
  } catch(e) {
    await res.status(400).json(e)
    await next(e)
  }
}

exports.comment_answers_pull = async (req, res, next) => {
  try {
    const comment = await Comment.findOne({ _id: req.body.id})
    await comment.answers.pull(req.body.answerId)
    await comment.save()
    await res.sendStatus(200)
  } catch(e) {
    await res.status(400).json(e)
    await next(e)
  }
}
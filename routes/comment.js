const express = require('express')
const router = express.Router()
const passport = require('passport')

const comment_controller = require('../controllers/commentController');

router.post('/comment_product_get', comment_controller.comment_product_get)

router.post('/comment_new', passport.authenticate('jwt', { session: false }), comment_controller.comment_new)
router.post('/comment_del', passport.authenticate(['jwt', 'admin'], { session: false }), comment_controller.comment_del)
router.post('/comment_answers_push', passport.authenticate('jwt', { session: false }), comment_controller.comment_answers_push)
router.post('/comment_answers_pull', passport.authenticate(['jwt', 'admin'], { session: false }), comment_controller.comment_answers_pull)

module.exports = router;
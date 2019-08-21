const express = require('express')
const router = express.Router()
const passport = require('passport')

const order_controller = require('../controllers/orderController');

const userAuth = passport.authenticate('user', { session: false })


router.post('/order_get', userAuth, order_controller.order_get)
router.post('/order_new', userAuth, order_controller.order_new)
router.post('/order_cancel', userAuth, order_controller.order_cancel)

router.post('/order_update_status', passport.authenticate('admin', { session: false }), order_controller.order_update_status)

module.exports = router;
const express = require('express')
const router = express.Router()
const passport = require('passport')
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })

const userAuth = passport.authenticate('user', { session: false })

const user_controller = require('../controllers/userController')
//checked 09.06.2019 4:25
//auth
router.post('/user_signup', user_controller.user_signup)
router.post('/user_login', user_controller.user_login)
router.post('/user_logout', userAuth, user_controller.user_logout)

//user
router.post('/user_get', userAuth, user_controller.user_get)
const imgUpload = upload.fields([{ name: 'img' }])
router.post('/user_edit', userAuth, imgUpload, user_controller.user_edit)

router.post('/user_history',userAuth, user_controller.user_history)

//cart
router.post('/user_cart_push', userAuth, user_controller.user_cart_push)
router.post('/user_cart_pull', userAuth, user_controller.user_cart_pull)
router.post('/user_cart_up', userAuth, user_controller.user_cart_up)
router.post('/user_cart_down', userAuth, user_controller.user_cart_down)

//compares
router.post('/user_compare_push', userAuth, user_controller.user_compare_push)
router.post('/user_compare_pull', userAuth, user_controller.user_compare_pull)

//lists
router.post('/user_list_new/', userAuth, user_controller.user_list_new)
router.post('/user_list_del', userAuth, user_controller.user_list_del)
router.post('/user_list_push', userAuth, user_controller.user_list_push)
router.post('/user_list_pull', userAuth, user_controller.user_list_pull)

module.exports = router
const express = require('express')
const router = express.Router()
const passport = require('passport')
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })

const product_controller = require('../controllers/productController');

const adminAuth = passport.authenticate('admin', { session: false })
const userAuth = passport.authenticate('user', { session: false })

const imgsArray = upload.array('imgs', 20)
const imgUpload = upload.single('img')

router.post('/products_get', product_controller.products_get)
router.post('/product_get', product_controller.product_get)
router.post('/products_get_by_id', product_controller.products_get_by_id)
    //user
router.post('/product_add_rate', userAuth, product_controller.product_add_rate)
router.post('/product_del_rate', userAuth, product_controller.product_del_rate)
    //admin
router.post('/product_new',  imgsArray, product_controller.product_new)
router.post('/product_del', adminAuth, product_controller.product_del)
router.post('/product_add_share', adminAuth, product_controller.product_add_share)
router.post('/product_del_share', adminAuth, product_controller.product_del_share)
router.post('/product_add_discount', adminAuth, product_controller.product_add_discount)
router.post('/product_del_discount', adminAuth, product_controller.product_del_discount)
router.post('/product_set_chip', adminAuth, product_controller.product_set_chip)
router.post('/product_del_chip', adminAuth, product_controller.product_del_chip)

module.exports = router;
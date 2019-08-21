const express = require('express')
const router = express.Router()
const passport = require('passport')
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })
const laptoper_controller = require('../controllers/laptoperController')

const adminAuth = passport.authenticate('admin', { session: false })

const imgsUpload = upload.fields([{ name: 'img' }, { name: 'largeImg' }])
const imgUpload = upload.single('img')
//mainCarousel
router.post('/main_carousel_get', laptoper_controller.main_carousel_get)
  //admin

router.post('/main_carousel_push', adminAuth, imgsUpload, laptoper_controller.main_carousel_push)
router.post('/main_carousel_pull', adminAuth, laptoper_controller.main_carousel_pull)

//specs
router.post('/specs_get', laptoper_controller.specs_get)
  //admin
router.post('/specs_get_all',  adminAuth, laptoper_controller.specs_get_all)
router.post('/specs_add',  adminAuth, laptoper_controller.specs_add)
router.post('/specs_del', adminAuth, laptoper_controller.specs_del)
router.post('/spec_add',  adminAuth, laptoper_controller.spec_add)
router.post('/spec_del', adminAuth, laptoper_controller.spec_del)

//department
router.post('/department_get', laptoper_controller.department_get)
  //admin
router.post('/department_add',  adminAuth, imgUpload, laptoper_controller.department_add)
router.post('/department_del', adminAuth, laptoper_controller.department_del)
//department catagorys
  //admin
router.post('/catagory_add', adminAuth, imgUpload, laptoper_controller.catagory_add)
router.post('/catagory_del', adminAuth, laptoper_controller.catagory_del)
//department catagory designed and bends admin
router.post('/catagory_designed_add', adminAuth, imgUpload, laptoper_controller.catagory_designed_add)
router.post('/catagory_designed_del', adminAuth, laptoper_controller.catagory_designed_del)
router.post('/catagory_brands_add', adminAuth, imgUpload, laptoper_controller.catagory_brands_add)
router.post('/catagory_brands_del', adminAuth, laptoper_controller.catagory_brands_del)

//shares
router.post('/promos_get', laptoper_controller.promos_get)
router.post('/promo_get/:id', laptoper_controller.promo_get)
  //admin
router.post('/promo_add', adminAuth, imgUpload, laptoper_controller.promo_add)
router.post('/promo_del', adminAuth, laptoper_controller.promo_del)

//blog
router.post('/blog_get', laptoper_controller.blog_get)
router.post('/post_get', laptoper_controller.post_get)
  //admin
router.post('/post_add', adminAuth, laptoper_controller.post_add)
router.post('/post_del', adminAuth, laptoper_controller.post_del)

module.exports = router;
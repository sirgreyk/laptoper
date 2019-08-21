const Product = require('../models/product')
const path = require('path')
const fs = require('fs')

exports.products_get = async (req, res, next) => {
  try {
      const body = req.body

      const queryOptions = {}
      await body.share ? queryOptions.share = body.share : null
      await body.discount ? queryOptions.discount = body.discount : null
      await body.catagory ? queryOptions.catagory = body.catagory : null
      await body.specsVariants ? queryOptions["specs.variant"] = { $all: body.specsVariants } : null
      await body.priceRange ? queryOptions["pricing.currentPrice"] = {} : null
      await body.priceRange && body.priceRange.gte ? queryOptions["pricing.currentPrice"]["$gte"] = body.priceRange.gte : null
      await body.priceRange && body.priceRange.lte ? queryOptions["pricing.currentPrice"]["$lte"] = body.priceRange.lte : null

      const sortOptions = {}
      await body.sortBy === "rate" ?  sortOptions["rating.number"] = 1 : null
      await body.sortBy === "low"  ?  sortOptions["pricing.currentPrice"] = 1 : null
      await body.sortBy === "high" ?  sortOptions["pricing.currentPrice"] = -1 : null
      await body.sortBy === "date" ?  sortOptions.date = -1 : null

      const products = await Product.find(queryOptions).sort(sortOptions)

      // await products.forEach(prod => {
      //   prod.imgs = undefined
      //   prod.fullDescription = undefined
      //   prod.specs = undefined
      //   prod.rating = undefined
      // })
      await res.json(products)
  } catch(e) {
      await res.status(400).json(e)
      await next(e)
  } 
}

exports.product_get = async (req, res, next) => {
  try {
      const product = await Product.findOne({ _id: req.body.id})
      await res.json(product)
  } catch(e) {
      await res.status(400).json(e)
      await next(e)
  } 
}

exports.products_get_by_id = async (req, res, next) => {
  try {
    const body = req.body
    let products = []
    await body.history ? body.history.map(id => {
      const product = Product.findOne({ _id: id})
      products.push(product)
    }) : null
    await res.json(products)
  } catch(e) {
      await res.status(400).json(e)
      await next(e)
  } 
}

//user controllers
exports.product_add_rate = async (req, res, next) => {
  try {
      const user = req.user
      const product = await Product.findOne({ _id: req.body.id})
      await (product.rating = product.rating.filter(e => e.userId !== user._id.toString()))
      await (product.rating.push({ userId: user._id, number: req.body.number }))
      let sum = 0
      await product.rating.map(e => sum = sum + e.number)
      await (product.rate = sum / product.rating.length)
      await (product.ratingNumber = product.rating.length)
      await product.save()
      await res.sendStatus(200)
  } catch(e) {
      await res.status(400).json(e)
      await next(e)
  } 
}
exports.product_del_rate = async (req, res, next) => {
  try {
      const user = req.user
      const product = await Product.findOne({ _id: req.body.id})
      await (product.rating = product.rating.filter(e => e.userId !== user._id.toString()))
      let sum = 0
      await product.rating.map(e => sum = sum + e.number)
      await (product.rate = sum ? sum / product.rating.length : 0)
      await (product.ratingNumber = product.rating.length)
      await product.save()
      await res.sendStatus(200)
  } catch(e) {
      await res.status(400).json(e)
      await next(e)
  } 
}

//admin controllers
exports.product_new = async (req, res, next) => {
  try {
      const body = req.body
      const arrayPaths = []
      await req.files.map(file => {
        const multerpath = file.path;
        const pathWithOriginalName = path.join(__dirname,`../uploads/${file.originalname}`);
        fs.rename(multerpath, pathWithOriginalName, err => {
          if (err) return res.status(400).json(err)
        })
        arrayPaths.push(`uploads/${file.originalname}`)
      })
      
      const newProduct = await new Product({
        department: body.department,
        catagory: body.catagory,
        date: Date.now(),
        name: body.name,
        chipType: 'new',
        pricing: {
          price: body.price
        },
        img: `uploads/${req.files[0].originalname}`,
        imgs: arrayPaths,
        description: body.description,
        shortSpecs: body.shortSpecs,
      })
      body.specs.map(spec => newProduct.specs.push(spec))

      await newProduct.save()
      await res.json(newProduct)
      // await res.sendStatus(200)
  } catch(e) {
      await res.status(400).json(e)
      await next(e)
  } 
}

exports.product_add_share = async (req, res, next) => {
  try {
      const product = await Product.findOne({ _id: req.body.id})
      await (product.share = req.body.share)
      await product.save()
      await res.sendStatus(200)
  } catch(e) {
      await res.status(400).json(e)
      await next(e)
  } 
}
exports.product_del_share = async (req, res, next) => {
  try {
      await Product.updateOne({ _id: req.body.id}, { $unset: { share: "" } })
      await res.sendStatus(200)
  } catch(e) {
      await res.status(400).json(e)
      await next(e)
  } 
}

exports.product_add_discount = async (req, res, next) => {
  try {
      const product = await Product.findOne({ _id: req.body.id})
      await (product.discount = req.body.discount)
      await product.save()
      await res.sendStatus(200)
  } catch(e) {
      await res.status(400).json(e)
      await next(e)
  } 
}
exports.product_del_discount = async (req, res, next) => {
  try {
      await Product.updateOne({ _id: req.body.id}, { $unset: { discount: "" } })
      await res.sendStatus(200)
  } catch(e) {
      await res.status(400).json(e)
      await next(e)
  } 
}

exports.product_set_chip = async (req, res, next) => {
  try {
      const product = await Product.findOne({ _id: req.body.id})
      await (product.chipType = req.body.chip)
      await product.save()
      await res.sendStatus(200)
  } catch(e) {
      await res.status(400).json(e)
      await next(e)
  } 
}
exports.product_del_chip = async (req, res, next) => {
  try {
      await Product.updateOne({ _id: req.body.id}, { $unset: { chipType: "" } })
      await res.sendStatus(200)
  } catch(e) {
      await res.status(400).json(e)
      await next(e)
  } 
}

exports.product_del = async (req, res, next) => {
  try {
      await Product.deleteOne({ _id: req.body.id})
      await res.sendStatus(200)
  } catch(e) {
      await res.status(400).json(e)
      await next(e)
  } 
}
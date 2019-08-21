const User = require('../models/user');
const fs = require('fs')
//checked 09.06.2019 4.25

exports.user_signup = async (req, res, next) => {
  try {
    const body = req.body
    const user = await User.findOne({ email: body.email })
    const phone = await User.findOne({ phoneNumber: body.phoneNumber })
    if (user) {
      console.log(user)
      return await res.sendStatus(401)
    } else if (phone) {
      console.log(phone)
      return await res.sendStatus(401)
    } else {
      const newUser = await new User({
        email: body.email,
        firstName: body.firstName,
        secondName: body.secondName,
        phoneNumber: body.phoneNumber,
      })
      await newUser.generateHash(req.body.password)
      await newUser.save()
      await res.sendStatus(200)
    }
  } catch(e) {
      await res.status(400).json(e)
      await next(e)
  }
}
exports.user_login = async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.body.email })
    if (!user) { 
      return await res.json({ message: 'User not found.' })
     }
    const validate = await user.validatePassword(req.body.password)
    if (!validate) { 
      return await res.json({ message: 'Incorect password.' })
    } else {
      const token = await user.generateJWT()
      return res.cookie('token', token/*, {httpOnly: true}*/).sendStatus(200)
    }
  } catch(e) {
      await res.status(400).json(e)
      await next(e)
  }
}
exports.user_logout = async (req, res, next) => {
  try {
    await res.clearCookie('token').clearCookie('auth').status(200).end()
  } catch(e) {
    await res.json({err: 'Could logout.'})
    next(e)
  } 
}

exports.user_get = async (req, res, next) => {
  try {
    await res.json(req.user)
  } catch(e) {
    await res.status(400).json(e)
    await next(e)
  }
}
exports.user_edit = async (req, res, next) => {
  try {
    const user = await req.user
    const body = await req.body
    await body.secondName ? user.secondName = body.secondName : null
    await body.firstName ? user.firstName = body.firstName : null
    await body.phoneNumber ? user.phoneNumber = body.phoneNumber : null
    await req.files.img[0] ? user.img = fs.readFileSync(req.files.img[0].path) : null
    await body.adress ? user.adress = body.adress : null
    await body.about ? user.about = body.about : null
    
      //for test
      await res.json(laptoper)
    // await user.save()
    // await res.json(user)
  } catch(e) {
    await res.status(400).json(e)
    await next(e)
  }
}

// user history
exports.user_history = async (req, res, next) => {
  try {
    const user = await req.user
    await user.history.push(req.body.id)
    await user.save()
    await res.json(user)
  } catch(e) {
    await res.status(400).json(e)
    await next(e)
  }
}

// USER CART controllers
exports.user_cart_push = async (req, res, next) => {
  try {
    const user = await req.user
    const id = await user.cart.find(e => e.productId === req.body.productId)
    await id.productId === req.body.productId ? null : user.cart.push({ number: 1, productId: req.body.productId })
    await user.save()
    await res.json(user)
  } catch(e) {
    await res.status(400).json(e)
    await next(e)
  }
}
exports.user_cart_pull = async (req, res, next) => {
  try {
    const user = await req.user
    await user.cart.pull(req.body.id)
    await user.save()
    await res.json(user)
  } catch(e) {
    await res.status(400).json(e)
    await next(e)
  }
}
exports.user_cart_up = async (req, res, next) => {
  try {
    const user = await req.user
    const cartProd = await user.cart.id(req.body.id)
    cartProd.number = await cartProd.number + 1
    await user.save()
    await res.json(user)
  } catch(e) {
    await res.status(400).json(e)
    await next(e)
  }
}
exports.user_cart_down = async (req, res, next) => {
  try {
    const user = await req.user
    const cartProd = await user.cart.id(req.body.id)
    await cartProd.number <= 1 ? null : cartProd.number = cartProd.number - 1
    await user.save()
    await res.json(user)
  } catch(e) {
    await res.status(400).json(e)
    await next(e)
  }
}

//USER COMPARES
exports.user_compare_push = async (req, res, next) => {
  try {
    const user = req.user
    const body = req.body

    const compareCatagory = await user.compare.find(e => e.catagory === body.catagory)
    await compareCatagory ? 
      compareCatagory.products.find(id => id === body.productId) ? null : compareCatagory.products.push(body.productId)
      : 
      user.compare.push({
        catagory: body.catagory,
        products: [body.productId]
      })

    await user.save()
    await res.json(user)
  } catch(e) {
    await res.status(400).json(e)
    await next(e)
  }
}
exports.user_compare_pull = async (req, res, next) => {
  try {
    const user = req.user
    const body = req.body

    const compareCatagory = await user.compare.find(e => e.catagory === body.catagory)
    const flteredProducts = await compareCatagory.products.filter(e => e !== body.productId)
    await flteredProducts.length ? (compareCatagory.products = flteredProducts) : user.compare.pull(compareCatagory._id)
    await user.save()
    await res.json(user)
  } catch(e) {
    await res.status(400).json(e)
    await next(e)
  }
}

// user desiresLists
exports.user_list_new = async (req, res, next) => {
  try {
    const user = await req.user
    await user.desiresLists.push({
      name: req.body.name,
      products: []
    })
    await user.save()
    await res.json(user)
  } catch(e) {
    await res.status(400).json(e)
    await next(e)
  }
}
exports.user_list_del = async (req, res, next) => {
  try {
    const user = await req.user
    await user.desiresLists.pull(req.body.id)
    await user.save()
    await res.json(user)
  } catch(e) {
    await res.status(400).json(e)
    await next(e)
  }
}
exports.user_list_push = async (req, res, next) => {
  try {
    const user = await req.user
    const list = await user.desiresLists.id(req.body.id)
    const prodId = await list.products.find(e => e === req.body.productId)
    await prodId === req.body.productId ? null : list.products.push(req.body.productId)
    console.log(list, prodId, req.body)
    await user.save()
    await res.json(user)
  } catch(e) {
    await res.status(400).json(e)
    await next(e)
  }
}
exports.user_list_pull = async (req, res, next) => {
  try {
    const user = await req.user
    const list = await user.desiresLists.id(req.body.id)
    const filteredList = await list.products.filter(e => e !== req.body.productId)
    await (list.products = filteredList)
    // await list.products.pull(req.body.productId)
    await user.save()
    await res.json(user)
  } catch(e) {
    await res.status(400).json(e)
    await next(e)
  }
}

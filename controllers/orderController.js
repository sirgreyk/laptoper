const Order = require('../models/Order')


exports.order_get = async (req, res, next) => {
  try {
    const orders = await Order.find({ userId: req.user._id })
    await res.json(orders)
  } catch(e) {
    await res.status(400).json(e)
    await next(e)
  }
}

exports.order_new = async (req, res, next) => {
  try {
    const user = req.user
    const body = req.body
    const lastOrder = await Order.find({}).sort({ number: 1 }).limit(1)
    const order = await new Order({
      history: [{
        status: 'processed',
        date: Date.now(),
      }],
      active: true,
      date: Date.now(),
      number: lastOrder.number + 1,
      products: body.products,
        userId: user._id,
        phoneNumber: user.phoneNumber,
        email: user.email
    })
    await order.save()
    await res.sendStatus(200)
  } catch(e) {
    await res.status(400).json(e)
    await next(e)
  }
}

exports.order_cancel = async (req, res, next) => {
  try {
    const order = await Order.find({ _id: req.body.id, number: req.number.number})
    await (order.active = false)
    await order.history.push({
      status: 'cancel',
      date: Date.now(),
    })
    await order.save()
    await res.sendStatus(200)
  } catch(e) {
    await res.status(400).json(e)
    await next(e)
  }
}

exports.order_update_status = async (req, res, next) => {
  try {
    const order = await Order.find({ _id: req.body.id, number: req.number.number})

    await order.history.push({
      status: req.body.status,
      date: Date.now(),
    })
    await order.save()
    await res.sendStatus(200)
  } catch(e) {
    await res.status(400).json(e)
    await next(e)
  }
}
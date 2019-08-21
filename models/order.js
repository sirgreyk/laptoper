const mongoose = require('mongoose')
const Schema = mongoose.Schema

const OrderSchema = new Schema({
  history: [{
    status: { type: String, enum: ['processed', 'accepted', 'delivery', 'completing', 'going', 'delivered', 'done', 'rejected'] },
    date: Date,
  }],
  active: Boolean,
  date: Date,
  number: Number,
  products: [{
    id: Schema.Types.ObjectId,
    number: String,
  }],
  uaerId: Schema.Types.ObjectId,
  phoneNumber: Number,
  email: String,
})



const Order = mongoose.model('Order', OrderSchema)

module.exports = Order
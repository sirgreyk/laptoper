const mongoose = require('mongoose')
const Schema = mongoose.Schema

const PromoSchema = new Schema({
  img: Buffer,
  name: String,
  types: { 
    share: Boolean,
    discount: Boolean,
    gift: Boolean,
    pre_oreder: Boolean,
  },
  condition: String,
  description: String,
  start: Date,
  end: Date,
  active: { type: Boolean, default: false }
})



const Promo = mongoose.model('Promo', PromoSchema)

module.exports = Promo
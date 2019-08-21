const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ProductSchema = new Schema({
  department: String,
  catagory: String,
  date: Date,
  name: String,
  pricing: {
    price: Number,
    sale: { type: Boolean, default: false },
    old: Number
  },
  img: String,
  imgs: [String],
  // imgs: [{
  //     alt: String,
  //     img: String,
  //     largeImg: String
  // }],
  shortSpecs: String,
  description: String,
  // description: [{
  //   title: String,
  //   text: String
  // }],
  specs: [{ 
    specType: String,
    name: String,
    variant: String,
  }],

  chipType: { type: String, enum: ['new', 'top', 'super', 'exclusive', 'action'] },

  share: String,
  discount: String,

  rate: Number,
  ratingNumber: Number,
  rating: [{
    userId: String,
    number: Number
  }]
})

const Product = mongoose.model('Product', ProductSchema)

module.exports = Product
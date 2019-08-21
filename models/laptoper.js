const mongoose = require('mongoose')
const Schema = mongoose.Schema

const LaptoperSchema = new Schema({
  mainCarousel: [{
    img: Buffer,
    largeImg: Buffer,
    url: String,
  }],
})



const Laptoper = mongoose.model('Laptoper', LaptoperSchema)

module.exports = Laptoper
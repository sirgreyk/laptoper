const mongoose = require('mongoose')
const Schema = mongoose.Schema

const MainSchema = new Schema({
  img: String,
  url: String,
})



const MainCarousel = mongoose.model('MainCarousel', MainSchema)

module.exports = MainCarousel
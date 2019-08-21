const mongoose = require('mongoose')
const Schema = mongoose.Schema

const PostSchema = new Schema({
  img: Buffer,
  name: String,
  date: Date,
  type: { type: String, enum: ['news', 'article', 'review', 'advice'] },
  post: String,
})



const Post = mongoose.model('Post', PostSchema)

module.exports = Post
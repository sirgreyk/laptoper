const mongoose = require('mongoose')
const Schema = mongoose.Schema

const CommentSchema = new Schema({
    productId: Schema.Types.ObjectId,
    rating: Number,
    date: Date,
    author: {
        id: Schema.Types.ObjectId,
        firstName: String,
        secondeName: String
    },
    text: String,
    advantages: String,
    disadvantages: String,
    images: [ String ],
    answers: [ {
        date: Date,
        author: {
            id: Schema.Types.ObjectId,
            firstName: String,
            secondeName: String
        },
        text: String,
    } ],
})



const Comment = mongoose.model('Comment', CommentSchema)

module.exports = Comment
const mongoose = require('mongoose')
const crypto = require('crypto')
const jwt = require('jsonwebtoken')
const Schema = mongoose.Schema

const UserSchema = new Schema({
    salt: {
        type: String,
        reqiured: true,
    },
    hash: {
        type: String,
        reqiured: true,
    },
    email: {
        type: String,
        reqiured: true,
        unique: true
    },
    firstName: {
        type: String,
        reqiured: true,
    },
    secondName: {
        type: String,
        reqiured: true,
    },
    phoneNumber: {
        type: String,
        reqiured: true,
    },
    img: Buffer,
    adress: {
        Region: String,
        Area: String,
        MainDescription: String,
        SettlementTypeCode: String,
        Warehouses: Number,
    },
    about: {
        bornDate: Date,
        gender: { type: String, enum: ['woman', 'man'] },
        children: { type: Boolean, default: false },
        car: { type: Boolean, default: false },
        hobby:{
          run: { type: Boolean, default: false },
          bike: { type: Boolean, default: false },
          handMade: { type: Boolean, default: false },
          music: { type: Boolean, default: false },
          turism: { type: Boolean, default: false },
          cyberSports: { type: Boolean, default: false },
          fishing: { type: Boolean, default: false },
          hunting: { type: Boolean, default: false },
          gardening: { type: Boolean, default: false },
          fitnes: { type: Boolean, default: false },
          yoga: { type: Boolean, default: false },
        },
    },
    cart: [ {
      number: Number,
      productId: String 
    } ],
    compare: [ {
        catagory: String,
        products: [ String ]
    } ],
    lists: [ {
      name: String,
      products: [ String ]
    } ],
    history: [ String ],
    settings: {
        view: { type: Boolean, default: true }
    },
})


UserSchema.methods.generateHash = async function(password) {
    this.salt = await crypto.randomBytes(16).toString('hex')
    this.hash = await crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex')
}
UserSchema.methods.validatePassword = async function(password) {
    const hash = await crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex')
    return await this.hash === hash
}
UserSchema.methods.generateJWT = async function() {
    return jwt.sign({  _id : this._id }, 'secret')
}

const User = mongoose.model('User', UserSchema)

module.exports = User
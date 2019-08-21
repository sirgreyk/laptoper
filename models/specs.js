const mongoose = require('mongoose')
const Schema = mongoose.Schema
//         ??
const SpecsSchema = new Schema({
    catagory: String,//laptop
    specs: [{
        specType: String, // 'processor'
        name: String,  // 'процесор'
        variants: [ String ]
    }],

})



const Specs = mongoose.model('Specs', SpecsSchema)

module.exports = Specs
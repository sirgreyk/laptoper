const mongoose = require('mongoose')
const Schema = mongoose.Schema

//ЩЕ ТРОХИ ДОРОБИТИ див. стр розетки "ноутбуки"

const DepartmentSchema = new Schema({
    name: String, // 'laptops & computer'
    img: String, // url|src
    catagorys: [{
      name: String, // 'laptopps'
      img: String, // url|src
      designed: [{
        img: String,
        name: String  // for gaming
      }],
      brands: [{
        img: String,
        name: String //apple
      }]
    }]
})



const Department = mongoose.model('Department', DepartmentSchema)

module.exports = Department
const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const helmet = require('helmet')
const cors = require('cors')
const mongoose = require('mongoose')
const errorHandler = require('errorhandler')

//Configure isProduction variable
const isProduction = process.env.NODE_ENV === 'production'

//Initiate our app
const app = express()

//Configure app
app.use(cors())
app.use(helmet())
app.use(cookieParser())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, 'client_m/build')))
app.use('*/uploads', express.static(__dirname + '/uploads'))

if(!isProduction) {
  app.use(errorHandler())
  app.use(morgan('dev'))
}


//Configure Mongoose :
mongoose.connect('mongodb://laptoper:199729Qq@ds233737.mlab.com:33737/laptoper')
  .then(() => console.log('--- db connected.'))
  .catch(err => console.error(err))

//configs
require('./config/passport')

//routes
const comment = require('./routes/comment')
const laptoper = require('./routes/laptoper')
const order = require('./routes/order')
const product = require('./routes/product')
const user = require('./routes/user')

app.use('*/api/comment', comment )
app.use('*/api/laptoper', laptoper )
app.use('*/api/order', order )
app.use('*/api/product', product )
app.use('*/api/user', user )

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'client_m/build', 'index.html'))
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`--- Laptoper app running on ${PORT} port. In ${isProduction ? 'production' : 'development'} mode`))
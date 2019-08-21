
const passport = require('passport'); 
const LocalStrategy = require('passport-local').Strategy
const User = require('../models/user')

// passport.use('signup', new LocalStrategy({
//   usernameField : 'email',
//   passwordField : 'password',
//   passReqToCallback : true
// }, async (req, email, password, done) => {
//     try {
//       const user = await User.findOne({ email })
//       if (user) {
//           return await done(null, false, req.flash('signupMessage', 'That email is already taken.'))
//       } else {
//         const newUser = await new User({
//           email: req.body.email,
//           name: req.body.name,
//         })
//         await newUser.generateHash(req.body.password)
//         await newUser.save()
//         return await done(null, newUser)
//       }
//     } catch (e) {
//       return await done(e)
//     }
//   })
// )


// passport.use('login', new LocalStrategy({
//   usernameField : 'email',
//   passwordField : 'password'
// }, async (email, password, done) => {
//   try {
//     const user = await User.findOne({ email })
//     if (!user) { return done(null, false) }
//     const validate = await user.validatePassword(password)
//     if (!validate) { return done(null, false) }
//     return done(null, user)
//   } catch (e) {
//     return done(e)
//   }
// }))

const JWTstrategy = require('passport-jwt').Strategy
const cookieExtractor = function(req) {
  let token = null
  if (req && req.cookies) { token = req.cookies['token'] }
  return token
}
const options = {}
options.secretOrKey = 'secret'
options.jwtFromRequest = cookieExtractor

passport.use('user', new JWTstrategy(options, async (jwt_payload, done) => {
  try {
    const user = await User.findById(jwt_payload._id, '-hash -salt')
    if (user) { return done(null, user) }
    return done(null, false)
  } catch (e) {
    return done(e, false)
  }
}))

passport.use('admin', new JWTstrategy(options, async (jwt_payload, done) => {
  try {
    const user = await User.findById(jwt_payload._id, '-hash -salt')
    if (user) { return done(null, user) }
    return done(null, false)
  } catch (e) {
    return done(e, false)
  }
}))
var jwt = require('jsonwebtoken')
require('dotenv').config()

class CheckAuth {
  static isLogin (req, res, next) {
    console.log(req)
    jwt.verify(req.headers.token, process.env.JWT_SECRET_KEY, function(err, decoded) {
      if (err) {
        res.status(401).send(err)
      } else {
        req.verifyUser = decoded
        next()
      }
    })
  }
}
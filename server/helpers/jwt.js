var jwt = require('jsonwebtoken')
require('dotenv').config()

module.exports = (req, res, next) => {
  return new Promise((resolve, reject) => {
    console.log(req);
    let payload = {
      id: req.id,
      name: req.name,
      email: req.email,
      isLogin: true,
      isAdmin: req.isAdmin
    }

    jwt.sign(payload, process.env.JWT_SECRET_KEY, { expiresIn: '1h' }, function(err, token) {
      if (err) {
        reject(err)
      } else {
        resolve(token)
      }
    })
  })
}

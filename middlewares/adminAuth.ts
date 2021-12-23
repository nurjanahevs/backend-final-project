import jwt from 'jsonwebtoken'
const User = require ('../models/HeadMaster')

const adminAuth = (req,res,next) => {
    let token = req.headers['access_token'] || req.headers['authorization']
    if (token.startsWith('Bearer')) {
        token = token.slice(7, token.length);
      }
    if(token) {
        jwt.verify(token,'sukamaju',(err,decoded) => {
            if(err || decoded.role == 'Headmaster') next({name : 'INVALID_TOKEN'})
            else {
                next()
            }
        })
    }else next({name : 'MISSING_TOKEN'})
}
module.exports = adminAuth
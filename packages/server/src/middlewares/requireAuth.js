import jwt from 'jsonwebtoken'
import mongoose from 'mongoose'
import { jwtConfig } from '../configs'
import { User } from '../models/users'

module.exports = async (req, res, next) => {
  const authorization = req.get('authorization')
  if (!authorization) {
    return res.status(401).json({ error: 'you must be logged in' })
  }
  const token = authorization.replace('Bearer ', '')
  jwt.verify(token, jwtConfig.secret, (err, payload) => {
    if (err) {
      return res.status(401).json({ error: 'you must be logged in' })
    }
    const { id } = payload
    User.findById(id).then((userdata) => {
      req.user = userdata
      next()
    })
  })
}

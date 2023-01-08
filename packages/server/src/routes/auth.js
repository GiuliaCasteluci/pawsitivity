import express from 'express'
import { User } from '../models/users'

const router = express.Router()

router.route('/').get((req, res, next) => {
  res.send('auth endpoint')
  res.end(JSON.stringify('Auth route'));
})

router.post('/signup', (req, res) => {
  const { username, password, email } = req.body;
  User.findOne({username: username}).then((savedUser) => {
    if (savedUser) {
      return res.status(422).json({error: 'User already exists'})
    }
  })

  const user = new User({
    username,
    password,
    email
  })
  console.log(user)
  user.save().then(user => {
    res.status(200).json({message:"User created"})
  }).catch(err => {
    res.status(202).json({message: err.message})
  })
})

module.exports = router

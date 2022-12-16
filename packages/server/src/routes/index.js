import { Router } from 'express';
import express from 'express'

const router = express.Router()

// All routes start with the API_URL (default '/api')

router.get('/', (req, res, next) => {
  res.status(200).send('api endpoint')
})

router.use('/login', userRouter)


export default router;
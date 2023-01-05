import { Router } from 'express';
import petRouter from './pets'

const router = Router();

// All routes start with the API_URL (default '/api')
router.get('/', (req, res, next) => {
    res.status(200).send('api endpoint')
  })
  
  router.use('/pets', petRouter)

export default router;
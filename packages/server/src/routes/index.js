import express from 'express';
import petFormBackEnd from './petFormBackEnd';
import fileRoutes from './upload';
import fileUploader from "express-fileupload"

const router = express.Router();
import authRouter from './auth'


router.get('/', (req, res) => {
    res.status(200).send('api endpoint');
});

// All routes start with the API_URL (default '/api')

router.use('/pets', petFormBackEnd);
router.use("/files", fileUploader, fileRoutes)

router.get('/', (req, res, next) => {
  res.status(200).send('api endpoint')
})
router.use('/auth', authRouter)

module.exports = router

export default router;
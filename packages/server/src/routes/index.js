import express from 'express';
import petFormBackEnd from './petFormBackEnd';
import fileRoutes from './upload';
import fileUploader from "express-fileupload"

const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).send('api endpoint');
});

// All routes start with the API_URL (default '/api')

router.use('/pets', petFormBackEnd);
router.use("/files", fileUploader, fileRoutes)


module.exports = router;
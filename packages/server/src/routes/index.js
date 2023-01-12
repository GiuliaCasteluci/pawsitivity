import express from 'express';
import petFormBackEnd from "./petFormBackEnd";
import fileRoutes from "./upload";
import fileUploader from "express-fileupload";
import authRouter from "./auth";
import likes from './likes'

const router = express.Router();

// All routes start with the API_URL (default '/api')
router.get("/", (req, res, next) => {
  res.status(200).send("api endpoint");
});

router.use("/auth", authRouter);
router.use("/pets", petFormBackEnd);
router.use("/files", fileUploader, fileRoutes);
router.use('/like', likes)

module.exports = router;
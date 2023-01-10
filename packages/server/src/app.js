import "dotenv/config";
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { API_URL, DB_URL } from "./configs";
import router from "./routes/index.js";
import path from "path";
import fileUpload from "express-fileupload";

mongoose.connect(DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on("connected", () => {
  console.log("connected to mongoDB", API_URL);
});

mongoose.connection.on("error", (err) => {
  console.log("err connecting", err);
});

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(API_URL, router);

app.post("/api/upload", fileUpload(), (req, res) => {
  console.log("Is this working");
  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send("No files were uploaded.");
  }

  let image = req.files.image;

  image.mv(path.join(__dirname, `./public/images/${image.name}`), (err) => {
    if (err) {
      return res.status(500).send(err);
    }

    res.send(`/images/${image.name}`);
  });
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.use(API_URL, router);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../../client/build")));
  app.all("*", (req, res, next) => {
    res.sendFile(path.resolve(__dirname, "../../client/build/index.html"));
  });
}

export default app;

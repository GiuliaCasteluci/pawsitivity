import express from "express";
import { User } from "../models";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { jwtConfig } from "../configs";

const router = express.Router();

router.route("/").get((req, res, next) => {
  res.send("auth endpoint");
  res.end(JSON.stringify("Auth route"));
});

router.post("/signup", (req, res) => {
  const { username, password, email } = req.body;
  User.findOne({ username: username }).then((savedUser) => {
    if (savedUser) {
      return res.status(422).json({ error: "User already exists" });
    }
  });
  bcrypt.hash(password, 12).then((hashedPassword) => {
    const user = new User({
      username,
      passwordHash: hashedPassword,
      email,
    });
    user
      .save()
      .then((user) => {
        res.status(200).json({ message: "User created" });
      })
      .catch((err) => {
        res.status(202).json({ message: err.message });
      });
  });
});

router.post("/signin", async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(422).json({ error: "missing username or password" });
  }

  const user = await User.findOne({ username: username });
  const passwordCorrect =
    user === null ? false : await bcrypt.compare(password, user.passwordHash);

  if (!(user && passwordCorrect)) {
    return res.status(401).json({
      error: "invalid username or password",
    });
  }

  const userForToken = {
    username: user.username,
    id: user._id,
  };

  const token = jwt.sign(userForToken, jwtConfig.secret);
  res.status(200).send({ token, username, uid: user.id });
});
module.exports = router;

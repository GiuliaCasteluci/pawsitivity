  import express from "express";
  import bcrypt from "bcryptjs";
  import { User } from "../models/users";
  import { requireAuth } from "../middlewares/requireAuth";

  const router = express.Router();

  router
    .route("/:id")
    .get(requireAuth, async (request, response) => {
      const populateQuery = [
        {
          path: "posts",
          populate: { path: "author", select: ["username", "profile_image"] },
        },
      ];

      const user = await User.findOne({ username: request.params.id })
        .populate(populateQuery)
        .exec();
      if (user) {
        response.json(user.toJSON());
      } else {
        response.status(404).end();
      }
    })
    .put(requireAuth, async (request, response) => {
      console.log(request.body);
      const { password, currentPassword } = request.body;
      const { id } = request.params;

      if (password) {
        const hashedCurrentPassword = await bcrypt.hash(currentPassword, 12);

        try {
          const hashedpassword = await bcrypt.hash(password, 12);
          const userUpdate = await User.findByIdAndUpdate(
            id,
            {
              passwordHash: hashedpassword,
            },
            {
              new: true,
            }
          );
          response.json(userUpdate.toJSON());
        } catch (error) {
          response.status(404).end();
        }
      } else if (profileImage) {
        try {
          const userUpdate = await User.findByIdAndUpdate(
            {
              _id: id,
            },
            {
              profile_image: profileImage,
            },
            {
              new: true,
            }
          ).populate({path: 'posts', populate: {path:"author"}});

          response.json(userUpdate.toJSON());
        } catch (error) {
          response.status(404).end();
        }
      }
      response.status(400).end();
    });

  module.exports = router;

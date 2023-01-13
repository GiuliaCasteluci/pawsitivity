import express, { response } from "express";
import PetForm from "../models/petFormModel";
import mongoose from "mongoose";

const router = express.Router();

router.route("/", (req, res) => {
  res.status(200).send("api endpoint");
});

// All routes start with the API_URL (default '/api')
router.get("/", async (req, res, next) => {
  try {
    const allPets = await PetForm.find();

    res.json(allPets);
  } catch (error) {
    next(error);
  }
});

router.post("/", async (request, response, next) => {
  const { petType, name, age, gender, description, image } = request.body;

  try {
    const pet = new PetForm({
      petType,
      name,
      age,
      gender,
      description,
      image,
      dateAdded: new Date(),
      _id: new mongoose.Types.ObjectId(),
    });

    const savedPet = await pet.save();

    response.json(savedPet.toJSON());
    console.log(response);
    res.status(200).send(savedPet);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

router.delete("/:id", async (request, response, next) => {
  try {
    const post = await PetForm.findByIdAndDelete(request.params.id);
    response.json(post);
  } catch (error) {
    next(error);
  }
});

// not working , works in postman
router.get("/api/pets", async (req, res) => {
  try {
    const pets = await PetForm.find().sort({ dateAdded: -1 });
    res.json(pets);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/:id", async (request, response, next) => {
  try {
    const pet = await PetForm.findById(request.params.id);
    response.json(pet);
  } catch (error) {
    next(error);
  }
});

router.patch("/:id", async (request, response, next) => {
  console.log(request);
  try {
    const updated = await PetForm.findByIdAndUpdate(
      request.params.id,
      request.body,
      {
        new: true,
      }
    );
    console.log(updated);

    response.json(updated);
  } catch (error) {
    next(error);
  }
});

router.get("/", (req, res) => {
  res.status(200).send("petform endpoint");
});

module.exports = router;

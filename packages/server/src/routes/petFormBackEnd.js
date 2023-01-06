import express, { response } from "express";
import PetForm from "../../models/petFormModel";

const router = express.Router();

router.route("/", (req, res) => {
  res.status(200).send("api endpoint");
});

// All routes start with the API_URL (default '/api')

router.get("/", async(req, res, next) => {
  try {
    const allPets = await PetForm.find();

    res.json(allPets)
    
  } catch (error) {
    next(error)
  }
})

router.post("/", async (request, response, next) => {
  const { petType, name, age, gender, description, image } = request.body;

  try {
    const pet = new PetForm({
      petType,
      name,
      age,
      gender,
      description,
      image
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


router.get("/", (req, res) => {
  res.status(200).send("petform endpoint");
});





module.exports = router;
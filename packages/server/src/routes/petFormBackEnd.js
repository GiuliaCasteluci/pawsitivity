import express, { response } from "express";
import PetForm from "../../models/petFormModel";

const router = express.Router();

router.route("/", (req, res) => {
  res.status(200).send("api endpoint");
});

// All routes start with the API_URL (default '/api')

// router.post("/", (req, res) => {
//   console.log(req.body);
//   const { petType, name, age, gender, description, image } = req.body;
//   res.status(200).send("petform endpoint");
// });

// router.post("/", (req, res) => {
//   console.log(req.body);
//   const { petType, name, age, gender, description, image } = req.body;


//   PetForm.create({
//     petType,
//     name,
//     age,
//     gender,
//     description,
//     image
//   })
//     .then((pet) => {
//       // Send a response to the client
//       res.status(200).send(pet);
//     })
//     .catch((error) => {
//       console.error(error);
//       res.status(500).send(error);
//     });
// });

// router.post("/", requireAuth, async (request, response, next) => {
//   const { text } = request.body;
//   const { user } = request;

//   const post = new Post({
//     text: text,
//     author: user._id,
//   });

//   try {
//     const savedPost = await post.save();
//     user.posts = user.posts.concat(savedPost._id);

//     await user.save();

//     response.json(savedPost.toJSON());
//   } catch (error) {
//     next(error);
//   }
// });

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

  
  // const petForm = new PetForm({
  // petType,
  // name,
  // age,
  // gender,
  // description,
  // image,
  // });
  
  // try {
  // const savedPetForm = await petForm.save();
  // user.petForms = user.petForms.concat(savedPetForm._id);
  

  // await user.save();
  
  // response.json(savedPetForm.toJSON());
  // } catch (error) {
  // next(error);
  // }
  // });

router.get("/", (req, res) => {
  res.status(200).send("petform endpoint");
});





module.exports = router;

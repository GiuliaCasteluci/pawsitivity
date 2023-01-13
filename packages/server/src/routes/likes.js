import express, { response } from "express";
import PetForm from "../models/petFormModel";
import mongoose from "mongoose";
import User from "../models/users";


const router = express.Router();

router.get("/", async (req, res, next) => {
    try {
      const allPets = await PetForm.find();
  
      res.json(allPets);
    } catch (error) {
      next(error);
    }
  });

router.patch('/:id', async (request, response) => {

    const userId = request.body.user
    const pet = await PetForm.findById(request.body.pet)
    const user = await User.findById(userId)
    if(!pet) {
      response.status(422).json({error: 'Cant find pet'})
    }  if (user.postLikes.includes(pet)){
        console.log( 'error: Pet liked already')
        response.json({error: 'Pet liked already'})
      } try{
        let updated = await User.findByIdAndUpdate(
           {_id: userId},
           {$push: {postLikes: pet}})
           response.json(updated)
    } catch (err) {
      return response.status(422).json({ error: err})
    }}
);

router.get("/likes/:id", async (request, response, next) => {
  const userId = request.params.id
  const user = await User.findById(userId)
  try{
    console.log(user)
    response.json(user.postLikes)
} catch (err) {
  next(err)
}});

    module.exports = router;

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

router.put('/:id', async (request, response) => {

    const userId = request.body.user
    const pet = await PetForm.findById(request.body.pet)
    const user = await User.findById(userId)
    if(!pet) {
      response.status(422).json({error: 'Cant find pet'})
    }  if (user.postLikes.includes(pet)){
        response.json({error: 'Pet liked already'})
      } try{
        console.log(user.postLikes)
        user.postLikes.push('me')
        user.save()
        console.log(user.postLikes)
        response.status(200)
        // user.postLikes.push(request.body.pet)
        // await user.save()
        //  db.users.findOneAndUpdate(
        //    {_id: userId},
        //    {$push: {"postLikes": pet._id}}
        // ).save()
        // response.status(200)
    } catch (err) {
      return response.status(422).json({ error: err})
    }}
);

//   router.post('/:petId', async (request, response) => {
//   const {user} = request.body
//   const {pet} = await PetForm.findById(request.params)
  
//   if (!pet) {
//     return response.status(422).json({ error: 'Cannot find pet' })
//   } else {
//   try {
//     if (user.postLikes.includes(pet)){
//       Toast.error('Pet already in your likes')
//     } else {
//       const result = await user.updateOne({
//         $push: {likes: pet._id}
//       }) 
//       response.json(result)
//     }
//   } catch(err) {
//     return response.status(422).json({ error: err})
//   }
// }})

  
//   router.get("/", (req, res) => {
//     res.status(200).send("petform endpoint");
//   })})

    module.exports = router;

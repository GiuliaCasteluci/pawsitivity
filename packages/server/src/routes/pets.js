import express from 'express'
import {Pet} from '../models'

const router = express.Router()

router.get('/', async (req, res, next) => {
        const pets = await Pet.find({}).sort({created: -1})
        res.json(pets.map((pets) => pets.toJSON()))
    })

router.post("/", async (request, response) => {
    const { type, name, age, gender } = request.body;
    const pet = new Pet({
        type: type,
        petId: Object.id,
        name: name,
        age: age,
        gender: gender,
    });
    
    const savedPet = await pet.save();
    response.json(savedPet.toJSON());
    });

export default router
import mongoose from 'mongoose'
const { ObjectId } = mongoose.Schema.Types

const petSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
          },
          petId: {
            type: String,
            required: true,
          },
          species: {
            type: String,
            required: true,
          },
          age: {
            type: Number,
            required: true,
          },
          breed: {
            type: String,
            required: true,
          },
          description: {
            type: String,
            required: false,
          },
          gender: {
            type: Boolean,
            required: true,
          },
          petPic: {
                type: String,
                required: false,
                },
    })
        


const Pet = mongoose.model('Product', productSchema)

export default Pet
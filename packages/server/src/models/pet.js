import mongoose from 'mongoose'
const { ObjectId } = mongoose.Schema.Types

const petSchema = new mongoose.Schema(
    {
        type: {
            type: String,
            required: true,
          },
          petId: {
            type: String,
            required: true,
          },
          name: {
            type: String,
            required: true,
          },
          age: {
            type: Number,
            required: true,
          },
          gender: {
            type: String,
            required: false,
          },
          description: {
            type: String,
            required: false,
          },
          petPic: {
                type: String,
                required: false,
                },
    })
        


const Pet = mongoose.model('Pet', petSchema)

export default Pet
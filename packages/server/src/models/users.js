import mongoose from 'mongoose'
const { ObjectId } = mongoose.Schema.Types

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true,
  },
  passwordHash: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: false,
    required: true,
  },
  profile_image: { type: String, default: '/fox.svg' },
  posts: [
    {
      type: ObjectId,
      ref: 'Post',
    },
  ],
  postLikes: {
    type: Array,
  }
})

const User = mongoose.model('User', userSchema)

export default User
import mongoose from "mongoose";
const { ObjectId } = mongoose.Schema.Types;

const petFormSchema = new mongoose.Schema({
    petType: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    age: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    postedBy: {
        type: ObjectId,
        ref: "User",
    },
    _id: {
        type: mongoose.Types.ObjectId,
        required: true,
    },
});

const PetForm = mongoose.model("PetForm", petFormSchema);

export default PetForm;
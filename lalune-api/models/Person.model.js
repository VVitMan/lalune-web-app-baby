import mongoose from "mongoose";
const { Schema, model } = mongoose;

const zodiacYear = ['Rat', 'Ox', 'Tiger', 'Rabbit', 'Dragon', 'Snake', 'Horse', 'Goat', 'Monkey', 'Rooster', 'Dog', 'Pig'];

const personSchema = new Schema({
    firstName: {
        type: String,
        required: true,
        trim: true,
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
    },
    dateOfBirth: {
        type: Date,
        required: true,
        trim: true,
    },
    zodiacYear: {
        type: String,
        required: true,
        enum: zodiacYear,
    }
}, { timestamps: true })

const Person = model('Person', personSchema);
export default Person;
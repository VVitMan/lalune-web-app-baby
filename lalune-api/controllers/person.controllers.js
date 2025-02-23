import Person from "../models/Person.model.js";

const validateZodiacYear = ['Rat', 'Ox', 'Tiger', 'Rabbit', 'Dragon', 'Snake', 'Horse', 'Goat', 'Monkey', 'Rooster', 'Dog', 'Pig']

// Get all persons
export const getAllPersons = async (req, res) => {
    try {
        const persons = await Person.find();
        if (!persons) {
            return res.status(404).json({ message: "Persons not found" })
        }
        // console.log({ getAllPersons: "Founded All Person", persons })
        res.status(200).json({message: "Founded All Person", persons })
    } catch (error) {
        console.log({ message: "Something went wrong!", error: error.message })
        res.status(500).json({ error: error.message })
    }
}

// Create a new person who want to ward of bad luck
export const createPerson = async (req, res) => {
    try {
        const {firstName, lastName, dateOfBirth, zodiacYear} = req.body;

        // Validate zodiac year
        if (!validateZodiacYear.includes(zodiacYear)) {
            res.status(400).json({ message: "Invalid zodiac year!" })
        }

        // Create new person object into MongoDB
        const newPerson = new Person({ firstName, lastName, dateOfBirth, zodiacYear });
        await newPerson.save();

        console.log({ message: "Person fill in successfully", newPerson })
        res.status(201).json({ message: "Person fill in successfully", newPerson});
    } catch (error) {
        console.log({ message: "Something went wrong!", error: error.message })
        res.status(500).json({ message: "Something went wrong!", error: error.message })
    }
}
/**
 * Define the schema of Students
 *  collection to be stored in the DB
 * **/ 

const mongoose= require("mongoose");

//Schema 
const studentSchema = new mongoose.Schema({
    name : String,
    age : Number
})

//Go ahead and crete corresponding collection in DB
module.exports = mongoose.model("Student", studentSchema);
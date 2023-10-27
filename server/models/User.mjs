import mongoose from "mongoose";
const { Schema }= mongoose;

// register mongoose schema
const userSchema = Schema({
	googleId: String,
	name: String,


})

mongoose.model('users', userSchema)


const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
	nombre: String,
	apellido: String,
	edad: Number,
})

const User = mongoose.model("Usuario", UserSchema);

module.exports = User;
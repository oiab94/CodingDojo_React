const mongoose = require("mongoose");

const JokeSchema = new mongoose.Schema({
	setup: {
		type: String,
		minlength: [10, "Tiene que tene al menos 10 caracteres"]
	},
	punchline:{
		type: String,
		minlength: [3, "Tiene que tener al menos 3 caracteres"]
	},
})

const Broma = mongoose.model("broma", JokeSchema);

module.exports = Broma;
const Jokes = require("../models/jokes.model");

const getJokes = (req, res) => {
	Jokes.find()
		.then(
			(joke) => res.json({jokes: joke})
		)
		.catch(
			(error) => console.log("MONGO: Find jokes error")
		)
}

const getOneJoke = (req, res) => {
	Jokes.findOne({_id: req.params.id},req.body)
		.then(
			(result) => res.json(result)
		)
		.catch(
			(error) => console.log("MONGO: Get one jokes error")
		)
}

const newJoke = (req, res) => {
	Jokes.create(req.body)
		.then(
			(newJoke) => res.json({ joke: newJoke })
		)
		.catch(
			(error) => console.log("MONGO: Create joke error")
		)
}

const updateJoke = (req, res) => {
	Jokes.updateOne({_id: req.params.id}, req.body)
		.then(
			(result) => res.json(result)
		)
		.catch(
			(error) => console.log("MONGO: Update joke error")
		)
}

const deleteJoke = (req, res) => {
	Jokes.remove({_id: req.params.id}, req.body)
		.then(
			(deleteJoke) => res.json(deleteJoke) 
		)
		.catch(
			(error) => console.log("MONGO: Delete joke error")
		)
}

module.exports = {
	getJokes,
	getOneJoke,
	newJoke,
	updateJoke,
	deleteJoke
}
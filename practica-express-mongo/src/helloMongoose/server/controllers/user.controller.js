const User = require("../models/user.model");

const getAllUsers = (req, res) => {
	User.find()
		.then(
			(user) => res.json({users: user}))
		.catch(
			(error) => console.log("MONGO: Controller error", error)
		)
}

const setNewUser = (req, res) => {
	User.create(req.body)
		.then(
			(newUser) => res.json({ user:  newUser})
		)
		.catch(
			(error) => console.log("MONGO: Crear nuevo usuario", error)
		)
}

const editUser = (req, res) => {
	User.updateOne({_id: req.params.id}, req.body)
		.then((result) => res.json(result))
		.catch((error) => console.log("No se pudo actualizar"))		
}

const deleteUser = (req, res)=>{
	User.deleteOne({_id: req.params.id})
	.then((result) => res.json(result))
	.catch((error) => console.log("No se pudo borrar"))
}

module.exports = {
	getAllUsers,
	setNewUser,
	editUser,
	deleteUser
}
const UserController = require("../controllers/user.controller");

const ruta = (app) =>{
	app.get("/api/getusers", UserController.getAllUsers);
	app.post("/api/setUser", UserController.setNewUser);
	app.put("/api/editUser/:id", UserController.editUser);
	app.delete("/api/deleteUser/:id", UserController.deleteUser);
};

module.exports = ruta;